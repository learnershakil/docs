import type { Domain, Lang, TranslatableString } from "@/types";

interface RawDomain {
    id: string;
    title: TranslatableString;
    slug: string;
    description: TranslatableString;
    icon: string;
    color: string;
    tagColor: string;
    roadmapCount: number;
    noteCount: number;
}

const rawDomains: RawDomain[] = [
    {
        id: "full-stack",
        title: { en: "Full Stack", hi: "Pura Stack (Full Stack)" },
        slug: "full-stack",
        description: {
            en: "End-to-end web development from frontend frameworks to backend APIs, databases, and deployment pipelines.",
            hi: "Shuru se ant tak web development, frontend framework se lekar backend API, database, aur deployment tak sab kuch."
        },
        icon: "⚡",
        color: "#3b82f6",
        tagColor: "#3b82f6",
        roadmapCount: 1,
        noteCount: 3,
    },
    {
        id: "ai-ml",
        title: { en: "AI & ML", hi: "AI aur ML" },
        slug: "ai-ml",
        description: {
            en: "Machine learning fundamentals, neural networks, model training, and production ML system design.",
            hi: "Machine learning ke basic concepts, neural networks, model banana, aur real-world me ML system design karna."
        },
        icon: "🧠",
        color: "#8b5cf6",
        tagColor: "#8b5cf6",
        roadmapCount: 1,
        noteCount: 3,
    },
    {
        id: "app-dev",
        title: { en: "App Dev", hi: "App Banayein" },
        slug: "app-dev",
        description: {
            en: "Cross-platform and native mobile app development with React Native, Flutter, and Swift.",
            hi: "React Native, Flutter, aur Swift ka use karke cross-platform aur native mobile app development."
        },
        icon: "📱",
        color: "#06b6d4",
        tagColor: "#06b6d4",
        roadmapCount: 1,
        noteCount: 3,
    },
    {
        id: "cyber-security",
        title: { en: "Cyber Security", hi: "Cyber Suraksha" },
        slug: "cyber-security",
        description: {
            en: "Security fundamentals, penetration testing, cryptography, and secure system architecture.",
            hi: "Security ke basics, hacking check karna (penetration testing), cryptography, aur secure system banana."
        },
        icon: "🛡️",
        color: "#ef4444",
        tagColor: "#ef4444",
        roadmapCount: 1,
        noteCount: 3,
    },
    {
        id: "gen-ai",
        title: { en: "GenAI", hi: "GenAI" },
        slug: "gen-ai",
        description: {
            en: "Generative AI, large language models, prompt engineering, RAG systems, and AI application development.",
            hi: "Generative AI, baday language models (LLMs), prompt engineering, RAG systems, aur naye AI apps banana."
        },
        icon: "✨",
        color: "#f59e0b",
        tagColor: "#f59e0b",
        roadmapCount: 1,
        noteCount: 3,
    },
    {
        id: "devops",
        title: { en: "DevOps", hi: "DevOps" },
        slug: "devops",
        description: {
            en: "CI/CD pipelines, containerization, infrastructure as code, monitoring, and cloud-native practices.",
            hi: "CI/CD pipelines, Docker, infrastructure as code, monitoring, aur cloud-native kaam karne ke tareeqey."
        },
        icon: "🔧",
        color: "#10b981",
        tagColor: "#10b981",
        roadmapCount: 1,
        noteCount: 3,
    },
    {
        id: "web3",
        title: { en: "Web3", hi: "Web3 (Crypto & Blockchain)" },
        slug: "web3",
        description: {
            en: "Smart contracts, decentralized applications (dApps), Ethereum, Solana, and blockchain fundamentals.",
            hi: "Smart contracts, decentralized apps (dApps), Ethereum, Solana, aur blockchain ki poori jaankari."
        },
        icon: "🔗",
        color: "#14b8a6",
        tagColor: "#14b8a6",
        roadmapCount: 0,
        noteCount: 0,
    },
    {
        id: "languages",
        title: { en: "Languages", hi: "Programming Bhashayein" },
        slug: "languages",
        description: {
            en: "Mastering core programming languages like Python, JavaScript, Rust, Go, and C++.",
            hi: "Python, JavaScript, Rust, Go, aur C++ jaisi zaruri programming bhashaon (languages) me maharat haasil karna."
        },
        icon: "💻",
        color: "#f43f5e",
        tagColor: "#f43f5e",
        roadmapCount: 0,
        noteCount: 0,
    }
];

export function getDomains(lang: Lang = "en"): Domain[] {
    return rawDomains.map((d) => ({
        ...d,
        title: d.title[lang],
        description: d.description[lang],
    }));
}

// Keep export for default english fallback in static contexts
export const domains: Domain[] = getDomains("en");

export function getDomainBySlug(slug: string, lang: Lang = "en"): Domain | undefined {
    return getDomains(lang).find((d) => d.slug === slug);
}

export function getAllDomainSlugs(): string[] {
    return rawDomains.map((d) => d.slug);
}
