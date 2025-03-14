

import About from "@/components/about"
import { BackgroundPattern } from "@/components/background-patterns"
import Contact from "@/components/contact"
import Education from "@/components/education"
import Experience from "@/components/experience"
import Footer from "@/components/footer"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import { SelectedWork } from "@/components/projectcard"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import { ViewAllProjectsButton } from "@/components/view-all"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <BackgroundPattern />
      <Navbar />
      <Hero />
      <About/>
      <SelectedWork/>
      {/* <ViewAllProjectsButton/> */}
      <Skills/>
      {/* <Projects/> */}
      <Experience/>
      <Education/>
      <Contact/>
      <Footer/>
    </main>
  )
}

