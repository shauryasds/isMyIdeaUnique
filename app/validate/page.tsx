'use client'
import IdeaInput from "@/components/IdeaInput";
import { motion } from "framer-motion";

export default function ValidateIdeaPage() {
    return (
        <main className="min-h-screen mt-4 bg-gradient-to-br from-black via-[#170E26] to-black px-4 md:px-16 py-14 flex flex-col items-center">

            <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-2xl flex flex-col items-center mt-10 bg-zinc-900/70 rounded-3xl shadow-xl px-6 py-10"
            >
                {/* Friendly bot avatar & heading */}
                <div className="flex items-center justify-center gap-4 mb-4">
                    <span className=" w-16 h-16 rounded-full bg-gradient-to-br from-fuchsia-500 via-purple-500 to-violet-400 flex items-center justify-center text-3xl border-4 border-purple-700 shadow-xl">
                        🤖
                    </span>
                    <div>
                        <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-300 bg-clip-text text-transparent mb-1 tracking-tight whitespace-nowrap">
                            Meet FounderAI
                        </h1>
                        <div className="text-lg text-purple-200 font-semibold ml-1">Validate. Rate. Launch 🚀</div>
                    </div>
                </div>

                <motion.p
                    className="mt-4 text-md md:text-lg text-gray-300 text-center leading-snug"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {/* Drop your business idea below. No signup. No storage. Just honest startup feedback. */}
                </motion.p>

                {/* Animated arrow to input */}
                <motion.div
                    className="flex justify-center mt-5 mb-2"
                    initial={{ opacity: 0, y: -12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, type: "spring", stiffness: 40 }}
                >
                    <span className="animate-bounce text-3xl text-violet-400">↓</span>
                </motion.div>

                <IdeaInput />

                {/* What happens note */}
                <div className="mt-7 text-gray-400 text-xs text-center max-w-sm mx-auto">
                    <div className="mb-1 flex flex-row items-center justify-center gap-2">
                        <svg width="20" height="20" fill="none" className="inline-block" viewBox="0 0 24 24"><path d="M8.5 11C9.05228 11 9.5 11.4477 9.5 12C9.5 12.5523 9.05228 13 8.5 13C7.94772 13 7.5 12.5523 7.5 12C7.5 11.4477 7.94772 11 8.5 11ZM12 11C12.5523 11 13 11.4477 13 12C13 12.5523 12.5523 13 12 13C11.4477 13 11 12.5523 11 12C11 11.4477 11.4477 11 12 11ZM16 12C16 11.4477 15.5523 11 15 11C14.4477 11 14 11.4477 14 12C14 12.5523 14.4477 13 15 13C15.5523 13 16 12.5523 16 12Z" fill="#a78bfa" /></svg>
                        <span>
                            <span className="text-purple-300 font-semibold">How it works:</span> FounderAI checks Google, Reddit & more—rates your originality, and gives you a custom startup score & next steps.
                        </span>
                    </div>
                    <div>
                        <span className="italic text-purple-200">We never save your idea. 100% private.</span>
                    </div>
                </div>
            </motion.div>
        </main>
    );
}
