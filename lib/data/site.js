export const PROJECTS = [
  {
    slug: "onchain-habit-tracker",
    title: "Onchain Habit Tracker",
    tags: ["Web3", "Base", "Productivity"],
    description:
      "A decentralized habit tracking platform powered by Base blockchain. Track daily habits on-chain, build streaks, verify achievements transparently, and monitor long-term progress with real-time analytics.",
    stack: ["Next.js", "React", "Solidity", "Base", "Ethers.js", "Tailwind CSS"],
    live: "https://onchain-habit-tracker.vercel.app/",
    github: "https://github.com/SUMIT4859/onchain-habit-tracker"
  },
  {
    slug: "farcaster-tipjar-frame",
    title: "Farcaster TipJar",
    tags: ["Web3", "Base", "Farcaster"],
    description:
      "A decentralized Farcaster Frame that connects users to a verified TipJar smart contract on Base, enabling seamless on-chain tipping directly within the Farcaster ecosystem.",
    stack: ["Next.js", "Base", "Solidity", "Farcaster Frames", "Tailwind CSS"],
    live: "https://farcaster-tipjar-frame.vercel.app/",
    github: "https://github.com/SUMIT4859/farcaster-tipjar-frame"
  },
  {
    slug: "ai-exam-evaluation",
    title: "AI-Based Exam Evaluation System",
    tags: ["AI", "OCR", "NLP"],
    description:
      "An AI-powered exam evaluation platform that automatically grades subjective answer sheets using OCR, Natural Language Processing, and similarity scoring, reducing manual effort while improving evaluation accuracy.",
    stack: ["Python", "Streamlit", "OCR", "NLP", "Machine Learning"],
    live: "https://exam-evaluation.streamlit.app/",
    github: "https://github.com/SUMIT4859/ai-exam-evaluation"
  },
  {
    slug: 'multiplayer-bingo',
    title: 'Multiplayer Bingo',
    tags: ['Game', 'Next.js', 'Socket.IO'],
    description: 'Real-time multiplayer Bingo game where players create or join rooms, compete with friends, and enjoy synchronized gameplay with live winner detection.',
    stack: ['Next.js', 'React', 'Socket.IO', 'Node.js', 'Tailwind CSS'],
    live: 'https://multiplayer-bingo-phi.vercel.app/',
    github: 'https://github.com/SUMIT4859/multiplayer-bingo'
  },
  { slug: 'gensyn-tracker', title: 'Gensyn Tracker', tags: ['AI', 'Analytics'], description: 'Real-time analytics dashboard for Gensyn network participants - node metrics, rewards, performance graphs.', stack: ['Next.js', 'TypeScript', 'Recharts'], live: 'https://gensyn-tracker.onrender.com/', github: 'https://github.com/SUMIT4859/gensyn-tracker' },
  { slug: 'cryptovoice-ai', title: 'CryptoVoice AI Agent', tags: ['AI', 'Web3'], description: 'Voice-first AI agent for crypto operations - talk to your wallet, check balances, execute swaps via natural language.', stack: ['Groq', 'OpenAI', 'Whisper', 'Ethers'], live: 'https://cryptovoice-agent.vercel.app/', github: 'https://github.com/SUMIT4859/CryptoVoice-AI-Agent' },
  { slug: 'hospital-management', title: 'Hospital Management System', tags: ['Full Stack'], description: 'Complete HMS - appointments, billing, EMR, pharmacy, lab integration. Built for real clinical workflows.', stack: ['Laravel', 'MySQL', 'React'], live: 'https://github.com/SUMIT4859/Hospital-Management-System/blob/main/DOCUMENTATION/SUMIT%2051.pdf', github: 'https://github.com/SUMIT4859/Hospital-Management-System' },
  { slug: 'zoo-management', title: 'Zoo Management System', tags: ['Full Stack'], description: 'End-to-end zoo operations - animal records, feeding schedules, vet care, ticketing & visitor analytics.', stack: ['ASP.NET', 'C#', 'SQL Server'], live: 'https://github.com/SUMIT4859/Zoo-Management-System/blob/main/documantation%20ZMS.pdf', github: 'https://github.com/SUMIT4859/Zoo-Management-System' },
];

export const SKILL_GROUPS = [
  { name: 'Frontend', items: ['HTML', 'CSS', 'Tailwind', 'JavaScript', 'TypeScript', 'React', 'Next.js'] },
  { name: 'Backend', items: ['Node.js', 'Express', 'PHP', 'Laravel', 'ASP.NET'] },
  { name: 'Databases', items: ['MongoDB', 'MySQL', 'Firebase'] },
  { name: 'Programming', items: ['Java', 'Python', 'C#'] },
  { name: 'DevTools', items: ['Git', 'GitHub', 'VS Code', 'Postman', 'Docker', 'Linux'] },
  { name: 'AI', items: ['Prompt Engineering', 'LLMs', 'Groq API', 'OpenAI API'] },
  { name: 'Web3', items: ['Ethereum', 'Solidity', 'Base Chain', 'MetaMask', 'Smart Contracts'] },
];

