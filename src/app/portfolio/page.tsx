import Card from '../components/cards';

export default function Portfolio() {
  const project = [
    {
      img: "/SXN BY NASH.png",
      title: "SxN-by-nash_marletplace ",
      description: "SxN by NASH  is an e-commerce platform featuring a curated selection of perfumes and watches, designed with a sleek, modern interface. It offers features like flash sales, wishlist management, and a countdown timer for exclusive offers, enhancing the shopping experience..",
      route: "https://marketplace-hackathon-03-q2-finale.vercel.app/",
    },
    {
      img: "/Nft.jpeg",
      title: "NFT Marketplace",
      description: "OpenSea Clone – A front-end NFT marketplace UI developed using Sass for the first time, fulfilling internship requirements. Features a clean layout and mock authentication to demonstrate front-end functionality.",
      route: "https://opensea-clone-fawn.vercel.app/",
    },
    {
      img: "/Watchhub.jpg",
      title: "Watch-HUb ",
      description: "Watch Hub – A modern e-commerce frontend platform for premium watches, built with Next.js. Features include a stylish layout, responsive design, and smooth product browsing experience.",
      route: "https://next-js-milestone-3-watch-hub.vercel.app/",
    },
    {
      img: "/travelBlog.jpg",
      title: "Travelling-Website- ",
      description: "A modern travel blog built with Next.js, React, and Tailwind CSS, The site features responsive design, dynamic components, and smooth navigation for an engaging travel journey.",
      route: "https://travelblog-assignment.netlify.app/",
    },
    {
      img: "/Shop.co.jpg",
      title: "Shop-co-Hackathon-UI-Design ",
      description: "Hackathon UI Design A sleek and responsive user interface created as part of a hackathon challenge. Focused purely on front-end layout, animations, and visual appeal using modern UI principles.",
      route: "https://hackathon-ui-ux-q2-hackathon-3.vercel.app/",
    },
    {
      img: "/BlogPost.jpg",
      title: "Blogpost",
      description: "This is My BlogPost-web ",
      route: "https://blogpost101.netlify.app/",
    },
    {
      img: "/hacka img.jpg",
      title: "Dynamic Resume Builder",
      description: "Dynamic Resume Builder use to Generate your Resume and save as PDF ",
      route: "https://resume-builder-milestone-5.netlify.app/",
    },
    {
      img: "/assign 6 pic.jpg",
      title: "Figma design-to-code–Pixel Perfect—Landing Page",
      description: "Used modern front-end technologies (e.g., HTML, CSS, TypeScript, ShadCN UI) for creating a clean and accessible interface.",
      route: "https://shurem-class-9to12-assignment-6.netlify.app/",
    },
    {
      img: "/3 assignment.jpg",
      title: "Green -Groups—Landing Page",
      description: "Fully responsive design ",
      route: "https://shurem-class-assignment-3.netlify.app/",
    },
    {
      img: "/assign 2.jpg",
      title: "Brandbuzz—Landing Page",
      description: "Fully responsive design ",
      route: "https://class-assignment-2-shuremali.netlify.app/",
    },
    {
      img: "/cal.png",
      title: "Calculator.ts",
      description: "A device that performs arithmetic operations on numbers.",
      route: "https://github.com/shuremali02/CLI-calculator",
    },
    {
      img: "/Atm.png",
      title: "ATM.ts",
      description: "The ATM System is used to access bank accounts for cash withdrawals.",
      route: "https://github.com/shuremali02/ATM-project",
    },
    {
      img: "/count.png",
      title: "Counter",
      description: "Simple Increment Decrement Counter Application built with Next.js & React useState Hooks and styled with Tailwind.",
      route: "https://github.com/shuremali02/Next.js-React.js-Counter.git",
    },
    {
      img: "/navebar.png",
      title: "Navigation Bar",
      description: "Simple Navigation bar with buttons built with Next.js & React useState Hooks and styled with Tailwind.",
      route: "https://counter-nextjs.netlify.app/",
    },
    {
      img: "/Milestone1.png",
      title: "Hello-World",
      description: "Simple Hello World Application built with Next.js and styled with Tailwind.",
      route: "https://next-js-milestone-1-achieved.netlify.app/",
    },
  ];

  return (
    <div className="bg-background py-8 text-textMuted">
      <h1 className="flex items-center justify-center pt-8 text-5xl font-bold tracking-widest underline text-primary decoration-primaryHover hover:animate-pulse">
        Featured Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8 p-6">
        {project.map((projects, index) => (
          <Card key={index} prop={projects} />
        ))}
      </div>
    </div>
  );
}
