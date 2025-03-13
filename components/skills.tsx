"use client"

import { motion } from "framer-motion"

// Combined technical and soft skills data
const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "C#", level: 78 },
      { name: "SQL", level: 88 },
      { name: "TypeScript", level: 82 },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 88 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Responsive UI Design", level: 88 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Flask", level: 85 },
      { name: "SQLAlchemy", level: 80 },
      { name: "Node.js", level: 78 },
      { name: "Express", level: 75 },
    ],
  },
  {
    name: "Database Management",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 80 },
      { name: "SQLite", level: 88 },
      { name: "SQL", level: 90 },
    ],
  },
  {
    name: "DevOps & Tools",
    skills: [
      { name: "Docker", level: 82 },
      { name: "GitHub", level: 90 },
      { name: "GitHub Actions", level: 85 },
      { name: "Git", level: 92 },
      { name: "Visual Studio", level: 88 },
      { name: "Render", level: 80 },
    ],
  },
  {
    name: "Soft Skills",
    skills: [
      { name: "Communication", level: 95 },
      { name: "Problem Solving", level: 92 },
      { name: "Team Collaboration", level: 90 },
      { name: "Adaptability", level: 88 },
      { name: "Time Management", level: 85 },
    ],
  },
]

// Additional skills for the badge display
const additionalSkills = [
  "React", "Python", "JavaScript", "Flask", "MongoDB", 
  "PostgreSQL", "Docker", "GitHub", "Tailwind CSS", "C#",
  "API Integration", "Web Scraping", "Jest", "PyTest",
  "Mocha", "React Testing Library", "Agile Methodologies"
]

function Skills() {
  return (
    <section id="skills" className="py-20 bg-zinc-900/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="cursor-pointer text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          >
            Skills & Expertise
          </motion.h2>
          <div className="h-1 w-48 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/70 text-center max-w-2xl mt-4"
          >
            A comprehensive overview of my technical proficiencies and soft skills that I've developed and refined throughout my career.
          </motion.p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-white/10 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                {category.name}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-white/90">{skill.name}</span>
                      <span className="text-white/70">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-zinc-800 rounded-full h-2.5">
                      <motion.div
                        className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.1 * skillIndex }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-xl font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
            Technologies & Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {additionalSkills.map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.03 }}
                className="bg-zinc-900/30 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center border border-white/5 hover:border-blue-500/50 transition-all duration-300"
              >
                <span className="text-white/80 text-sm md:text-base">{tech}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-white/60 text-sm max-w-2xl mx-auto">
            I'm constantly expanding my skill set and staying up-to-date with the latest technologies and methodologies in software development and testing.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills