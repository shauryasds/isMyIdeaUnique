// src/components/Footer.tsx
export default function Footer() {
    return (
        <footer className="bg-black border-t border-purple-900 text-gray-400 py-10 px-6 mt-20">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-center items-center gap-6 text-sm">
                <div className="flex ">
                    <p className="font-semibold text-white">FounderAI © {new Date().getFullYear()} |</p>
                    <p className="font-bold text-white"> |  Built By SHAURYA DEEP SHUKLA💡</p>
                </div>

            </div>
        </footer>
    );
}
