export interface Skill {
  name: string;
  level: number; // 0-100 percentage
  category: string;
}

export interface Project {
  img: string;
  /**
   * Up to three screenshots for the sticky stacked card on the home page
   * (two stacked left, one tall right). Fewer than three is fine — the
   * remaining slots cycle back through these with a different crop. Omit it
   * entirely and `img` fills all three. Local paths must be URL-encoded.
   */
  gallery?: string[];
  title: string;
  description: string;
  route: string;
  tags: string[];
  github?: string;
  featured?: boolean;
  year?: number;
  category?: string;
}

export interface Experience {
  role: string;
  company: string;
  type: string;
  start: string;
  end: string;
  current?: boolean;
  location?: string;
  description: string;
  achievements: string[];
  tech: string[];
}

export const experiences: Experience[] = [
  {
    role: "Full-Stack Developer",
    company: "Elipse Studio",
    type: "Full-time",
    start: "May 2026",
    end: "Present",
    current: true,
    location: "On-site",
    description:
      "Building production web applications end-to-end — from database design to responsive front-ends and live server deployment — and contributing to the studio's mobile work with Flutter. I own features across the full stack and the infrastructure they run on.",
    achievements: [
      "Ship production web features end-to-end — Next.js/TypeScript front-ends backed by MySQL databases — owning each feature from schema to release.",
      "Own the deployment pipeline: configure Nginx reverse proxies on VPS servers and run Node services under NSSM as auto-restarting Windows services.",
      "Provision production hosting on Hostinger — custom domains, subdomains, and MySQL databases — for live client applications.",
      "Collaborate with designers and project leads to turn specs into releases on a regular delivery cycle, incorporating review feedback across the stack.",
      "Build cross-platform mobile experiences with Flutter, Dart, and the Android SDK as part of the studio's product work.",
    ],
    tech: [
      "Next.js",
      "TypeScript",
      "Flutter",
      "Dart",
      "Android SDK",
      "MySQL",
      "Nginx",
      "NSSM",
      "VPS",
      "Hostinger",
    ],
  },
];

export const personalData = `
Name: Syed Shurem Ali
Role: Full-Stack Developer
Experience: 2.5+ years

Current Position:
- Full-Stack Developer (Full-time) at Elipse Studio — May 2026 to Present.
  Building production Next.js + MySQL web apps end-to-end, owning deployment on
  VPS servers (Nginx reverse proxies, NSSM Windows services) and Hostinger hosting
  (custom domains, subdomains, MySQL databases) for live client applications.
  Also contributing to the studio's mobile work with Flutter, Dart & the Android SDK.

Education:
- 1-Year Diploma in Information Technology — SZABIST ZABTech, Hyderabad
- Ongoing: Agentic AI Development Course — Governor House Initiative

Skills:
- Frontend: React.js, Next.js, TypeScript, JavaScript (ES6+), Python, Agentic AI
- Mobile: Android Development, Flutter (Flutter SDK), Dart, Android SDK
- Styling: Tailwind CSS, Sass, CSS3, HTML5, AOS Animations, Framer Motion
- Backend & Data: API Integration (REST), MySQL
- State Management: Redux
- Deployment & DevOps: Vercel, Netlify, VPS Deployment, Nginx, NSSM, Hostinger (domains, subdomains, MySQL databases)
- Tools: Git, GitHub, VS Code

Projects & Hackathons:
1. **Crypto Market Conversational Chatbot** – Developed using OpenAI SDK, capable of answering real-time crypto queries.
2. **E-Commerce Frontend** – Built with Next.js and Tailwind CSS, featuring responsive design and smooth UI animations.
3. **Hackathon Projects** – Participated in multiple coding hackathons, building innovative prototypes within limited timeframes.

Passion:
I'm a Full-Stack Developer who builds modern, responsive, end-to-end applications across web and mobile. I ship real products — from Flutter mobile work to Next.js web apps — and own the full lifecycle, including server deployment on VPS and Hostinger.
`;

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", level: 90, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Frontend" },
  { name: "JavaScript (ES6+)", level: 85, category: "Frontend" },
  { name: "HTML5", level: 90, category: "Frontend" },
  { name: "CSS3", level: 88, category: "Frontend" },

  // Mobile
  { name: "Android Development", level: 78, category: "Mobile" },
  { name: "Flutter (SDK)", level: 80, category: "Mobile" },
  { name: "Dart", level: 78, category: "Mobile" },
  { name: "Android SDK", level: 74, category: "Mobile" },

  // Styling
  { name: "Tailwind CSS", level: 90, category: "Styling" },
  { name: "Sass", level: 75, category: "Styling" },
  { name: "AOS Animations", level: 70, category: "Styling" },
  { name: "Framer Motion", level: 65, category: "Styling" },

  // AI/ML
  { name: "OpenAI Agents SDK", level: 80, category: "AI/ML" },
  { name: "Agentic AI", level: 75, category: "AI/ML" },
  { name: "HuggingFace", level: 70, category: "AI/ML" },

  // Backend/Other
  { name: "Python", level: 70, category: "Backend" },
  { name: "API Integration", level: 80, category: "Backend" },
  { name: "MySQL", level: 76, category: "Backend" },
  { name: "Docker", level: 65, category: "Backend" },

  // Development Practices
  { name: "SDD (Spec-Driven Dev)", level: 75, category: "Practices" },
  { name: "Redux", level: 70, category: "State Management" },

  // Tools & Deployment
  { name: "Git", level: 80, category: "Tools" },
  { name: "GitHub", level: 85, category: "Tools" },
  { name: "VS Code", level: 90, category: "Tools" },
  { name: "Vercel", level: 80, category: "Deployment" },
  { name: "Netlify", level: 75, category: "Deployment" },
  { name: "VPS Deployment", level: 76, category: "Deployment" },
  { name: "Nginx", level: 74, category: "Deployment" },
  { name: "NSSM (Windows Services)", level: 72, category: "Deployment" },
  { name: "Hostinger", level: 82, category: "Deployment" },
  { name: "Docker Deployment", level: 65, category: "Deployment" },
];



export const project: Project[] = [
  {
    // TODO: replace with a Cloudinary screenshot of the live platform (upload like your other project images)
    img: "https://placehold.co/800x500/00A38C/ffffff/png?text=Maryam+%26+Zayn+Learning",
    title: "Maryam & Zayn — Kids Learning Platform",
    description:
      "A production EdTech platform built at Elipse Studio for a Pakistani children's education brand. Kids learn six subjects (Urdu, English, Maths, Islamiat, GK, Science) through character-guided, bilingual lessons — with full gamification: XP and levels, daily streaks, Bronze/Silver/Gold leagues, badges, and a guest mode that needs no signup. Live in production with user accounts, dashboards, and progress tracking.",
    route: "https://learning.maryamandzayn.com/",
    tags: ["Client Work", "Next.js", "EdTech", "Full-Stack", "Production"],
    featured: true,
    year: 2026,
    category: "Client Work"
  },
  {
    img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1775517408/todos_g5nzyv.png",
    gallery: [
      "/todos%20dashboard.PNG",
      "/todos%20agent.PNG",
      "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1775517408/todos_g5nzyv.png",
    ],
    title: "AI-Powered Todo App",
    description:
      "Task apps die from input friction, so I made an AI agent the interface: users create, update, and complete tasks in plain language ('add a grocery run for tomorrow'). Every action is written to a full audit trail and gated behind authentication. Built spec-first with SpecKit+ and Claude Code CLI — all 5 hackathon phases shipped on deadline, plus a task dashboard and profile management.",
    route: "https://the-evolution-of-todo-mastering-spe.vercel.app/",
    tags: ["AI/ML", "Agentic AI", "Next.js", "Authentication", "Hackathon"],
    github: "https://github.com/shuremali02/The-Evolution-of-Todo---Mastering-Spec-Driven-Development---Cloud-Native-AI",
    featured: true,
    year: 2025,
    category: "AI/ML"
  },
  {
    img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1766755841/physical_ai_book_dje6hv.png",
    gallery: [
      "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1766755841/physical_ai_book_dje6hv.png",
      "/physical_book_content.PNG",
    ],
    title: "Physical AI & Humanoid Robotics Book",
    description:
      "Static technical textbooks can't answer questions or serve non-English readers. My solution: an interactive Docusaurus textbook with a RAG chatbot that answers grounded in the book's own chapters, full Urdu translation for accessibility, and personalized content for signed-in learners. Built spec-driven during the GIAIC SpecKit+ Hackathon.",
    route: "https://ai-spec-driven-online-hackathon-1.vercel.app/",
    tags: ["AI/ML", "RAG", "Docusaurus", "Hackathon"],
    github: "https://github.com/shuremali02/AI_Spec-Driven_Online_Hackathon_1",
    featured: true,
    year: 2025,
    category: "AI/ML"
  },
  {
    img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1759697057/roommatcher_qtnhiv.png",
    gallery: ["/room%20hero.PNG", "/room%20feature.PNG", "/room%20profile.PNG"],
    title: "Room Matcher AI",
    description:
      "Matching people means weighing many soft constraints — a single prompt can't do it reliably or explainably. I built specialized AI agents (profile analysis, compatibility scoring, ranking) coordinated by an orchestrator, with a live trace visualization that streams each agent's reasoning to the screen in real time. Built at the Innovista Indus Hackathon.",
    route: "https://room-matcher-ai-rosy.vercel.app/",
    tags: ["AI/ML", "Agentic AI", "Next.js", "Hackathon"],
    github: "https://github.com/shuremali02/Room-Matcher-AI",
    year: 2025,
    category: "AI/ML"
  },
  {
    img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1755285617/crypto_fvrzqw.png",
    title: "Crypto Market Intelligence Agent",
    description:
      "Market dashboards make you hunt through charts for answers a sentence could give. I built a tool-calling agent (OpenAI Agents SDK) wired to the CoinGecko API that answers live questions — total market cap, Bitcoin dominance, real-time prices — through a clean Streamlit chat UI. The model reasons; the API supplies the numbers, so answers stay factual.",
    route: "https://github.com/shuremali02/Crypto_Currency_Agent_Open_Ai_SDK",
    tags: ["AI/ML", "Agentic AI", "Python", "API Integration"],
    github: "https://github.com/shuremali02/Crypto_Currency_Agent_Open_Ai_SDK",
    category: "AI/ML"
  },
  {
    img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403842/SXN_BY_NASH_neolg6.png",
    title: "SxN by Nash — E-Commerce Platform",
    description:
      "Luxury retail needs urgency and curation, not just a product grid. I built a conversion-focused e-commerce experience for a perfume & watch brand: flash-sale mechanics with live countdown timers, wishlist management, and a curated browsing flow. Hackathon finale project, built with Next.js and Tailwind CSS.",
    route: "https://marketplace-hackathon-03-q2-finale.vercel.app/",
    tags: ["E-commerce", "Next.js", "Tailwind CSS", "Hackathon"],
    github: "https://github.com/shuremali02/marketplace-hackathon-03-q2-finale",
    category: "E-commerce"
  },
  {
    img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403838/Nft_xwfopj.jpg",
    title: "NFT Marketplace — OpenSea-Style UI",
    description:
      "A front-end NFT marketplace UI inspired by OpenSea, built to demonstrate structured, maintainable styling with Sass and a component-driven layout. Features a clean marketplace browsing experience with mock authentication and careful, pixel-level attention to the collection and listing views.",
    route: "https://opensea-clone-fawn.vercel.app/",
    tags: ["E-commerce", "Frontend", "Sass", "UI/UX"],
    github: "https://github.com/shuremali02/opensea-clone",
    category: "E-commerce"
  },
  {
    img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403840/Watchhub_ad0qgk.jpg",
    title: "Watch Hub — Premium Watch Store",
    description:
      "A modern e-commerce front-end for premium watches, built with Next.js. Features a polished product catalog, responsive layout, and a smooth browsing flow — with an emphasis on clean visual hierarchy and fast rendering of an image-heavy storefront.",
    route: "https://next-js-milestone-3-watch-hub.vercel.app/",
    tags: ["E-commerce", "Next.js", "Frontend", "Responsive"],
    github: "https://github.com/shuremali02/next-js-milestone-3-watch-hub",
    category: "E-commerce"
  },
  {
    img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403840/travelBlog_vwnvf0.jpg",
    title: "Travel Blog — Modern Editorial Site",
    description:
      "A modern travel blog built with Next.js, React, and Tailwind CSS. Features a fully responsive editorial layout, reusable dynamic components, and smooth navigation designed for an engaging, magazine-style reading experience.",
    route: "https://travelblog-assignment.netlify.app/",
    tags: ["Frontend", "Next.js", "React", "Responsive"],
    github: "https://github.com/shuremali02/travelblog-assignment",
    category: "Frontend"
  },
  {
    img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403840/Shop.co_lqlrtr.jpg",
    title: "Shop.co — Hackathon Storefront UI",
    description:
      "A sleek, responsive e-commerce interface built under hackathon time pressure. Translated a design brief into a polished storefront UI with precise layout, micro-animations, and modern UI principles — front-end craft delivered against the clock.",
    route: "https://hackathon-ui-ux-q2-hackathon-3.vercel.app/",
    tags: ["E-commerce", "Frontend", "UI/UX", "Hackathon"],
    github: "https://github.com/shuremali02/hackathon-ui-ux-q2-hackathon-3",
    category: "E-commerce"
  },
  {
    img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403837/Capture_zgk6px.png",
    title: "Dynamic Resume Builder — Live PDF Export",
    description:
      "Most resume tools gate basic editing behind accounts. I built one that's fully client-side: edit inline with live preview and export a print-ready PDF in one click — no signup, and your data never leaves the browser. Built with React state-driven editing and client-side PDF generation for pixel-faithful output.",
    route: "https://editable-resume-builder-milestone-4.netlify.app/",
    tags: ["Frontend", "React", "PDF Generation"],
    github: "https://github.com/shuremali02/editable-resume-builder-milestone-4",
    category: "Frontend"
  },
  {
    img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403837/assign_6_pic_xxroee.jpg",
    title: "Figma-to-Code — Pixel-Perfect Landing Page",
    description:
      "A pixel-perfect implementation of a Figma design — the designer-to-developer handoff agencies run daily. Matched spacing, type scale, and components to the design spec across breakpoints, with accessible semantics, using TypeScript, ShadCN UI, and Tailwind CSS.",
    route: "https://shurem-class-9to12-assignment-6.netlify.app/",
    tags: ["Frontend", "UI/UX", "TypeScript", "Pixel Perfect"],
    github: "https://github.com/shuremali02/shurem-class-9to12-assignment-6",
    category: "Frontend"
  },
  {
    img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403836/3_assignment_sgzx6u.jpg",
    title: "Green Groups — Landing Page",
    description:
      "A fully responsive marketing landing page built with clean, semantic HTML and CSS. Focused on strong visual hierarchy, a mobile-first layout, and fast load — a solid demonstration of front-end fundamentals and design-to-code translation.",
    route: "https://shurem-class-assignment-3.netlify.app/",
    tags: ["Frontend", "Landing Page", "Responsive", "HTML/CSS"],
    github: "https://github.com/shuremali02/shurem-class-assignment-3",
    category: "Frontend"
  },
  {
    img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403837/assign_2_pwpsdk.jpg",
    title: "Brandbuzz — Landing Page",
    description:
      "A responsive brand landing page built with HTML and CSS, featuring a bold hero, clear content sections, and a mobile-first layout — a clean demonstration of layout, spacing, and responsive design fundamentals.",
    route: "https://class-assignment-2-shuremali.netlify.app/",
    tags: ["Frontend", "Landing Page", "Responsive", "HTML/CSS"],
    github: "https://github.com/shuremali02/class-assignment-2-shuremali",
    category: "Frontend"
  },
  ];
