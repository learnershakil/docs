import type { Roadmap, Lang, TranslatableString } from "@/types";

interface RawRoadmapStep {
    id: string;
    title: TranslatableString;
    description: TranslatableString;
    topics: string[];
    resources: { title: string; url: string; type: "article" | "video" | "course" | "docs" }[];
    status: "beginner" | "intermediate" | "advanced";
}

interface RawRoadmap {
    id: string;
    domainSlug: string;
    title: TranslatableString;
    description: TranslatableString;
    steps: RawRoadmapStep[];
}

const rawRoadmaps: Record<string, RawRoadmap> = {
    "full-stack": {
        id: "full-stack-roadmap",
        domainSlug: "full-stack",
        title: { en: "Full Stack Developer Roadmap", hi: "Full Stack Developer Roadmap" },
        description: {
            en: "A structured path from frontend basics to full-stack production deployment.",
            hi: "Frontend basic se lekar full-stack production deployment tak ka ek structured raasta."
        },
        steps: [
            {
                id: "fs-1",
                title: { en: "HTML, CSS & JavaScript Fundamentals", hi: "HTML, CSS & JavaScript Fundamentals" },
                description: {
                    en: "Master the building blocks of the web. Understand semantic HTML, CSS layouts (Flexbox, Grid), and core JavaScript concepts including ES6+ syntax.",
                    hi: "Web ke fundamentals seekhein. Semantic HTML, CSS layouts (Flexbox, Grid), aur ES6+ syntax ke saath core JavaScript concepts clear karein."
                },
                topics: ["Semantic HTML", "CSS Grid & Flexbox", "ES6+ JavaScript", "DOM Manipulation"],
                resources: [
                    { title: "MDN Web Docs", url: "https://developer.mozilla.org", type: "docs" },
                    { title: "JavaScript.info", url: "https://javascript.info", type: "article" },
                ],
                status: "beginner",
            },
            {
                id: "fs-2",
                title: { en: "Frontend Framework (React)", hi: "Frontend Framework (React)" },
                description: {
                    en: "Learn component-based architecture with React. Understand hooks, state management, routing, and the React ecosystem.",
                    hi: "React ke saath component-based architecture seekhein. Hooks, state management, routing aur React ecosystem ko samjhein."
                },
                topics: ["React Hooks", "Component Patterns", "React Router", "State Management"],
                resources: [
                    { title: "React Official Docs", url: "https://react.dev", type: "docs" },
                    { title: "Full Stack Open", url: "https://fullstackopen.com", type: "course" },
                ],
                status: "beginner",
            },
            {
                id: "fs-3",
                title: { en: "TypeScript", hi: "TypeScript" },
                description: {
                    en: "Add type safety to your JavaScript. Learn generics, utility types, declaration files, and strict configuration.",
                    hi: "Apne JavaScript me type safety add karein. Generics, utility types, declaration files, aur strict configuration seekhein."
                },
                topics: ["Type System", "Generics", "Utility Types", "Type Guards"],
                resources: [
                    { title: "TypeScript Handbook", url: "https://www.typescriptlang.org/docs/", type: "docs" },
                ],
                status: "intermediate",
            },
            {
                id: "fs-4",
                title: { en: "Backend Development (Node.js)", hi: "Backend Development (Node.js)" },
                description: {
                    en: "Build RESTful APIs with Node.js and Express. Learn middleware, authentication, error handling, and API design best practices.",
                    hi: "Node.js aur Express ke saath RESTful APIs banayein. Middleware, authentication, error handling, aur API design best practices seekhein."
                },
                topics: ["Express.js", "REST API Design", "Authentication (JWT)", "Middleware"],
                resources: [
                    { title: "Node.js Official Docs", url: "https://nodejs.org/en/docs", type: "docs" },
                ],
                status: "intermediate",
            },
            {
                id: "fs-5",
                title: { en: "Databases & ORM", hi: "Databases & ORM" },
                description: {
                    en: "Work with SQL and NoSQL databases. Learn query optimization, schema design, and use ORMs like Prisma or Mongoose.",
                    hi: "SQL aur NoSQL databases pe kaam karein. Query optimization, schema design seekhein aur Prisma ya Mongoose jaisi ORMs adjust karein."
                },
                topics: ["PostgreSQL", "MongoDB", "Prisma ORM", "Query Optimization"],
                resources: [
                    { title: "Prisma Documentation", url: "https://www.prisma.io/docs", type: "docs" },
                ],
                status: "intermediate",
            },
            {
                id: "fs-6",
                title: { en: "Next.js & Full Stack Frameworks", hi: "Next.js & Full Stack Frameworks" },
                description: {
                    en: "Build production-grade apps with Next.js. Server components, API routes, SSR/SSG, middleware, and deployment.",
                    hi: "Next.js se production-grade apps banayein. Server components, API routes, SSR/SSG, middleware, aur deployment."
                },
                topics: ["App Router", "Server Components", "API Routes", "SSR & SSG"],
                resources: [
                    { title: "Next.js Documentation", url: "https://nextjs.org/docs", type: "docs" },
                ],
                status: "advanced",
            },
            {
                id: "fs-7",
                title: { en: "Testing & Deployment", hi: "Testing & Deployment" },
                description: {
                    en: "Write unit, integration, and E2E tests. Deploy to Vercel, AWS, or Docker containers with CI/CD pipelines.",
                    hi: "Unit, integration, aur E2E tests likhein. Vercel, AWS ya Docker containers pe deploy karein CI/CD pipelines use karke."
                },
                topics: ["Jest & Vitest", "Cypress / Playwright", "Docker", "CI/CD"],
                resources: [
                    { title: "Testing Library Docs", url: "https://testing-library.com", type: "docs" },
                ],
                status: "advanced",
            },
        ],
    },
    "ai-ml": {
        id: "ai-ml-roadmap",
        domainSlug: "ai-ml",
        title: { en: "AI & Machine Learning Roadmap", hi: "AI & Machine Learning Roadmap" },
        description: {
            en: "From mathematical foundations to production ML systems.",
            hi: "Maths ki bunyaad se lekar production-ready ML systems tak ka safar."
        },
        steps: [
            {
                id: "ml-1",
                title: { en: "Mathematics for ML", hi: "Mathematics for ML" },
                description: {
                    en: "Build strong foundations in linear algebra, calculus, probability, and statistics essential for understanding ML algorithms.",
                    hi: "ML algorithms smajhnay ke liye linear algebra, calculus, probability aur statistics me strong base banayein."
                },
                topics: ["Linear Algebra", "Calculus", "Probability & Statistics", "Optimization"],
                resources: [
                    { title: "3Blue1Brown Linear Algebra", url: "https://www.3blue1brown.com", type: "video" },
                    { title: "Khan Academy Statistics", url: "https://www.khanacademy.org", type: "course" },
                ],
                status: "beginner",
            },
            {
                id: "ml-2",
                title: { en: "Python for Data Science", hi: "Python for Data Science" },
                description: {
                    en: "Master Python libraries for data manipulation, visualization, and scientific computing.",
                    hi: "Data manipulate karne, visualization, aur scientific computing ke liye Python libraries me master banein."
                },
                topics: ["NumPy", "Pandas", "Matplotlib", "Jupyter Notebooks"],
                resources: [
                    { title: "Python Data Science Handbook", url: "https://jakevdp.github.io/PythonDataScienceHandbook/", type: "article" },
                ],
                status: "beginner",
            },
            {
                id: "ml-3",
                title: { en: "Classical Machine Learning", hi: "Classical Machine Learning" },
                description: {
                    en: "Learn supervised and unsupervised algorithms: regression, classification, clustering, and ensemble methods.",
                    hi: "Supervised aur unsupervised algorithms sikhein: regression, classification, clustering, aur ensemble tareeqey."
                },
                topics: ["Linear Regression", "Decision Trees", "SVM", "K-Means Clustering"],
                resources: [
                    { title: "Scikit-learn Documentation", url: "https://scikit-learn.org", type: "docs" },
                ],
                status: "intermediate",
            },
            {
                id: "ml-4",
                title: { en: "Deep Learning", hi: "Deep Learning" },
                description: {
                    en: "Understand neural network architectures, backpropagation, CNNs, RNNs, and transformers using PyTorch or TensorFlow.",
                    hi: "PyTorch ya TensorFlow use karke neural network architectures, backpropagation, CNNs, RNNs aur transformers ko samjhein."
                },
                topics: ["Neural Networks", "CNNs", "RNNs & LSTMs", "Transformers"],
                resources: [
                    { title: "PyTorch Tutorials", url: "https://pytorch.org/tutorials/", type: "docs" },
                    { title: "Deep Learning Specialization", url: "https://www.deeplearning.ai", type: "course" },
                ],
                status: "advanced",
            },
            {
                id: "ml-5",
                title: { en: "MLOps & Production ML", hi: "MLOps & Production ML" },
                description: {
                    en: "Deploy ML models to production. Model versioning, monitoring, feature stores, and ML pipeline orchestration.",
                    hi: "ML models ko production me deploy karein. Model versioning, monitoring, feature stores aur ML pipeline chalana sikhein."
                },
                topics: ["MLflow", "Model Serving", "Feature Stores", "A/B Testing"],
                resources: [
                    { title: "Made With ML", url: "https://madewithml.com", type: "course" },
                ],
                status: "advanced",
            },
        ],
    },
    "app-dev": {
        id: "app-dev-roadmap",
        domainSlug: "app-dev",
        title: { en: "Mobile App Development Roadmap", hi: "Mobile App Development Roadmap" },
        description: {
            en: "Build cross-platform and native mobile applications.",
            hi: "Cross-platform aur native mobile apps build karna sikhein."
        },
        steps: [
            {
                id: "ad-1",
                title: { en: "Mobile Development Fundamentals", hi: "Mobile Development Fundamentals" },
                description: {
                    en: "Understand mobile architecture patterns, platform differences, and UI/UX principles for mobile apps.",
                    hi: "Mobile apps ke liye architecture patterns, platform ke difference, aur UI/UX principles ko samjhein."
                },
                topics: ["Mobile UX Patterns", "Platform Guidelines", "App Lifecycle", "Navigation"],
                resources: [
                    { title: "Material Design", url: "https://material.io", type: "docs" },
                ],
                status: "beginner",
            },
            {
                id: "ad-2",
                title: { en: "React Native", hi: "React Native" },
                description: {
                    en: "Build cross-platform apps with React Native. Learn native modules, navigation, state management, and performance optimization.",
                    hi: "React Native se cross-platform apps banayein. Native modules, navigation, state management aur app ko fast banana sikhein."
                },
                topics: ["Core Components", "React Navigation", "Native Modules", "Expo"],
                resources: [
                    { title: "React Native Docs", url: "https://reactnative.dev", type: "docs" },
                ],
                status: "intermediate",
            },
            {
                id: "ad-3",
                title: { en: "Flutter & Dart", hi: "Flutter & Dart" },
                description: {
                    en: "Cross-platform development with Flutter. Widget tree, state management with Riverpod/Bloc, and platform channels.",
                    hi: "Flutter se cross-platform apps. Widget tree kya hai, Riverpod/Bloc ke sath state management aur platform channels sikhein."
                },
                topics: ["Dart Language", "Widget System", "State Management", "Platform Channels"],
                resources: [
                    { title: "Flutter Documentation", url: "https://flutter.dev/docs", type: "docs" },
                ],
                status: "intermediate",
            },
            {
                id: "ad-4",
                title: { en: "App Store Deployment & CI/CD", hi: "App Store Deployment & CI/CD" },
                description: {
                    en: "Publish apps to Google Play and App Store. Configure Fastlane, code signing, and automated testing pipelines.",
                    hi: "Google Play aur App Store pe apna app daalein. Fastlane set karna, code signing aur testing pipeline automate karna."
                },
                topics: ["App Signing", "Fastlane", "TestFlight", "Play Console"],
                resources: [
                    { title: "Fastlane Docs", url: "https://docs.fastlane.tools", type: "docs" },
                ],
                status: "advanced",
            },
        ],
    },
    "cyber-security": {
        id: "cyber-security-roadmap",
        domainSlug: "cyber-security",
        title: { en: "Cyber Security Roadmap", hi: "Cyber Security Roadmap" },
        description: {
            en: "From networking basics to advanced penetration testing and threat analysis.",
            hi: "Networking basics se lekar advanced penetration testing aur threats ka analysis."
        },
        steps: [
            {
                id: "cs-1",
                title: { en: "Networking & OS Fundamentals", hi: "Networking & OS Fundamentals" },
                description: {
                    en: "Understand TCP/IP, DNS, HTTP, Linux administration, and how operating systems manage security.",
                    hi: "TCP/IP, DNS, HTTP, aur Linux base level administration samjhein, aur OS security kaise manage karta hai."
                },
                topics: ["TCP/IP Stack", "DNS & HTTP", "Linux Administration", "File Permissions"],
                resources: [
                    { title: "Professor Messer Network+", url: "https://www.professormesser.com", type: "video" },
                ],
                status: "beginner",
            },
            {
                id: "cs-2",
                title: { en: "Security Fundamentals", hi: "Security Fundamentals" },
                description: {
                    en: "Learn CIA triad, authentication mechanisms, encryption basics, and common vulnerability types.",
                    hi: "CIA triad, login system, encryption ke basics aur aam taur pe dikhne wali vulnerabilities (kamzoriyan) ko sikhien."
                },
                topics: ["CIA Triad", "OWASP Top 10", "Encryption Basics", "Authentication"],
                resources: [
                    { title: "OWASP Foundation", url: "https://owasp.org", type: "docs" },
                ],
                status: "beginner",
            },
            {
                id: "cs-3",
                title: { en: "Penetration Testing", hi: "Penetration Testing" },
                description: {
                    en: "Hands-on ethical hacking. Learn reconnaissance, exploitation, post-exploitation, and report writing.",
                    hi: "Practical ethical hacking. Information gather karna (recon), exploit karna, aur phir testing report likhna."
                },
                topics: ["Nmap & Recon", "Metasploit", "Web App Testing", "Privilege Escalation"],
                resources: [
                    { title: "TryHackMe", url: "https://tryhackme.com", type: "course" },
                    { title: "Hack The Box", url: "https://www.hackthebox.com", type: "course" },
                ],
                status: "intermediate",
            },
            {
                id: "cs-4",
                title: { en: "Cryptography", hi: "Cryptography" },
                description: {
                    en: "Symmetric and asymmetric encryption, hashing algorithms, PKI, digital signatures, and TLS/SSL.",
                    hi: "Symmetric aur asymmetric encryption, hashing taake data secure rahe, PKI, digital signatures aur TLS/SSL."
                },
                topics: ["AES & RSA", "Hashing (SHA, bcrypt)", "PKI & Certificates", "TLS Handshake"],
                resources: [
                    { title: "Crypto101", url: "https://www.crypto101.io", type: "article" },
                ],
                status: "advanced",
            },
            {
                id: "cs-5",
                title: { en: "Security Operations & Incident Response", hi: "Security Operations & Incident Response" },
                description: {
                    en: "SIEM tools, log analysis, threat hunting, incident response playbooks, and forensics basics.",
                    hi: "SIEM tools istemaal krna, log padhna, threats ko dhundna (hunting), aafat aane pe response, aur digital forensics."
                },
                topics: ["SIEM", "Log Analysis", "Incident Response", "Digital Forensics"],
                resources: [
                    { title: "SANS Reading Room", url: "https://www.sans.org/reading-room/", type: "article" },
                ],
                status: "advanced",
            },
        ],
    },
    "gen-ai": {
        id: "gen-ai-roadmap",
        domainSlug: "gen-ai",
        title: { en: "Generative AI Roadmap", hi: "Generative AI Roadmap" },
        description: {
            en: "From prompt engineering to building production AI applications.",
            hi: "Sirf prompt likhne se lekar real-world production me chalne wale AI apps banane tak."
        },
        steps: [
            {
                id: "ga-1",
                title: { en: "LLM Fundamentals", hi: "LLM Fundamentals" },
                description: {
                    en: "Understand transformer architecture, tokenization, attention mechanisms, and how large language models work.",
                    hi: "Transformer model ka design, tokenization, attention mechanism aur bade language models kaise kaam karte hain, ye sikhien."
                },
                topics: ["Transformer Architecture", "Tokenization", "Attention Mechanism", "Pre-training"],
                resources: [
                    { title: "Attention Is All You Need", url: "https://arxiv.org/abs/1706.03762", type: "article" },
                ],
                status: "beginner",
            },
            {
                id: "ga-2",
                title: { en: "Prompt Engineering", hi: "Prompt Engineering" },
                description: {
                    en: "Master prompt design patterns: few-shot, chain-of-thought, system prompts, and structured output generation.",
                    hi: "AI se sahi jawab lene ke nuskhey: few-shot, chain-of-thought, system prompts aur structured (JSON, etc) output generate karna."
                },
                topics: ["Few-Shot Prompting", "Chain of Thought", "System Prompts", "Output Parsing"],
                resources: [
                    { title: "OpenAI Prompt Engineering Guide", url: "https://platform.openai.com/docs", type: "docs" },
                ],
                status: "beginner",
            },
            {
                id: "ga-3",
                title: { en: "RAG Systems", hi: "RAG Systems" },
                description: {
                    en: "Build Retrieval-Augmented Generation pipelines. Vector databases, embedding models, chunking strategies, and retrieval optimization.",
                    hi: "RAG pipelines (apne data se AI answer dena) banayein. Vector databases, embeddings, text ko chunk karna aur retrieval sahe karna."
                },
                topics: ["Vector Databases", "Embeddings", "Chunking Strategies", "Hybrid Search"],
                resources: [
                    { title: "LangChain Documentation", url: "https://docs.langchain.com", type: "docs" },
                ],
                status: "intermediate",
            },
            {
                id: "ga-4",
                title: { en: "Fine-Tuning & RLHF", hi: "Fine-Tuning & RLHF" },
                description: {
                    en: "Fine-tune models with LoRA/QLoRA, RLHF pipelines, and evaluation frameworks for domain-specific tasks.",
                    hi: "Chotay data pe models ko train karein (LoRA/QLoRA). RLHF pipelines build karein aur domain tasks me AI ko evaluate karein."
                },
                topics: ["LoRA & QLoRA", "RLHF", "Evaluation Metrics", "Dataset Curation"],
                resources: [
                    { title: "Hugging Face PEFT", url: "https://huggingface.co/docs/peft", type: "docs" },
                ],
                status: "advanced",
            },
            {
                id: "ga-5",
                title: { en: "AI Agents & Tool Use", hi: "AI Agents & Tool Use" },
                description: {
                    en: "Build autonomous AI agents with tool calling, multi-step reasoning, memory systems, and orchestration frameworks.",
                    hi: "Auto chalne wale AI agents banayein jo tools use karein, soch samajhkar multiple steps lein, memory store karein."
                },
                topics: ["Agent Architecture", "Tool Calling", "Memory Systems", "Multi-Agent"],
                resources: [
                    { title: "LangGraph Docs", url: "https://langchain-ai.github.io/langgraph/", type: "docs" },
                ],
                status: "advanced",
            },
        ],
    },
    devops: {
        id: "devops-roadmap",
        domainSlug: "devops",
        title: { en: "DevOps Roadmap", hi: "DevOps Roadmap" },
        description: {
            en: "Infrastructure automation, CI/CD, and cloud-native practices.",
            hi: "Sever infrastructure automatically handle karna, CI/CD setup, aur cloud-native practices."
        },
        steps: [
            {
                id: "do-1",
                title: { en: "Linux & Scripting", hi: "Linux aur Scripting" },
                description: {
                    en: "Command-line proficiency, shell scripting, process management, and system administration fundamentals.",
                    hi: "Linux terminal master karna, shell scripts likhna, server processes ko manage karna."
                },
                topics: ["Bash Scripting", "Process Management", "Cron Jobs", "File Systems"],
                resources: [
                    { title: "Linux Journey", url: "https://linuxjourney.com", type: "course" },
                ],
                status: "beginner",
            },
            {
                id: "do-2",
                title: { en: "Version Control & CI/CD", hi: "Code Control & CI/CD" },
                description: {
                    en: "Advanced Git workflows, GitHub Actions, Jenkins, and continuous integration/deployment pipelines.",
                    hi: "Badi teams me Git workflows, GitHub Actions/Jenkins use karke apne code ko testing aur deploy automate karna."
                },
                topics: ["Git Workflows", "GitHub Actions", "Jenkins", "Pipeline Design"],
                resources: [
                    { title: "GitHub Actions Docs", url: "https://docs.github.com/en/actions", type: "docs" },
                ],
                status: "beginner",
            },
            {
                id: "do-3",
                title: { en: "Containerization (Docker)", hi: "Docker Containers" },
                description: {
                    en: "Container fundamentals, Dockerfile optimization, multi-stage builds, Docker Compose, and container networking.",
                    hi: "Containers kya hotay hain ye sikhien. Dockerfile behtar banana, multi-stage builds, Docker Compose aur networking."
                },
                topics: ["Dockerfiles", "Multi-Stage Builds", "Docker Compose", "Container Networking"],
                resources: [
                    { title: "Docker Documentation", url: "https://docs.docker.com", type: "docs" },
                ],
                status: "intermediate",
            },
            {
                id: "do-4",
                title: { en: "Kubernetes", hi: "Kubernetes" },
                description: {
                    en: "Container orchestration at scale. Pods, services, deployments, Helm charts, and cluster management.",
                    hi: "Bohut saray containers ko ek sath manage karna (Orchestration). Pods, services, deployment, aur Helm charts."
                },
                topics: ["Pods & Services", "Deployments", "Helm Charts", "Ingress"],
                resources: [
                    { title: "Kubernetes Docs", url: "https://kubernetes.io/docs", type: "docs" },
                ],
                status: "intermediate",
            },
            {
                id: "do-5",
                title: { en: "Infrastructure as Code", hi: "Infrastructure as Code" },
                description: {
                    en: "Manage infrastructure with Terraform and Ansible. Cloud provisioning, state management, and configuration drift.",
                    hi: "Code se server bna dalna (Terraform aur Ansible use krke). Cloud provisioning, state control aur config drift ko smjhna."
                },
                topics: ["Terraform", "Ansible", "CloudFormation", "State Management"],
                resources: [
                    { title: "Terraform Documentation", url: "https://developer.hashicorp.com/terraform", type: "docs" },
                ],
                status: "advanced",
            },
            {
                id: "do-6",
                title: { en: "Monitoring & Observability", hi: "Monitoring & Observability" },
                description: {
                    en: "Implement logging, metrics, and tracing with Prometheus, Grafana, ELK stack, and distributed tracing.",
                    hi: "Server pe nazra rakhna. Logging, metrics, Prometheus/Grafana use karna, ELK stack aur systems ko trace karna."
                },
                topics: ["Prometheus", "Grafana", "ELK Stack", "OpenTelemetry"],
                resources: [
                    { title: "Grafana Documentation", url: "https://grafana.com/docs/", type: "docs" },
                ],
                status: "advanced",
            },
        ],
    },
    web3: {
        id: "web3-roadmap",
        domainSlug: "web3",
        title: { en: "Web3 Blockchain Roadmap", hi: "Web3 Blockchain Roadmap" },
        description: {
            en: "Master decentralized applications, smart contracts, and blockchain architecture.",
            hi: "Decentralized applications, smart contracts aur blockchain architecture mein maharat haasil karein."
        },
        steps: [
            {
                id: "w3-1",
                title: { en: "Blockchain Basics", hi: "Blockchain Basics" },
                description: {
                    en: "Understand distributed ledgers, consensus mechanisms, cryptography, and Ethereum basics.",
                    hi: "Distributed ledgers, consensus systems, cryptography aur Ethereum ka base samjhein."
                },
                topics: ["Ledgers", "Proof of Work vs Stake", "Ethereum", "Wallets"],
                resources: [
                    { title: "Ethereum Docs", url: "https://ethereum.org/en/developers/docs/", type: "docs" }
                ],
                status: "beginner",
            },
            {
                id: "w3-2",
                title: { en: "Smart Contracts", hi: "Smart Contracts" },
                description: {
                    en: "Learn Solidity, writing secure contracts, and deploying to testnets.",
                    hi: "Solidity seekhein, secure contracts likhna aur unhe testnets par deploy karna."
                },
                topics: ["Solidity", "EVM", "Hardhat", "Security"],
                resources: [
                    { title: "Solidity Docs", url: "https://docs.soliditylang.org/", type: "docs" },
                ],
                status: "intermediate",
            }
        ]
    },
    languages: {
        id: "languages-roadmap",
        domainSlug: "languages",
        title: { en: "Programming Languages Roadmap", hi: "Programming Languages Roadmap" },
        description: {
            en: "Deep dive into the core concepts, syntax, and features of modern programming languages.",
            hi: "Modern programming languages ke syntax, core concepts aur unki khaasiyat mein gehrai se jaayein."
        },
        steps: [
            {
                id: "lang-1",
                title: { en: "Systems Programming", hi: "Systems Programming" },
                description: {
                    en: "Master low-level control, memory safety, and high-performance computing using Rust.",
                    hi: "Rust ke zariye low-level control, memory safety aur high-performance computing par pakad banayein."
                },
                topics: ["Memory Management", "Concurrency", "Pointers", "Type Systems"],
                resources: [
                    { title: "The Rust Book", url: "https://doc.rust-lang.org/book/", type: "docs" }
                ],
                status: "advanced",
            }
        ]
    }
};

export function getRoadmaps(lang: Lang = "en"): Record<string, Roadmap> {
    const localizedRoadmaps: Record<string, Roadmap> = {};

    for (const [key, rawMap] of Object.entries(rawRoadmaps)) {
        localizedRoadmaps[key] = {
            ...rawMap,
            title: rawMap.title[lang],
            description: rawMap.description[lang],
            steps: rawMap.steps.map(step => ({
                ...step,
                title: step.title[lang],
                description: step.description[lang]
            }))
        };
    }

    return localizedRoadmaps;
}

// Keep export for default english fallback
export const roadmaps: Record<string, Roadmap> = getRoadmaps("en");

export function getRoadmapByDomain(domainSlug: string, lang: Lang = "en"): Roadmap | undefined {
    return getRoadmaps(lang)[domainSlug];
}
