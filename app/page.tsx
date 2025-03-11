

import { BackgroundPattern } from "@/components/background-patterns"
import { Footer } from "@/components/footer"
import Hero from "@/components/hero"
import Navbar from "@/components/navbar"
import { SelectedWork } from "@/components/projectcard"
import { ViewAllProjectsButton } from "@/components/view-all"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <BackgroundPattern />
      <Navbar />
      <Hero />
      <SelectedWork/>
      {/* <ViewAllProjectsButton/> */}
      <Footer/>
    </main>
  )
}

