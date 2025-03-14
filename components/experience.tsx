"use client"
import { motion } from "framer-motion"

// Mock experience data
const experiences = [
  {
    id: 1,
    role: "Software Developer Intern",
    company: "The Micropoint System LTd",
    period: "June 2022 - September 2022",
    description: "Developed a COVID-19 tracking application using C#. Worked closely with a team to enhance application performance and security. Assisted in database management and system automation tasks.",
    technologies: ["C#", ".NET", "MySQL", "Azure"]
  },
  {
    "id": 2,
    "role": "Organizing Secretary",
    "company": "Chesoen Ward Comrade Group (CBO)",
    "period": "Dec 2023 - Present",
    "description": "Spearhead event planning and execution, ensuring smooth coordination of all activities. Oversee zonal representatives to streamline communication and operations. Maintain accurate meeting records and minutes to ensure organizational transparency. Chair the tent committee, managing logistics for major events. Provide timely updates to comrades on key events in the organization's calendar. Contributed  in designing the organization's first web platform, enhancing digital accessibility.",
    "technologies": ["Google Calender", "Docs", "Excel", "Excalidraw"]
  },
  
]

function Experience() {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <h2 className="cursor-pointer text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Experience
          </h2>
          <div className="h-1 w-48 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
          <p className="text-white/70 text-center max-w-2xl">
            My professional journey and the companies I've had the pleasure to work with.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500"></div>

          {/* Experience items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"></div>

                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"} pl-8 md:pl-0`}>
                  <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                      <span className="text-white/50 text-sm">{exp.period}</span>
                    </div>
                    <h4 className="text-lg font-medium mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                      {exp.company}
                    </h4>
                    <p className="text-white/70 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span key={tech} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/70">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