export const SERVICES = [
  { title: 'Full Stack Development', desc: 'End-to-end web apps from concept to ship - frontend, backend, DB, deployment.', icon: 'Code2' },
  { title: 'AI Integration', desc: 'Embed LLMs, RAG pipelines, voice & vision into your products with Groq & OpenAI.', icon: 'Brain' },
  { title: 'REST API Development', desc: 'Battle-tested REST & GraphQL APIs with auth, rate-limits, docs & tests.', icon: 'Network' },
  { title: 'Web3 Development', desc: 'Smart contracts, dApps & blockchain integrations on Ethereum, Base & EVM chains.', icon: 'Boxes' },
  { title: 'Portfolio Websites', desc: 'Premium personal brand sites that convert visitors into clients & opportunities.', icon: 'User' },
  { title: 'Business Websites', desc: 'High-converting marketing sites built for SEO, speed and brand presence.', icon: 'Briefcase' },
  { title: 'Landing Pages', desc: 'Pixel-perfect landing pages designed to convert. Built in days, not months.', icon: 'Rocket' },
];

export const TIMELINE = [
  { year: '2025 - Present', title: 'M.Sc. Information Technology', meta: 'Current CGPA 9.85', desc: 'Specialising in AI, advanced software engineering & distributed systems.' },
  { year: '2022 - 2025', title: 'B.Sc. Information Technology', meta: 'CGPA 9.73', desc: 'Foundational degree - algorithms, networks, databases, full-stack engineering.' },
  { year: '2024 - Present', title: 'Building in Public', meta: 'Open Source', desc: 'Shipping dApps, AI agents and developer tools on GitHub @sumit4859.' },
];

// TRUST PILLARS (replaces fake testimonials).
// Honest, verifiable value-props that make Brevo (and other reviewers) trust the site.
export const TRUST_PILLARS = [
  {
    title: 'Written by a real engineer',
    desc: 'Every guide, review and tool is written by Sumitkumar Pandit - a working full-stack developer publishing under his real name, real domain, real GitHub.',
    icon: 'BadgeCheck',
    accent: 'emerald',
  },
  {
    title: 'No fake testimonials, ever',
    desc: 'This site has zero fabricated social proof. When we say something works, it is because we actually shipped with it - not because a paid quote said so.',
    icon: 'ShieldCheck',
    accent: 'purple',
  },
  {
    title: 'Transparent affiliate policy',
    desc: 'Some links are affiliate links. They never change our opinion, and every review page carries a visible disclosure with a link to our full affiliate policy.',
    icon: 'FileText',
    accent: 'amber',
  },
  {
    title: 'Free tools that actually work',
    desc: '5 in-browser tools - Spam Score, Send-Time Calculator, HTML Preview, Subject Line Generator, Email Header Analyzer. No signup, no email wall, no dark patterns.',
    icon: 'Wrench',
    accent: 'cyan',
  },
];

// Kept as empty array for backward-compatibility with existing imports.
export const TESTIMONIALS = [];

export const TOOLS = [
  {
    slug: 'brevo',
    name: 'Brevo',
    category: 'Email Marketing',
    tagline: 'All-in-one email marketing & transactional platform.',
    rating: 4.7,
    color: 'from-emerald-500/20 to-emerald-500/0',
    logo: 'B',
    logoImage: '/logos/Brevo.svg',
    brand: '#0B996E',
    featured: true,
  },
  { slug: 'github', name: 'GitHub', category: 'Developer Tools', tagline: 'Where the world builds software - code, collaborate, ship.', rating: 4.9, color: 'from-zinc-500/20 to-zinc-500/0', logo: 'G', logoImage: '/logos/github.png' },
  { slug: 'vercel', name: 'Vercel', category: 'Hosting', tagline: 'The frontend cloud - zero-config deploys for Next.js & beyond.', rating: 4.9, color: 'from-zinc-500/20 to-zinc-500/0', logo: 'V', logoImage: '/logos/vercel.svg' },
  { slug: 'mongodb-atlas', name: 'MongoDB Atlas', category: 'Cloud Platforms', tagline: 'Fully-managed MongoDB in the cloud. Scale globally with ease.', rating: 4.6, color: 'from-green-500/20 to-green-500/0', logo: 'M', logoImage: '/logos/MongoDB.svg' },
  { slug: 'cloudflare', name: 'Cloudflare', category: 'Cloud Platforms', tagline: 'Global edge network - performance, security & developer tools.', rating: 4.8, color: 'from-orange-500/20 to-orange-500/0', logo: 'C', logoImage: '/logos/Cloudflare.svg' },
  { slug: 'namecheap', name: 'Namecheap', category: 'Domains', tagline: 'Affordable domains & hosting - trusted by 17M+ customers.', rating: 4.4, color: 'from-orange-500/20 to-orange-500/0', logo: 'N', logoImage: '/logos/namecheap.png' },
  { slug: 'vscode', name: 'VS Code', category: 'Developer Tools', tagline: "The world's most popular code editor. Extensible & free.", rating: 4.9, color: 'from-blue-500/20 to-blue-500/0', logo: 'VS', logoImage: '/logos/vscode.svg' },
  { slug: 'postman', name: 'Postman', category: 'Developer Tools', tagline: 'API platform for building & testing - design, test, automate.', rating: 4.7, color: 'from-orange-500/20 to-orange-500/0', logo: 'P', logoImage: '/logos/postman.png' },
];

export const TOOL_CATEGORIES = ['All', 'Email Marketing', 'Hosting', 'Domains', 'Developer Tools', 'Cloud Platforms', 'AI Tools', 'Productivity'];
