"use client"
import { motion } from "framer-motion"
import { GraduationCap, Award, Calendar, MapPin, BookOpen } from "lucide-react"

// Education data
const educationItems = [
  {
    id: 1,
    degree: "Bachelor in Computer Science",
    institution: "Karatina University",
    location: "Nyeri, Kenya",
    period: "Sept 2019 — Nov 2023",
    description: "Completed coursework in software engineering, data structures, algorithms, and database systems.",
    skills: ["Software Engineering", "Data Structures", "Algorithms", "Database Systems"]
  },
  {
    id: 2,
    degree: "Course in Software Development",
    institution: "Moringa School",
    location: "Nairobi, Kenya",
    period: "Sept 2024 — March 2025",
    description: "Gaining hands-on experience in full-stack development using React (Frontend) and Flask (Backend).",
    skills: ["React", "Flask", "Frontend", "Backend", "Full-stack"]
  },
]

// Certification data
const certifications = [
  {
    id: 1,
    name: "Docker Certification",
    issuer: "KodeKloud",
    date: "September 2023",
    link : "https://learn.kodekloud.com/certificate/2D144387E471-2D143D911915-2D143D54D3C9"
  },
  {
    id: 2,
    name: "Python Certification",
    issuer: "KodeKloud",
    date: "September 2023",
    link: "http://learn.kodekloud.com/certificate/2D144387E471-2D144359A9AD-2D143D54D3C9"
  },
  {
    id: 3,
    name: "Intro to Machine Learning",
    issuer: "Microsoft",
    date: "February 2025",
    link: "https://learn.microsoft.com/en-us/users/patrickkipkoech-7778/achievements/uy5syv83?ref=https%3A%2F%2Fwww.linkedin.com%2F"
  },
]

function Education() {
  return (
    <section id="education" className="py-20 bg-zinc-900/30">
      <div className="container mx-auto px-6">
        {/* Education Section */}
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="cursor-pointer text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          >
            Education
          </motion.h2>
          <div className="h-1 w-48 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/70 text-center max-w-2xl mt-4"
          >
            My academic background and ongoing learning journey.
          </motion.p>
        </div>

        {/* Education Cards - New Design */}
        <div className="mb-24">
          {educationItems.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="mb-12 last:mb-0"
            >
              <div className={`relative overflow-hidden ${index % 2 === 0 ? 'ml-auto' : 'mr-auto'} max-w-3xl`}>
                {/* Gradient border effect */}
                <div className="absolute inset-0 p-0.5 rounded-2xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-70">
                  <div className="absolute inset-0 rounded-2xl bg-zinc-900/90"></div>
                </div>
                
                {/* Card content */}
                <motion.div 
                  className="relative p-8 rounded-2xl bg-zinc-900/50 backdrop-blur-sm overflow-hidden"
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-xl -ml-10 -mb-10"></div>
                  
                  {/* Icon */}
                  <div className={`absolute ${index % 2 === 0 ? 'left-8' : 'right-8'} top-8 w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center`}>
                    <GraduationCap className="text-white" size={24} />
                  </div>
                  
                  {/* Content with offset for icon */}
                  <div className={`${index % 2 === 0 ? 'ml-16' : 'mr-16'}`}>
                    <div className="flex flex-col mb-4">
                      <h3 className="text-2xl font-bold text-white mb-2">{edu.degree}</h3>
                      <div className="flex items-center text-lg font-medium mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">
                        <BookOpen size={16} className="mr-2 text-blue-500" />
                        {edu.institution}
                      </div>
                      <div className="flex items-center text-white/50 text-sm mb-1">
                        <MapPin size={14} className="mr-2 text-purple-400" />
                        {edu.location}
                      </div>
                      <div className="flex items-center text-white/50 text-sm mb-4">
                        <Calendar size={14} className="mr-2 text-pink-400" />
                        {edu.period}
                      </div>
                    </div>
                    
                    <p className="text-white/70 mb-6 leading-relaxed">{edu.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {edu.skills.map((skill) => (
                        <motion.span 
                          key={skill} 
                          className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-white/80 border border-white/10 hover:border-blue-500/50 transition-colors duration-300"
                          whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <div className="flex flex-col items-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="cursor-pointer text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
          >
            Certifications
          </motion.h2>
          <div className="h-1 w-48 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-white/70 text-center max-w-2xl mt-4"
          >
            Professional certifications that validate my technical expertise.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                y: -5,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1)"
              }}
              className="bg-zinc-900/50 backdrop-blur-sm rounded-xl p-6 border border-white/5 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden"
            >
              {/* Decorative element */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-full blur-xl -mr-6 -mt-6"></div>
              
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-4">
                  <Award className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">{cert.name}</h3>
                  <div className="flex items-center text-white/50 text-sm">
                    <Calendar size={12} className="mr-1.5 text-purple-400" />
                    {cert.date}
                  </div>
                </div>
              </div>
              
              <h4 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
                {cert.issuer}
              </h4>
              
              <div className="mt-4">
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm text-white bg-gradient-to-r from-blue-500 to-purple-500 hover:from-purple-500 hover:to-blue-500 px-4 py-1.5 rounded-lg transition-all duration-300"
                >
                  View Certificate
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Education