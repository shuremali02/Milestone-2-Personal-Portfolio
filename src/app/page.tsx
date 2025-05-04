import About from './about/page'
import Hero from './components/hero'
import Auto from "./components/auto scroll"
import Contact from './contact/page'
import "./globals.css"
import Portfolio from './portfolio/page'

export default function Main() {
  return (
    <div className="bg-background min-h-screen w-auto md:w-full">
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
      </div>

      <div className="pt-20" id="contact">
        <Contact />
      </div>
    </div>
  )
}
