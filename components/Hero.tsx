// src/components/Hero.tsx

import Link from "next/link";

export default function Hero() {
    return (
        <section className="relative bg-black text-white py-24 px-6 mt-4 overflow-hidden min-h-[100vh] flex items-center">
            {/* Background Glow */}
            <div className="absolute -top-40 left-1/2 transform -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-600 opacity-30 rounded-full blur-3xl z-0" />

            <div className="max-w-3xl mx-auto text-center relative z-10">
                <div className="relative flex justify-center items-center mb-3">
                    {/* Glowing Ring */}
                    <div className="relative   flex items-center justify-center overflow-hidden shadow-lg group transition-transform duration-300 hover:scale-105">
                        {/* Optional: subtle border animation using background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-indigo-500 opacity-20 blur-2xl animate-pulse z-0"></div>

                        {/* Tagline Text */}
                        <div className="text-center text-xs uppercase tracking-widest text-purple-400 font-semibold z-10 transition-transform duration-300">
                            Your AI Co-Founder
                        </div>
                    </div>

                </div>



                {/* Main Heading */}
                <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
                    <span className="bg-gradient-to-r from-orange-400 via-pink-500 to-purple-600 text-transparent bg-clip-text">
                        Is Your Idea Unique?
                    </span>
                </h1>

                {/* Description */}
                <p className="mt-4 text-gray-300 text-lg max-w-2xl mx-auto">
                    Safe | Secure | Private
                </p>

                {/* CTA */}
                <div className="mt-10 flex justify-center gap-4 flex-wrap">
                    <Link href={'/validate'} className="px-6 py-3 text-md rounded-full bg-white text-black font-semibold hover:bg-purple-200 transition-all duration-300 shadow animate-bounce">
                        Check  Now
                    </Link>
                    <Link href={"#howitwork"} className="px-6 py-3 text-md rounded-full border border-purple-500 text-purple-300 hover:bg-purple-600 hover:text-white transition-all duration-300 shadow">
                        Learn More
                    </Link>
                </div>
            </div>
        </section>
    );
}