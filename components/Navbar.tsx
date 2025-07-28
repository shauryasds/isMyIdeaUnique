'use client';

import { useState, useEffect } from 'react';
import { createClient } from '../utils/supabase/client';
import type { User } from '@supabase/supabase-js';
import Link from 'next/link';

export default function Navbar() {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        async function fetchUser() {
            const supabase = createClient();
            const {
                data: { user },
            } = await supabase.auth.getUser();
            setUser(user);
        }
        fetchUser();
    }, []);

    async function loginWithGoogle() {
        const supabase = createClient();
        await supabase.auth.signInWithOAuth({
            provider: 'google',

        });
    }

    return (

        <nav className="w-full px-6 md:px-10 pt-10 text-md font-semibold bg-transparent backdrop-blur-sm text-white fixed top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto flex justify-around items-center">
                {/* Logo */}
                <Link href={'/'} className="text-2xl font-bold tracking-tight">
                    FounderAI
                </Link>



                {/* Auth Buttons */}
                <div className="tex-sm md:text-md flex items-center gap-4 p-4">
                    {!user ? (
                        <button
                            onClick={loginWithGoogle}
                            className="px-6 py-2 text-md rounded-full bg-white text-black font-semibold hover:bg-purple-200 transition-all duration-300 shadow-md"
                        >
                            Login
                        </button>
                    ) : (
                        <Link
                            href="/validate"
                            className="group relative max-w-[240px] truncate px-6 py-2 text-md rounded-full border border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white transition-all duration-300 shadow-md"
                        >
                            {`Hello ${user?.user_metadata?.full_name?.trim()?.slice(0, 8)
                                }` || 'Hello, User!'}
                            <span className="invisible group-hover:visible absolute left-0 top-full mt-2 w-max max-w-xs bg-gray-900 text-white text-sm px-3 py-2 rounded-md shadow-lg z-50">
                                Chat with AI with your business plan and real-time search
                            </span>
                        </Link>

                    )}
                </div>
            </div >



        </nav >
    );
}
