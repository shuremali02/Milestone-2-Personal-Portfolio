import Card from '../components/cards';

export default function Portfolio() {
  const project = [
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403842/SXN_BY_NASH_neolg6.png",
      title: "SXN-By-Nash_marletplace ",
      description: "SxN by NASH  is an e-commerce platform featuring a curated selection of perfumes and watches, designed with a sleek, modern interface. It offers features like flash sales, wishlist management, and a countdown timer for exclusive offers, enhancing the shopping experience..",
      route: "https://marketplace-hackathon-03-q2-finale.vercel.app/",
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403838/Nft_xwfopj.jpg",
      title: "NFT-Marketplace",
      description: "OpenSea Clone A front-end NFT marketplace UI developed using Sass for the first time, fulfilling internship requirements. Features a clean layout and mock authentication to demonstrate front-end functionality.",
      route: "https://opensea-clone-fawn.vercel.app/",
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403840/Watchhub_ad0qgk.jpg",
      title: "Watch-Hub ",
      description: "Watch Hub  A modern e-commerce frontend platform for premium watches, built with Next.js. Features include a stylish layout, responsive design, and smooth product browsing experience.",
      route: "https://next-js-milestone-3-watch-hub.vercel.app/",
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403840/travelBlog_vwnvf0.jpg",
      title: "Travelling-Website",
      description: "A modern travel blog built with Next.js, React, and Tailwind CSS, The site features responsive design, dynamic components, and smooth navigation for an engaging travel journey.",
      route: "https://travelblog-assignment.netlify.app/",
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403840/Shop.co_lqlrtr.jpg",
      title: "Shop-co-Hackathon-UI-Design ",
      description: "Hackathon UI Design A sleek and responsive user interface created as part of a hackathon challenge. Focused purely on front-end layout, animations, and visual appeal using modern UI principles.",
      route: "https://hackathon-ui-ux-q2-hackathon-3.vercel.app/",
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403837/BlogPost_dr919d.jpg",
      title: "Blogpost",
      description: "This is My BlogPost-web ",
      route: "https://blogpost101.netlify.app/",
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403837/Capture_zgk6px.png",
      title: "Dynamic Resume Builder",
      description: "Dynamic Resume Builder use to Generate your Resume and save as PDF ",
      route: "https://editable-resume-builder-milestone-4.netlify.app/",
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403837/assign_6_pic_xxroee.jpg",
      title: "Figma design-to-code–Pixel Perfect—Landing Page",
      description: "Used modern front-end technologies (e.g., HTML, CSS, TypeScript, ShadCN UI) for creating a clean and accessible interface.",
      route: "https://shurem-class-9to12-assignment-6.netlify.app/",
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403836/3_assignment_sgzx6u.jpg",
      title: "Green -Groups—Landing Page",
      description: "Fully responsive design ",
      route: "https://shurem-class-assignment-3.netlify.app/",
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403837/assign_2_pwpsdk.jpg",
      title: "Brandbuzz—Landing Page",
      description: "Fully responsive design ",
      route: "https://class-assignment-2-shuremali.netlify.app/",
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403837/cal_fof15x.png",
      title: "Calculator.ts",
      description: "A device that performs arithmetic operations on numbers.",
      route: "https://github.com/shuremali02/CLI-calculator",
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403836/Atm_cxhkol.png",
      title: "ATM.ts",
      description: "The ATM System is used to access bank accounts for cash withdrawals.",
      route: "https://github.com/shuremali02/ATM-project",
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746403837/Count_ugtcu2.png",
      title: "Counter",
      description: "Simple Increment Decrement Counter Application built with Next.js & React useState Hooks and styled with Tailwind.",
      route: "https://github.com/shuremali02/Next.js-React.js-Counter.git",
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746404863/navebar_fes7rf.png",
      title: "Navigation Bar",
      description: "Simple Navigation bar with buttons built with Next.js & React useState Hooks and styled with Tailwind.",
      route: "https://counter-nextjs.netlify.app/",
    },
    {
      img: "https://res.cloudinary.com/dd4xvwf8d/image/upload/v1746404862/Milestone1_dpev06.png",
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
