"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Mail, Code, Database, Settings, ArrowRight } from "lucide-react"
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
  
  const [isLoading, setIsLoading] = useState(false);

  const goToProjectsPage = () => {
    setIsLoading(true);
    router.push("/projects")
      .then(() => setIsLoading(false));
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById("projects")
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" })
    }
  }
  
  return (
    <div className="relative min-h-screen w-full">
      {/* Background remains the same */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 to-black/90">
          <div
            className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f60_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f60_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_60%,transparent_100%)] opacity-50"
          />
        </div>
      </div>
      
      <div className="relative z-10 min-h-screen flex items-center pt-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="flex flex-col gap-6 lg:gap-8 max-w-3xl">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
                <span className="cursor-pointer bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient">
                  {displayText}
                  <span className="animate-blink">|</span>
                </span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl">
                Passionate Software Engineer specializing in: 
              </p>
              
              {/* Rest of the content section with adjusted spacing */}
              <div className="text-base sm:text-lg lg:text-xl text-white/80 max-w-2xl space-y-4">
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
                <a href="mailto:patrickwayy@gmail.com" className="text-white hover:text-blue-400 transition-colors">
                  patrickwayy@gmail.com
                </a>
              </div>

              <div>
                <Button
                  onClick={goToProjectsPage}
                  disabled={isLoading}
                  className="rounded-lg px-8 py-6 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 text-white transition-all duration-500 flex items-center gap-2"
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Loading Projects...
                    </>
                  ) : 'Explore My Projects'}
                  <ArrowRight size={16} />
                </Button>
              </div>
            </div>
            
            <div className="relative mt-8 lg:mt-0">
              <div className="relative rounded-2xl overflow-hidden aspect-square w-full max-w-xl mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 p-[2px] rounded-2xl">
                  <div className="absolute inset-0 bg-black rounded-2xl" />
                </div>
                <Image
                  src={fileImage}
                  alt="Patrick Kipkoech"
                  width={800}
                  height={800}
                  className="relative z-10 w-full h-full object-cover rounded-2xl"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 lg:p-8 bg-gradient-to-t from-black/90 to-transparent z-20">
                  <p className="text-white/70 text-sm sm:text-base lg:text-lg mb-1">Based in</p>
                  <p className="text-lg sm:text-xl lg:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                    🌃 Nairobi, KENYA
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero