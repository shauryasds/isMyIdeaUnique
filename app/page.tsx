"use client";

import { motion } from "framer-motion";
import Hero from "@/components/Hero";

// Types
type Feature = { icon: string; title: string; desc: string };
type FAQ = { question: string; answer: string };

// Features
const features: Feature[] = [
  {
    icon: "🔎",
    title: "Market Scan Instantly",
    desc: "Our AI cross-checks the web and niche communities in seconds to see if your idea is truly unique.",
  },
  {
    icon: "🤖",
    title: "Co-founder Intelligence",
    desc: "FounderAI agents brainstorm with you, anticipating pitfalls and adding creative insights like a real startup partner.",
  },
  {
    icon: "🔐",
    title: "Private by Design",
    desc: "Your ideas never leave your device—no storage, no logs. Not even we can access your thoughts.",
  },
  {
    icon: "💡",
    title: "Actionable Insights",
    desc: "Don’t just get a grade—get specific advice and next steps powered by deep startup know-how.",
  },
];

// Roadmap
const roadmap: Feature[] = [
  { icon: "📊", title: "Detailed Scoring", desc: "Transparency across innovation, competition, & monetization." },
  { icon: "📄", title: "Auto-Pitchdeck", desc: "Generate full pitch decks based on AI validation." },
  { icon: "🪪", title: "Document AI", desc: "Ask questions to uploaded business docs, get instant feedback." },
  { icon: "👨‍👩‍👧‍👦", title: "Founder Community", desc: "Seek support & votes from real founders (anonymously)." },
];



// FAQ
const faqs: FAQ[] = [
  {
    question: "Is my idea really private?",
    answer: "Yes. Your idea is only processed in-memory; we don’t store it or use it for training.",
  },
  {
    question: "How is FounderAI different?",
    answer: "Unlike basic market research tools, we act like a sparring partner—giving you both data and actionable insights.",
  },
  {
    question: "What does it cost?",
    answer: "Our core validation tool is free during early access. Premium features (pitch decks, community, etc.) coming soon.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-tl from-black via-[#170E26] to-black text-white selection:bg-purple-900 selection:text-purple-200">

      <Hero />

      {/* HOW IT WORKS */}
      <section id="howitwork" className="relative bg-black py-20 px-4 md:px-0 overflow-hidden">
        {/* Modern SVG divider on top */}
        <svg className="absolute top-0 left-0 w-full h-[80px] pointer-events-none" viewBox="0 0 1440 80" fill="none">
          <path fill="#170E26" fillOpacity="1" d="M0,80 C300,10 1100,170 1440,40 L1440,0 L0,0 Z" />
        </svg>

        <div className="relative max-w-5xl mx-auto z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-purple-300 text-center mb-16">
            How It Works
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {/* Step 1 */}
            <div className="group relative flex flex-col items-center bg-gradient-to-b from-[#25183d] via-zinc-900 to-black rounded-3xl shadow-2xl border-2 border-purple-700 hover:border-fuchsia-400 p-9 transition transform hover:-translate-y-2 hover:scale-105">
              <div className="absolute top-4 right-4 bg-purple-700/20 rounded-full px-3 py-1 text-purple-200 text-sm font-bold">Step 1</div>
              <span className="text-[64px] mb-4 bg-gradient-to-br from-purple-400 via-fuchsia-400 to-purple-200 bg-clip-text text-transparent drop-shadow-lg">📝</span>
              <h3 className="font-black text-xl mb-2 text-white tracking-tight">Type Your Idea</h3>
              <p className="text-gray-300 text-center text-base">Describe your startup vision in your own words—no rigid templates, just your authentic pitch.</p>
            </div>
            {/* Step 2 */}
            <div className="group relative flex flex-col items-center bg-gradient-to-b from-[#25183d] via-zinc-900 to-black rounded-3xl shadow-2xl border-2 border-purple-700 hover:border-fuchsia-400 p-9 transition transform hover:-translate-y-2 hover:scale-105">
              <div className="absolute top-4 right-4 bg-purple-700/20 rounded-full px-3 py-1 text-purple-200 text-sm font-bold">Step 2</div>
              <span className="text-[64px] mb-4 bg-gradient-to-br from-purple-400 via-fuchsia-400 to-purple-200 bg-clip-text text-transparent drop-shadow-lg animate-bounce-slow">🤖</span>
              <h3 className="font-black text-xl mb-2 text-white tracking-tight">AI Validation</h3>
              <p className="text-gray-300 text-center text-base">Our AI scans the web and community knowledge, surfacing competition, risks, and uniqueness.</p>
            </div>
            {/* Step 3 */}
            <div className="group relative flex flex-col items-center bg-gradient-to-b from-[#25183d] via-zinc-900 to-black rounded-3xl shadow-2xl border-2 border-purple-700 hover:border-fuchsia-400 p-9 transition transform hover:-translate-y-2 hover:scale-105">
              <div className="absolute top-4 right-4 bg-purple-700/20 rounded-full px-3 py-1 text-purple-200 text-sm font-bold">Step 3</div>
              <span className="text-[64px] mb-4 bg-gradient-to-br from-purple-400 via-fuchsia-400 to-purple-200 bg-clip-text text-transparent drop-shadow-lg">🚀</span>
              <h3 className="font-black text-xl mb-2 text-white tracking-tight">Get Actionables</h3>
              <p className="text-gray-300 text-center text-base">Get not just “yes or no,” but instant practical steps and insights to power up your launch.</p>
            </div>
          </div>
        </div>

        {/* SVG wave divider bottom */}
        <svg className="absolute bottom-0 left-0 w-full h-[70px] pointer-events-none" viewBox="0 0 1440 70" fill="none">
          <path fill="#170E26" fillOpacity="1" d="M0,0 C280,80 1100,-60 1440,60 L1440,70 L0,70 Z" />
        </svg>
      </section>


      {/* FEATURES */}
      <section id="features" className="py-16 md:py-24 bg-gradient-to-br from-[#191024] via-black to-[#25183d]">
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-2xl md:text-4xl font-bold text-center text-purple-300 mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            Built for Founders Who <span className="text-purple-100 font-black">Move Fast</span>
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="rounded-2xl bg-zinc-900 border border-purple-800 p-6 flex flex-col items-center text-center hover:shadow-purple-900/30 hover:scale-105 transition cursor-pointer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.11 }}
              >
                <div className="text-4xl mb-2">{feature.icon}</div>
                <div className="font-bold text-lg text-purple-200 mb-2">{feature.title}</div>
                <div className="text-gray-300">{feature.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROADMAP */}
      <section className="bg-black py-16 md:py-24 border-t border-purple-900">
        <div className="max-w-5xl mx-auto">
          <motion.h2 className="text-2xl md:text-4xl font-bold text-center text-purple-400 mb-10" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            🚀 What’s Next for FounderAI
          </motion.h2>
          <div className="grid sm:grid-cols-2 gap-7">
            {roadmap.map((item, i) => (
              <motion.div
                key={item.title}
                className="rounded-xl bg-gradient-to-br from-purple-950/25 via-black to-zinc-900 border border-purple-800/40 p-6"
                initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.13 }}
              >
                <div className="flex items-center gap-3 text-xl text-purple-200 font-semibold mb-2">
                  <span className="text-2xl">{item.icon}</span>{item.title}
                </div>
                <div className="text-gray-300">{item.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* FAQ */}
      <section className="py-16 md:py-24 bg-black border-t border-purple-950">
        <div className="max-w-3xl mx-auto px-2">
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-center text-purple-200 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Frequently Asked Questions
          </motion.h2>
          <div className="space-y-7">
            {faqs.map((faq, idx) => (
              <motion.div
                key={faq.question}
                className="rounded-xl border border-purple-800 bg-zinc-900/80 px-5 py-4"
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: idx * 0.13 }}
              >
                <div className="font-medium mb-1 text-purple-200">{faq.question}</div>
                <div className="text-gray-300">{faq.answer}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 md:py-24 bg-gradient-to-tr from-black via-purple-950 via-30% to-black flex flex-col items-center border-t border-purple-900">
        <motion.h2
          className="text-3xl md:text-4xl text-white font-extrabold text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Validate your next big idea—faster than ever.
        </motion.h2>
        <motion.p
          className="mt-4 text-lg text-gray-300 mb-9 text-center max-w-2xl"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}>
          No credit card. No lock-in. Discover, improve, and validate your startup ambition today.
        </motion.p>
        <motion.a
          href="/validate"
          className="px-10 py-4 rounded-full bg-purple-600 text-white font-bold shadow-xl hover:bg-purple-700 hover:-translate-y-1 transition-all text-lg mb-3"
          whileHover={{ scale: 1.08 }}
        >
          Get Started Free
        </motion.a>
        <div className="text-xs text-gray-500 mt-2">FounderAI is in alpha. Feedback from founders is shaping our roadmap!</div>
      </section>


    </div>
  );
}
