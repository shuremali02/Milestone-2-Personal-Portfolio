import Card from '../components/cards';

export default function Portfolio() {
  const project = [
    {
      img: "/cal.png",
      title: "Calculator.ts",
      description: "A device that performs arithmetic operations on numbers.",
      route: "https://github.com/shuremali02/CLI-calculator",
    },
    {
      img: "/Atm.png",
      title: "ATM.ts",
      description: "The ATM System is the project which is used to access their bank accounts in order to make cash withdrawals",
      route: "https://github.com/shuremali02/ATM-project"

    },

    {
      img: "/count.png",
      title: "Counter",
      description: "Simple Increment Decrement Counter Application build with nextjs  & react useState Hooks and styled with Tailwind",
      route: "https://github.com/shuremali02/Next.js-React.js-Counter.git",
    },
    {
      img: "/navebar.png",
      title: "Navigation Bar",
      description: "Simple Navigation bar with buttons build with nextjs & react useState Hooks and styled with Tailwind",
      route: "https://counter-nextjs.netlify.app/",
    },
    {
      img: "/Milestone1.png",
      title: "Hello-World",
      description: "Simple Hello World Application build with nextjs and styled with Tailwind",
      route: "https://next-js-milestone-1-achieved.netlify.app/",
    },


  ];

  return (
    <div className="bg-black py-8 text-emerald-300">
      <h1 className="flex items-center justify-center pt-8 text-5xl font-bold tracking-widest underline text-emerald-300 decoration-emerald-700  hover:animate-pulse">
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