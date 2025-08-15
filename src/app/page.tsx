import About from './about/page'
import Hero from './components/hero'
import Auto from "./components/auto scroll"
import Contact from './contact/page'
import "./globals.css"
import Portfolio from './portfolio/page'
import ChatBot from "./components/chatbot"

export default function Main() {
  return (
<div className="bg-background min-h-screen w-full overflow-x-hidden">
<div>
        <Hero />
      </div>

      <div className="pt-20" id="project">
        <Portfolio />
      </div>
 
      <div className="pt-20" id="about">
        <About />
        <div className="pt-20">
          <Auto />
        </div> 
        

        
            <div>
              <h1 className="text-primary text-3xl font-bold mb-4">About Me</h1>
              <ChatBot />
            </div>
        

        </div> 

      <div className="pt-20" id="contact">
        <Contact />
      </div> 
    </div>
  )
}
