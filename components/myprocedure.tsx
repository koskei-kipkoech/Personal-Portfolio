"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function MyApproach() {
  return (
    <section id="myaproach" className="w-full py-16 bg-gradient-to-br from-black via-[#0a0f29] to-black">
      <div  className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 text-center">My Development Process</h2>
        <div className="h-1 w-48 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full mx-auto mb-8"></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <PhaseCard 
            phase="1"
            title="Planning & Strategy"
            description="We'll collaborate to map out your website's goals, target audience, and key functionalities."
          />
          <PhaseCard 
            phase="2"
            title="Development & Implementation"
            description="Transform designs into reality using modern technologies and best practices for optimal performance."
          />
          <PhaseCard 
            phase="3"
            title="Testing & Deployment"
            description="Rigorous testing and seamless deployment ensure your project launches successfully."
          />
        </div>
      </div>
    </section>
  )
}

interface PhaseCardProps {
  phase: string
  title: string
  description: string
}

function PhaseCard({ phase, title, description }: PhaseCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div  className="relative w-full aspect-[3/4] bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/5 hover:border-blue-500/50 transition-all duration-300 overflow-hidden shadow-xl transform transition-transform hover:scale-105">
      <motion.div
        className="w-full h-full"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Corner plus signs */}
        <div className="absolute top-4 left-4 text-gray-500 text-xl">++</div>
        <div className="absolute top-4 right-4 text-gray-500 text-xl">++</div>
        <div className="absolute bottom-4 left-4 text-gray-500 text-xl">++</div>
        <div className="absolute bottom-4 right-4 text-gray-500 text-xl">++</div>

        <AnimatePresence mode="wait">
          {!isHovered ? (
            <motion.div
              key="phase1"
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.div
                className="px-6 py-2 border border-white/5 rounded-full text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 0.5,
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "reverse",
                  ease: "easeInOut",
                }}
              >
                Phase {phase}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="content"
              className="absolute inset-0 flex flex-col items-center justify-center text-center p-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold text-white mb-4">{title}</h2>
              <p className="text-white text-sm">
                {description}
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

