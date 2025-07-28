# 🚀 FounderAI – Validate Your Startup Idea in Seconds (with GenAI + Real-Time Search)

FounderAI is a full-stack, production-grade web application that uses **Generative AI**, **real-time Google search**, and advanced LLM reasoning to **instantly validate startup ideas**.

This project was formerly known as `isMyIdeaUnique`, now rebranded as **FounderAI** to better reflect its mission of empowering entrepreneurs and innovators through intelligent idea evaluation.

---

## 🧠 Key Features

- 🔍 **Real-Time Web Search** using Google & SerpAPI to discover similar ideas from:
  - Product Hunt
  - GitHub
  - Reddit
  - Blogs & Startup Directories
- 🤖 **AI-Powered Analysis** using Gemini (or OpenAI/GPT-compatible) models
- 📊 **Uniqueness Scoring** based on innovation, saturation & monetization
- 💡 **Evolution Suggestions** to improve your idea & find a niche
- 🧠 **Pitch Deck Generator** with automatic slides via GenAI
- 🧪 **Validation Experiments Generator** to test MVP ideas
- 💬 **Chat with Your Business Plan** (upload PDF/Docs and get insights)
- 🔐 **NDA Mode** for private validation
- 🔗 Built with **Next.js 15**, **Supabase**, **LangChain**, **TypeScript**, and **Docker**

---

## 📦 Tech Stack

| Layer         | Tools & Services                                             |
|---------------|-------------------------------------------------------------|
| Frontend      | Next.js 15 (App Router), Tailwind CSS                       |
| Backend       | Node.js 22, Express, Supabase (DB + Auth + Storage)         |
| AI Layer      | Gemini / GPT via LangChain + Google Search APIs             |
| Search Layer  | SerpAPI, Google Custom Search API                           |
| DevOps        | Docker, Docker Compose                                      |
| Deployment    | Vercel / Docker / Any cloud of choice                       |

---

## 🐳 Run with Docker

### 1. Create `.env.local` file

```env
NEXT_PUBLIC_SUPABASE_URL=https://yse.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJsemZjcm90ZGRlYmRQP8d2YJ39W9dHNwt05uG-nkbJvEfGuVU2Y
GOOGLE_API_KEY=AIzaSyBYiS1yom7ALs
SERPAPI_API_KEY=c58d50d5fd883bef8da
DATABASE_URL=s-0-ap-southeast-1.pooler.supabase.com:5432/postgres
```


### 2. Build Docker image

- docker build -t founderai -f dockerfile .
### 3. Run the container

- docker run --env-file .env.local -p 3000:3000 founderai
  
🔗 Open at: http://localhost:3000

# 📂 Project Structure


founderai/
│
├── app/                     # ✅ Next.js 15+ App Router pages and layouts
│
├── components/              # ✅ Reusable UI components (cards, headers, etc.)
│
├── lib/                     # ✅ Client utilities (Supabase client, AI clients)
│
├── public/                  # Static assets (images, favicons, etc.)
│
├── utils/
│   └── supabase/            # ✅ Supabase helper logic (auth, db, etc.)
│
├── .dockerignore            # Files/directories excluded from Docker context
├── .gitignore               # Git ignored files
├── README.md                # 🔥 Project overview & instructions
├── components.json          # Component config/registry (if dynamic UI)
├── dockerfile               # 🐳 Docker image definition
├── eslint.config.mjs        # ESLint config for linting the project
├── middleware.ts            # Next.js middleware (auth, redirects, etc.)
├── next.config.ts           # Next.js config (image domains, redirects, etc.)
├── package.json             # Project metadata & npm scripts
├── package-lock.json        # Exact package versions
├── postcss.config.mjs       # Tailwind/PostCSS config
└── tsconfig.json            # TypeScript configuration



# ✨ What Sets FounderAI Apart?
- 🔥 Agentic AI Workflows using LangChain for autonomy

- 📚 Multi-source Search from live public web content

- ⚙️ Vector Embedding (coming soon) for idea memory

- 🎯 Actionable Results: Not just scores, but next steps

- 🧩 Modular Architecture — easy to extend or scale

- 🧪 Future Enhancements
- ✅ Idea Journal with version history

- 🧠 AI Brain that remembers ideas you've explored

- 🧑‍🤝‍🧑 Community feedback + voting

- 📤 Save & share validation reports

- 📈 Trend detection with Google Trends

- 🛡️ Security Notes

# 👨‍💻 Author
- Shaurya Deep Shukla
-Final Year CSE | GenAI x MERN Dev 
- Built for open founders, indie hackers, and startup dreamers 🚀

# 📃 License
- MIT License – use it, improve it, and give credit if it helps you 🌱

- “FounderAI saves founders weeks of research and lets them validate ideas in seconds — using the power of AI and real-time web intelligence.”
