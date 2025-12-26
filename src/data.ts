export interface Skill {
  name: string;
  level: number; // 0-100 percentage
  category: string;
}

export interface Project {
  img: string;
  title: string;
  description: string;
  route: string;
  tags: string[];
  github?: string;
}

export const personalData = `
Name: Syed Shurem Ali
Role: Front-End Developer
Experience: 2.5+ years

Education:
- 1-Year Diploma in Information Technology — SZABIST ZABTech, Hyderabad
- Ongoing: Agentic AI Development Course — Governor House Initiative

Skills:
- Frontend: React.js, Next.js, TypeScript, JavaScript (ES6+) , Python , Agentic AI
- Styling: Tailwind CSS, Sass, CSS3, HTML5, AOS Animations, Framer Motion
- API Integration (REST)
- State Management: Redux
- Deployment: Vercel, Netlify
- Tools: Git, GitHub, VS Code

Projects & Hackathons:
1. **Crypto Market Conversational Chatbot** – Developed using OpenAI SDK, capable of answering real-time crypto queries.
2. **E-Commerce Frontend** – Built with Next.js and Tailwind CSS, featuring responsive design and smooth UI animations.
3. **Hackathon Projects** – Participated in multiple coding hackathons, building innovative prototypes within limited timeframes.

Passion:
I am passionate about creating modern, responsive, and user-friendly interfaces. I enjoy experimenting with new technologies, building functional prototypes, and solving real-world problems through creative web solutions.
`;

export const skills: Skill[] = [
  // Frontend
  { name: "React.js", level: 90, category: "Frontend" },
  { name: "Next.js", level: 85, category: "Frontend" },
  { name: "TypeScript", level: 80, category: "Frontend" },
  { name: "JavaScript (ES6+)", level: 85, category: "Frontend" },
  { name: "HTML5", level: 90, category: "Frontend" },
  { name: "CSS3", level: 88, category: "Frontend" },

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
  { name: "Docker Deployment", level: 65, category: "Deployment" },
];

export interface Testimonial {
  name: string;
  role: string;
  company?: string;
  content: string;
  avatar?: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: "Ahmed Khan",
    role: "Project Manager",
    company: "Tech Innovations Inc.",
    content: "Syed delivered exceptional work on our e-commerce platform. His attention to detail and ability to implement complex UI components was impressive. The project was completed ahead of schedule.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sarah Johnson",
    role: "Product Owner",
    company: "Startup Solutions",
    content: "Working with Syed was a great experience. He understood our requirements perfectly and created a stunning user interface that exceeded our expectations. Highly recommend his services.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "Michael Chen",
    role: "CTO",
    company: "Digital Ventures",
    content: "Syed's expertise in React and Next.js helped us build a scalable web application. His code quality is excellent and he follows best practices. A true professional.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/22.jpg"
  },
  {
    name: "Fatima Ahmed",
    role: "Design Lead",
    company: "Creative Designs",
    content: "Syed transformed our design concepts into beautiful, responsive web pages. His ability to work with designers and translate mockups into functional code is remarkable.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/68.jpg"
  }
];



