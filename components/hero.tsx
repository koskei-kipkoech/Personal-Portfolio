"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Code, Database, Settings } from "lucide-react"
import fileImage from "../public/mine.jpg"
import { useRouter } from "next/navigation"

function Hero() {
  const router = useRouter()
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  const [typingSpeed, setTypingSpeed] = useState(150)
  
  const titles = ["Full Stack Developer", "Software Engineer", "Software Developer"]
  const period = 3000
  
  useEffect(() => {
    const ticker = setInterval(() => {
      tick()
    }, typingSpeed)
    
    return () => clearInterval(ticker)
  }, [displayText, isDeleting])
  
  const tick = () => {
    const i = loopNum % titles.length
    const fullText = titles[i]
    
    setDisplayText(prev => {
      if (isDeleting) {
        return fullText.substring(0, prev.length - 1)
      } else {
        return fullText.substring(0, prev.length + 1)
      }
    })
    
    if (!isDeleting && displayText === fullText) {
      setTimeout(() => setIsDeleting(true), period)
      setTypingSpeed(100)
    } else if (isDeleting && displayText === '') {
      setIsDeleting(false)
      setLoopNum(loopNum + 1)
      setTypingSpeed(150)
    }
  }
  
  const goToProjectsPage = () => {
    router.push("/projects");
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center pt-16">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-8">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
              <span className="cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient">
                {displayText}
                <span className="animate-blink">|</span>
              </span>
            </h1>
            
            <p className="text-lg text-white/80 max-w-md">
            Passionate Software Engineer specializing in: 
            </p>
            <div className="text-lg text-white/80 max-w-md space-y-4">
              {/* Full-Stack Development */}
              <div className="flex items-center gap-2">
                <Code size={20} className="text-blue-400" />
                <span className="font-semibold text-white">Full-Stack Development</span>
              </div>

              {/* Database Management */}
              <div className="flex items-center gap-2">
                <Database size={20} className="text-green-400" />
                <span className="font-semibold text-white">Database Management</span>
              </div>

              {/* Automation */}
              <div className="flex items-center gap-2">
                <Settings size={20} className="text-yellow-400" />
                <span className="font-semibold text-white">Automation</span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-r from-blue-500 to-purple-500 p-[1px] rounded-lg">
                <div className="bg-black rounded-lg p-2">
                  <Mail size={20} className="text-white" />
                </div>
              </div>
              <a href="mailto:your.email@example.com" className="text-white hover:text-blue-400 transition-colors">
                patrickwayy@gmail.com
              </a>
            </div>

            <div >
              <Button
                onClick={goToProjectsPage}
                className="rounded-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white transition-all duration-500"
              >
                Explore Work
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] rounded-2xl">
                <div className="absolute inset-0 bg-black rounded-2xl" />
              </div>
              <Image
                src={fileImage}
                alt="Patrick Kipkoech"
                width={600}
                height={600}
                className="relative z-10 w-full h-full object-cover rounded-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90 to-transparent z-20">
                <p className="text-white/70 text-sm mb-1">Based in</p>
                <p className="text-xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                  🌃 Nairobi, KENYA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero