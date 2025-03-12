"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"

// Mock project data with featured flag
const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with payment processing, user authentication, and inventory management.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    featured: true,
  },
  {
    id: 2,
    title: "AI Content Generator",
    description:
      "An AI-powered application that generates marketing content based on user prompts and brand guidelines.",
    tags: ["Next.js", "OpenAI", "TailwindCSS", "Vercel"],
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Real-time Analytics Dashboard",
    description:
      "A real-time dashboard for monitoring business metrics with customizable widgets and data visualization.",
    tags: ["Vue.js", "Firebase", "D3.js", "WebSockets"],
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    featured: true,
  },
  {
    id: 4,
    title: "Mobile Fitness App",
    description: "A cross-platform fitness application with workout tracking, nutrition planning, and social features.",
    tags: ["React Native", "Redux", "Firebase", "Expo"],
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Blockchain Wallet",
    description:
      "A secure cryptocurrency wallet with multi-chain support, transaction history, and exchange integration.",
    tags: ["TypeScript", "Web3.js", "Ethers.js", "React"],
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Social Media Platform",
    description:
      "A niche social media platform for creative professionals with portfolio showcasing and networking features.",
    tags: ["Next.js", "GraphQL", "PostgreSQL", "AWS"],
    image: "/placeholder.svg?height=400&width=600",
    link: "#",
    featured: false,
  },
]

function Projects() {
  const [showAll, setShowAll] = useState(false)

  // Filter projects based on showAll state
  const displayedProjects = showAll ? projects : projects.filter((project) => project.featured)

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Projects
          </h2>
          <p className="text-white/70 text-center max-w-2xl">
            Explore my recent work and see how I've helped businesses solve complex problems with elegant solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {displayedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300">
                    View Project
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <Button
            onClick={() => setShowAll(!showAll)}
            className="rounded-lg px-6 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500 hover:to-purple-500 text-white border border-white/10 transition-all duration-300"
          >
            {showAll ? "Show Featured Projects" : "View All Projects"}
          </Button>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects

