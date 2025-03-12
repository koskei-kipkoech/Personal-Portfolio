"use client"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import fileImage from "../public/titleimage.jpg"

function Hero() {
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
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 animate-gradient">
                Full Stack
                <br />
                Developer
              </span>
            </h1>

            <p className="text-lg text-white/70 max-w-md">
              Specializing in React, Node.js, and Cloud Architecture.
              <br />
              Building scalable applications with modern tech stacks.
            </p>

            <div>
              <Button
                onClick={scrollToProjects}
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
                  San Francisco, CA
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

