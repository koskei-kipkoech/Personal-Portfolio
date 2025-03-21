"use client"

import { motion } from "framer-motion"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, Pagination, Navigation, EffectCoverflow } from "swiper/modules"

// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/navigation"
import "swiper/css/effect-coverflow"

// Custom styles for the Swiper
import "../styles/swiper-custom.css"

// Combined technical and soft skills data
const skillCategories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "JavaScript", level: 90 },
      { name: "Python", level: 89 },
      { name: "C#", level: 68 },
      { name: "SQL", level: 88 },
      { name: "TypeScript", level: 82 },
    ],
  },
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "HTML", level: 95 },
      { name: "CSS", level: 96 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Responsive UI Design", level: 88 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Flask", level: 85 },
      { name: "SQLAlchemy", level: 80 },
      { name: "Alembic", level: 78 },
      { name: "Express", level: 75 },
    ],
  },
  {
    name: "Database Management",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 87 },
      { name: "SQLite", level: 93 },
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
      { name: "Adaptability", level: 92 },
      { name: "Time Management", level: 95 },
    ],
  },
]

import { Beaker, Code, Database, FileJson, Pencil, Map, Cloud, Clock, Box, GitBranch, Settings, PenTool, Microscope, TestTube, Users } from "lucide-react"

// Additional skills for the badge display
const additionalSkills = [
  { name: "Jest", icon: <Beaker size={16} /> },
  { name: "PyTest", icon: <TestTube size={16} /> },
  { name: "Mocha", icon: <Beaker size={16} /> },
  { name: "DbDiagram", icon: <Database size={16} /> },
  { name: "Excalidraw", icon: <PenTool size={16} /> },
  { name: "Leaflet", icon: <Map size={16} /> },
  { name: "Netlify", icon: <Cloud size={16} /> },
  { name: "Database Scheduler", icon: <Clock size={16} /> },
  { name: "Superbase", icon: <Database size={16} /> },
  { name: "Prisma", icon: <Box size={16} /> },
  { name: "Trae", icon: <Code size={16} /> },
  { name: "Jenkins", icon: <Settings size={16} /> },
  { name: "Angular", icon: <Code size={16} /> },
  { name: "Web Scraping", icon: <Microscope size={16} /> },
  { name: "React Testing Library", icon: <Beaker size={16} /> },
  { name: "Agile Methodologies", icon: <Users size={16} /> }
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
            Other Technologies & Tools
          </h3>
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            loop={true}
            loopAdditionalSlides={5}
            speed={800}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{ clickable: true }}
            modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
            className="mySwiper"
            style={{ padding: "30px 0" }}
          >
            {additionalSkills.map((tech, index) => (
              <SwiperSlide key={tech.name} style={{ width: "auto", maxWidth: "200px" }}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.03 }}
                  className="bg-zinc-900/30 backdrop-blur-sm rounded-lg p-4 flex items-center justify-center gap-2 border border-white/5 hover:border-blue-500/50 transition-all duration-300 mx-auto h-full"
                >
                  <span className="text-white/60">{tech.icon}</span>
                  <span className="text-white/80 text-sm md:text-base">{tech.name}</span>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
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