export const project = [
  {
    img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1766755841/physical_ai_book_dje6hv.png",
    title: "Physical AI & Humanoid Robotics Book",
    description: "A comprehensive Docusaurus-based textbook on Physical AI & Humanoid Robotics with RAG-based chatbot, Urdu translation, personalized content for signed-in users, and interactive learning features. Built during GIAIC Spec-Driven SpecKit+ Hackathon.",
    route: "https://ai-spec-driven-online-hackathon-1.vercel.app/",
    tags: ["AI/ML", "Docusaurus", "RAG Chatbot", "Hackathon", "SDD"],
    github: "https://github.com/shuremali02/AI_Spec-Driven_Online_Hackathon_1"
  },
  {
    img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1759697057/roommatcher_qtnhiv.png",
    title: "Room Matcher AI",
    description: "AI-powered roommate matcher with multi-agent orchestration and live trace visualization, built during Innovista Indus Hackathon.",
    route: "https://room-matcher-ai-rosy.vercel.app/",
    tags: ["AI/ML", "Agentic AI", "Next.js", "Hackathon"],
    github: "https://github.com/shuremali02/Room-Matcher-AI"
  },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403842/SXN_BY_NASH_neolg6.png",
      title: "SXN-By-Nash_Marketplace ",
      description: "SxN by NASH  is an e-commerce platform featuring a curated selection of perfumes and watches, designed with a sleek, modern interface. It offers features like flash sales, wishlist management, and a countdown timer for exclusive offers, enhancing the shopping experience..",
      route: "https://marketplace-hackathon-03-q2-finale.vercel.app/",
      tags: ["E-commerce", "Next.js", "Tailwind CSS", "Hackathon"],
      github: "https://github.com/shuremali02/marketplace-hackathon-03-q2-finale"
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403838/Nft_xwfopj.jpg",
      title: "NFT-Marketplace",
      description: "OpenSea Clone A front-end NFT marketplace UI developed using Sass for the first time, fulfilling internship requirements. Features a clean layout and mock authentication to demonstrate front-end functionality.",
      route: "https://opensea-clone-fawn.vercel.app/",
      tags: ["E-commerce", "Frontend", "Sass", "UI/UX"],
      github: "https://github.com/shuremali02/opensea-clone"
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1755284159/chatbot_with_chainlit_zaycz2.png",
      title: "Simple Chatbot with Auth, Chainlit & Gemini",
      description: "An AI-powered chatbot built using Chainlit and Google's Gemini model, featuring secure user authentication. Designed for a smooth conversational experience with a clean, modern interface.",
      route: "https://github.com/shuremali02/Simple_Chatbot__With_Auth_Chainlit_And_Gemini",
      tags: ["AI/ML", "Agentic AI", "Authentication", "Gemini"],
      github: "https://github.com/shuremali02/Simple_Chatbot__With_Auth_Chainlit_And_Gemini"
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1755285617/crypto_fvrzqw.png",
      title: "Crypto Market Conversational Chatbot",
      description: "Streamlit-based AI chatbot built using OpenAI's `agents` SDK and CoinGecko API. Offers real-time insights like total cryptocurrencies, market cap, Bitcoin dominance, and live price summaries—delivered via a clean conversational UI.",
      route: "https://github.com/shuremali02/Crypto_Currency_Agent_Open_Ai_SDK",
      tags: ["AI/ML", "Agentic AI", "API Integration", "Python"],
      github: "https://github.com/shuremali02/Crypto_Currency_Agent_Open_Ai_SDK"
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403840/Watchhub_ad0qgk.jpg",
      title: "Watch-Hub ",
      description: "Watch Hub  A modern e-commerce frontend platform for premium watches, built with Next.js. Features include a stylish layout, responsive design, and smooth product browsing experience.",
      route: "https://next-js-milestone-3-watch-hub.vercel.app/",
      tags: ["E-commerce", "Next.js", "Frontend", "Responsive"],
      github: "https://github.com/shuremali02/next-js-milestone-3-watch-hub"
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403840/travelBlog_vwnvf0.jpg",
      title: "Travelling-Website",
      description: "A modern travel blog built with Next.js, React, and Tailwind CSS, The site features responsive design, dynamic components, and smooth navigation for an engaging travel journey.",
      route: "https://travelblog-assignment.netlify.app/",
      tags: ["Blog", "Next.js", "React", "Responsive"],
      github: "https://github.com/shuremali02/travelblog-assignment"
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403840/Shop.co_lqlrtr.jpg",
      title: "Shop-co-Hackathon-UI-Design ",
      description: "Hackathon UI Design A sleek and responsive user interface created as part of a hackathon challenge. Focused purely on front-end layout, animations, and visual appeal using modern UI principles.",
      route: "https://hackathon-ui-ux-q2-hackathon-3.vercel.app/",
      tags: ["UI/UX", "Frontend", "Hackathon", "Responsive"],
      github: "https://github.com/shuremali02/hackathon-ui-ux-q2-hackathon-3"
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403837/BlogPost_dr919d.jpg",
      title: "Blogpost",
      description: "This is My BlogPost-web ",
      route: "https://blogpost101.netlify.app/",
      tags: ["Blog", "Frontend", "Responsive"],
      github: "https://github.com/shuremali02/blogpost101"
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403837/Capture_zgk6px.png",
      title: "Dynamic Resume Builder",
      description: "Dynamic Resume Builder use to Generate your Resume and save as PDF ",
      route: "https://editable-resume-builder-milestone-4.netlify.app/",
      tags: ["Frontend", "PDF Generation", "React", "Next.js"],
      github: "https://github.com/shuremali02/editable-resume-builder-milestone-4"
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403837/assign_6_pic_xxroee.jpg",
      title: "Figma design-to-code–Pixel Perfect—Landing Page",
      description: "Used modern front-end technologies (e.g., HTML, CSS, TypeScript, ShadCN UI) for creating a clean and accessible interface.",
      route: "https://shurem-class-9to12-assignment-6.netlify.app/",
      tags: ["Frontend", "UI/UX", "Pixel Perfect", "TypeScript"],
      github: "https://github.com/shuremali02/shurem-class-9to12-assignment-6"
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403836/3_assignment_sgzx6u.jpg",
      title: "Green -Groups—Landing Page",
      description: "Fully responsive design ",
      route: "https://shurem-class-assignment-3.netlify.app/",
      tags: ["Landing Page", "Frontend", "Responsive", "HTML/CSS"],
      github: "https://github.com/shuremali02/shurem-class-assignment-3"
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403837/assign_2_pwpsdk.jpg",
      title: "Brandbuzz—Landing Page",
      description: "Fully responsive design ",
      route: "https://class-assignment-2-shuremali.netlify.app/",
      tags: ["Landing Page", "Frontend", "Responsive", "HTML/CSS"],
      github: "https://github.com/shuremali02/class-assignment-2-shuremali"
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403837/cal_fof15x.png",
      title: "Calculator.ts",
      description: "A device that performs arithmetic operations on numbers.",
      route: "https://github.com/shuremali02/CLI-calculator",
      tags: ["TypeScript", "Calculator", "CLI"],
      github: "https://github.com/shuremali02/CLI-calculator"
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403836/Atm_cxhkol.png",
      title: "ATM.ts",
      description: "The ATM System is used to access bank accounts for cash withdrawals.",
      route: "https://github.com/shuremali02/ATM-project",
      tags: ["TypeScript", "Banking", "CLI"],
      github: "https://github.com/shuremali02/ATM-project"
    },
    // {
    //   img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403837/Count_ugtcu2.png",
    //   title: "Counter",
    //   description: "Simple Increment Decrement Counter Application built with Next.js & React useState Hooks and styled with Tailwind.",
    //   route: "https://github.com/shuremali02/Next.js-React.js-Counter.git",
    //   tags: ["React", "Next.js", "Hooks", "Frontend"],
    //   github: "https://github.com/shuremali02/Next.js-React.js-Counter.git"
    // },
    // {
    //   img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746404863/navebar_fes7rf.png",
    //   title: "Navigation Bar",
    //   description: "Simple Navigation bar with buttons built with Next.js & React useState Hooks and styled with Tailwind.",
    //   route: "https://counter-nextjs.netlify.app/",
    //   tags: ["React", "Next.js", "Frontend", "Navigation"],
    //   github: "https://github.com/shuremali02/counter-nextjs"
    // },
    // {
    //   img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746404862/Milestone1_dpev06.png",
    //   title: "Hello-World",
    //   description: "Simple Hello World Application built with Next.js and styled with Tailwind.",
    //   route: "https://next-js-milestone-1-achieved.netlify.app/",
    //   tags: ["React", "Next.js", "Frontend", "Learning"],
    //   github: "https://github.com/shuremali02/next-js-milestone-1-achieved"
    // },
  ];
