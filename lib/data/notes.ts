import type { NoteMetadata, NoteTopic, Lang, TranslatableString } from "@/types";

interface RawNoteTopic {
    id: string;
    title: TranslatableString;
    slug: string;
    children?: RawNoteTopic[];
}

interface RawNoteMetadata {
    title: TranslatableString;
    description: TranslatableString;
    slug: string;
    domainSlug: string;
    topicSlug: string;
    lastUpdated: string;
    author: string;
    tags: string[];
    order: number;
}

const rawNoteTopics: Record<string, RawNoteTopic[]> = {
    "full-stack": [
        {
            id: "fs-fundamentals",
            title: { en: "Fundamentals", hi: "Zaruri Baten (Fundamentals)" },
            slug: "fundamentals",
            children: [
                { id: "fs-html-css", title: { en: "HTML & CSS", hi: "HTML aur CSS" }, slug: "html-css" },
                { id: "fs-javascript", title: { en: "JavaScript", hi: "JavaScript" }, slug: "javascript" },
                { id: "fs-typescript", title: { en: "TypeScript", hi: "TypeScript" }, slug: "typescript" },
            ],
        },
    ],
    "ai-ml": [
        {
            id: "ml-foundations",
            title: { en: "Foundations", hi: "Buniyaad (Foundations)" },
            slug: "foundations",
            children: [
                { id: "ml-python-ds", title: { en: "Python for DS", hi: "Data Science ke liye Python" }, slug: "python-data-science" },
                { id: "ml-math", title: { en: "Math for ML", hi: "ML ki Maths" }, slug: "math-for-ml" },
                { id: "ml-algorithms", title: { en: "ML Algorithms", hi: "ML Algorithms" }, slug: "ml-algorithms" },
            ],
        },
    ],
    "app-dev": [
        {
            id: "ad-mobile",
            title: { en: "Mobile Dev", hi: "Mobile App Banana" },
            slug: "mobile-dev",
            children: [
                { id: "ad-rn", title: { en: "React Native", hi: "React Native" }, slug: "react-native" },
                { id: "ad-flutter", title: { en: "Flutter", hi: "Flutter" }, slug: "flutter" },
                { id: "ad-patterns", title: { en: "Architecture", hi: "Architecture Patterns" }, slug: "architecture" },
            ],
        },
    ],
    "cyber-security": [
        {
            id: "cs-basics",
            title: { en: "Security Basics", hi: "Security ki Basic Batey" },
            slug: "security-basics",
            children: [
                { id: "cs-networking", title: { en: "Networking", hi: "Networking" }, slug: "networking" },
                { id: "cs-linux", title: { en: "Linux Security", hi: "Linux Security" }, slug: "linux-security" },
                { id: "cs-owasp", title: { en: "OWASP Top 10", hi: "OWASP Top 10" }, slug: "owasp-top-10" },
            ],
        },
    ],
    "gen-ai": [
        {
            id: "ga-core",
            title: { en: "Core Concepts", hi: "Zaruri Concepts" },
            slug: "core-concepts",
            children: [
                { id: "ga-prompting", title: { en: "Prompt Engineering", hi: "Prompt Engineering" }, slug: "prompt-engineering" },
                { id: "ga-rag", title: { en: "RAG Systems", hi: "RAG Systems" }, slug: "rag-systems" },
                { id: "ga-agents", title: { en: "AI Agents", hi: "AI Agents" }, slug: "ai-agents" },
            ],
        },
    ],
    devops: [
        {
            id: "do-infra",
            title: { en: "Infrastructure", hi: "Infrastructure" },
            slug: "infrastructure",
            children: [
                { id: "do-docker", title: { en: "Docker", hi: "Docker" }, slug: "docker" },
                { id: "do-k8s", title: { en: "Kubernetes", hi: "Kubernetes" }, slug: "kubernetes" },
                { id: "do-cicd", title: { en: "CI/CD", hi: "CI/CD" }, slug: "cicd" },
            ],
        },
    ],
    web3: [
        {
            id: "w3-basics",
            title: { en: "Basics", hi: "Zaruri Baten (Basics)" },
            slug: "basics",
            children: [
                { id: "w3-blockchain", title: { en: "Blockchain", hi: "Blockchain" }, slug: "blockchain" },
            ],
        },
    ],
    languages: [
        {
            id: "lang-rust",
            title: { en: "Rust", hi: "Rust" },
            slug: "rust",
            children: [
                { id: "rust-concepts", title: { en: "Concepts", hi: "Concepts" }, slug: "concepts" },
            ],
        },
    ]
};

const rawNotesMeta: Record<string, RawNoteMetadata[]> = {
    "full-stack": [
        {
            title: { en: "HTML & CSS Fundamentals", hi: "HTML aur CSS ke basic fande" },
            description: { en: "Semantic HTML, modern CSS layouts, and responsive design patterns.", hi: "Semantic HTML, CSS ke modern layout aur responsive design." },
            slug: "html-css",
            domainSlug: "full-stack",
            topicSlug: "fundamentals",
            lastUpdated: "2025-12-15",
            author: "BrokenN Shell",
            tags: ["html", "css", "responsive"],
            order: 1,
        },
        {
            title: { en: "JavaScript Deep Dive", hi: "JavaScript me gehri dive" },
            description: { en: "Closures, prototypes, async/await, and modern JS patterns.", hi: "Closures, prototypes, async kaam (await) aur aadhunik JS." },
            slug: "javascript",
            domainSlug: "full-stack",
            topicSlug: "fundamentals",
            lastUpdated: "2025-12-20",
            author: "BrokenN Shell",
            tags: ["javascript", "es6", "async"],
            order: 2,
        },
        {
            title: { en: "TypeScript Essentials", hi: "TypeScript ki zaruratey" },
            description: { en: "Type system, generics, utility types, and strict configuration.", hi: "Type system, generics, utility types aur strict check lagana." },
            slug: "typescript",
            domainSlug: "full-stack",
            topicSlug: "fundamentals",
            lastUpdated: "2026-01-05",
            author: "BrokenN Shell",
            tags: ["typescript", "types", "generics"],
            order: 3,
        },
    ],
    "ai-ml": [
        {
            title: { en: "Python for Data Science", hi: "Data Science ke liye Python" },
            description: { en: "NumPy, Pandas, Matplotlib, and data wrangling techniques.", hi: "NumPy, Pandas, Matplotlib, aur data saaf karne ke tarike." },
            slug: "python-data-science",
            domainSlug: "ai-ml",
            topicSlug: "foundations",
            lastUpdated: "2025-11-10",
            author: "BrokenN Shell",
            tags: ["python", "numpy", "pandas"],
            order: 1,
        },
        {
            title: { en: "Mathematics for ML", hi: "Machine Learning ki Maths" },
            description: { en: "Linear algebra, calculus, and probability for machine learning.", hi: "ML ke liye linear algebra, calculus, aur probability." },
            slug: "math-for-ml",
            domainSlug: "ai-ml",
            topicSlug: "foundations",
            lastUpdated: "2025-11-20",
            author: "BrokenN Shell",
            tags: ["math", "linear-algebra", "statistics"],
            order: 2,
        },
        {
            title: { en: "ML Algorithms", hi: "Machine learning Algorithms" },
            description: { en: "Supervised and unsupervised learning algorithms explained.", hi: "Supervised aur unsupervised sikhne ke algorithms." },
            slug: "ml-algorithms",
            domainSlug: "ai-ml",
            topicSlug: "foundations",
            lastUpdated: "2025-12-01",
            author: "BrokenN Shell",
            tags: ["algorithms", "regression", "classification"],
            order: 3,
        },
    ],
    "app-dev": [
        {
            title: { en: "React Native Fundamentals", hi: "React Native ki jankari" },
            description: { en: "Core components, navigation, and cross-platform best practices.", hi: "Core UI components, navigation, aur cross-platform apps banana." },
            slug: "react-native",
            domainSlug: "app-dev",
            topicSlug: "mobile-dev",
            lastUpdated: "2025-12-10",
            author: "BrokenN Shell",
            tags: ["react-native", "mobile", "expo"],
            order: 1,
        },
        {
            title: { en: "Flutter Development", hi: "Flutter se Development" },
            description: { en: "Dart language, widget tree, and state management with Riverpod.", hi: "Dart bhasha, widget tree, aur Riverpod ke sath state sambhalna." },
            slug: "flutter",
            domainSlug: "app-dev",
            topicSlug: "mobile-dev",
            lastUpdated: "2025-12-18",
            author: "BrokenN Shell",
            tags: ["flutter", "dart", "widgets"],
            order: 2,
        },
        {
            title: { en: "Mobile Architecture Patterns", hi: "Mobile app Architecture Patterns" },
            description: { en: "MVVM, clean architecture, and dependency injection in mobile apps.", hi: "MVVM, saaf suthra architecture, aur dependency injection." },
            slug: "architecture",
            domainSlug: "app-dev",
            topicSlug: "mobile-dev",
            lastUpdated: "2026-01-02",
            author: "BrokenN Shell",
            tags: ["architecture", "mvvm", "clean-arch"],
            order: 3,
        },
    ],
    "cyber-security": [
        {
            title: { en: "Networking Fundamentals", hi: "Networking Basics" },
            description: { en: "TCP/IP, DNS, HTTP protocols, and packet analysis basics.", hi: "TCP/IP, DNS, HTTP aur packet analysis ke bare me." },
            slug: "networking",
            domainSlug: "cyber-security",
            topicSlug: "security-basics",
            lastUpdated: "2025-11-05",
            author: "BrokenN Shell",
            tags: ["networking", "tcp-ip", "dns"],
            order: 1,
        },
        {
            title: { en: "Linux Security", hi: "Linux Security" },
            description: { en: "File permissions, user management, firewalls, and hardening.", hi: "File permissions, user banana, firewall, aur OS ko mazboot karna." },
            slug: "linux-security",
            domainSlug: "cyber-security",
            topicSlug: "security-basics",
            lastUpdated: "2025-11-15",
            author: "BrokenN Shell",
            tags: ["linux", "permissions", "firewall"],
            order: 2,
        },
        {
            title: { en: "OWASP Top 10", hi: "OWASP ke Top 10 Khatre" },
            description: { en: "The ten most critical web application security risks explained.", hi: "Web apps ke sabse bade 10 security risks aur unki details." },
            slug: "owasp-top-10",
            domainSlug: "cyber-security",
            topicSlug: "security-basics",
            lastUpdated: "2025-12-01",
            author: "BrokenN Shell",
            tags: ["owasp", "xss", "injection"],
            order: 3,
        },
    ],
    "gen-ai": [
        {
            title: { en: "Prompt Engineering", hi: "Prompt Engineering karna" },
            description: { en: "Techniques for effective prompt design and structured output.", hi: "Sahi output lene ke liye behtar prompts likhne ka tareeqa." },
            slug: "prompt-engineering",
            domainSlug: "gen-ai",
            topicSlug: "core-concepts",
            lastUpdated: "2026-01-10",
            author: "BrokenN Shell",
            tags: ["prompts", "few-shot", "chain-of-thought"],
            order: 1,
        },
        {
            title: { en: "RAG Systems", hi: "RAG Systems" },
            description: { en: "Building retrieval-augmented generation pipelines.", hi: "Retrieval-augmented generation (RAG) pipelines build karna." },
            slug: "rag-systems",
            domainSlug: "gen-ai",
            topicSlug: "core-concepts",
            lastUpdated: "2026-01-15",
            author: "BrokenN Shell",
            tags: ["rag", "vector-db", "embeddings"],
            order: 2,
        },
        {
            title: { en: "AI Agents", hi: "AI Agents banana" },
            description: { en: "Autonomous agents with tool use, memory, and reasoning.", hi: "Aise agents jo tools chalayen, memory yaad rakhen aur sochein." },
            slug: "ai-agents",
            domainSlug: "gen-ai",
            topicSlug: "core-concepts",
            lastUpdated: "2026-01-20",
            author: "BrokenN Shell",
            tags: ["agents", "tool-use", "reasoning"],
            order: 3,
        },
    ],
    devops: [
        {
            title: { en: "Docker Fundamentals", hi: "Docker ki Buniyaad" },
            description: { en: "Containers, images, Dockerfiles, and multi-stage builds.", hi: "Containers, images, Dockerfiles, aur multi-stage build process." },
            slug: "docker",
            domainSlug: "devops",
            topicSlug: "infrastructure",
            lastUpdated: "2025-11-25",
            author: "BrokenN Shell",
            tags: ["docker", "containers", "images"],
            order: 1,
        },
        {
            title: { en: "Kubernetes Essentials", hi: "Kubernetes ki Jaankari" },
            description: { en: "Pods, services, deployments, and cluster orchestration.", hi: "Pods, services, deployments, aur cluster ko manage krna." },
            slug: "kubernetes",
            domainSlug: "devops",
            topicSlug: "infrastructure",
            lastUpdated: "2025-12-05",
            author: "BrokenN Shell",
            tags: ["kubernetes", "pods", "helm"],
            order: 2,
        },
        {
            title: { en: "CI/CD Pipelines", hi: "CI/CD Pipelines ka Setup" },
            description: { en: "GitHub Actions, Jenkins, and automated deployment workflows.", hi: "GitHub Actions, Jenkins, aur automatic deployment pipelines." },
            slug: "cicd",
            domainSlug: "devops",
            topicSlug: "infrastructure",
            lastUpdated: "2025-12-15",
            author: "BrokenN Shell",
            tags: ["cicd", "github-actions", "jenkins"],
            order: 3,
        },
    ],
    web3: [
        {
            title: { en: "What is Blockchain?", hi: "Blockchain kya hai?" },
            description: { en: "A beginner's guide to distributed ledgers.", hi: "Distributed ledgers ke liye shuruwati guide." },
            slug: "what-is-blockchain",
            domainSlug: "web3",
            topicSlug: "basics",
            lastUpdated: "2026-02-22",
            author: "BrokenN Shell",
            tags: ["web3", "blockchain", "crypto"],
            order: 1,
        }
    ],
    languages: [
        {
            title: { en: "Rust Ownership Model", hi: "Rust Ownership Model" },
            description: { en: "Understanding memory safety without garbage collection.", hi: "Bina garbage collection ke memory safe rakhna." },
            slug: "rust-ownership",
            domainSlug: "languages",
            topicSlug: "rust",
            lastUpdated: "2026-02-22",
            author: "BrokenN Shell",
            tags: ["rust", "systems", "memory"],
            order: 1,
        }
    ]
};

// Localized getters

export function getTopicsByDomain(domainSlug: string, lang: Lang = "en"): NoteTopic[] {
    const raw = rawNoteTopics[domainSlug] ?? [];
    return raw.map(topic => ({
        ...topic,
        title: topic.title[lang],
        children: topic.children?.map(child => ({
            ...child,
            title: child.title[lang],
        })) as NoteTopic[] | undefined
    })) as NoteTopic[];
}

export function getNotesByDomain(domainSlug: string, lang: Lang = "en"): NoteMetadata[] {
    const raw = rawNotesMeta[domainSlug] ?? [];
    return raw.map(note => ({
        ...note,
        title: note.title[lang],
        description: note.description[lang],
    }));
}

export function getNoteBySlug(
    domainSlug: string,
    noteSlug: string,
    lang: Lang = "en"
): NoteMetadata | undefined {
    return getNotesByDomain(domainSlug, lang).find((n) => n.slug === noteSlug);
}
