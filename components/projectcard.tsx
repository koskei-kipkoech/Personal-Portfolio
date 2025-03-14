"use client";

import React, { useEffect, useState, useRef } from "react";
import { ArrowUpRight, Star, Github } from "lucide-react";
import { ViewAllProjectsButton } from "./view-all";
import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectModal } from "./projectmodal";
import { BackgroundLines } from "@/components/ui/background-lines";

interface Technology {
  name: string;
  icon: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription?: string;
  detailedDescription?: string;
  problemStatement?: string;
  responsibilities?: string[];
  solution?: string;
  outcome?: string;
  image: string;
  technologies: Technology[];
  url?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  categories?: string[];
}

const ProjectCard = ({ project }: { project: Project }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsModalOpen(true);
  };
  
  return (
    <>
      <motion.div
        whileHover={{ y: -10 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden shadow-lg group"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative overflow-hidden h-60">
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />
          <Image
            src={project.image}
            alt={project.title}
            fill
            className={`object-cover transition-transform duration-700 ${
              isHovered ? "scale-110 blur-sm" : "scale-100"
            }`}
          />
          <div className="absolute bottom-0 left-0 z-20 p-4 w-full">
            <h3 className="text-2xl font-bold text-white">{project.title}</h3>
          </div>
        </div>
        <div className="p-6 bg-slate-800/80 backdrop-blur-sm">
          <div className="flex justify-between items-center mb-4">
            <div className="flex space-x-2">
              <motion.button 
                whileHover={{ scale: 1.1 }}
                onClick={openModal}
                className="p-2 bg-indigo-600 hover:bg-indigo-700 rounded-full text-white"
                title="View Details"
              >
                <ArrowUpRight size={18} />
              </motion.button>
              {project.githubUrl && (
                <motion.a 
                  whileHover={{ scale: 1.1 }}
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="p-2 bg-gray-700 hover:bg-gray-600 rounded-full text-white"
                  title="GitHub Repository"
                >
                  <Github size={18} />
                </motion.a>
              )}
            </div>
            <motion.div 
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.5 }}
              className="text-amber-400"
            >
              <Star size={20} fill={isHovered ? "currentColor" : "none"} />
            </motion.div>
          </div>
          <p className="text-gray-300 mb-6 line-clamp-3">
            {project.shortDescription || project.description}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-700/50 text-sm border border-slate-600 text-gray-200"
              >
                <span className="mr-1">{tech.icon}</span>
                <span>{tech.name}</span>
              </motion.div>
            ))}
            {project.technologies.length > 3 && (
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1 rounded-full bg-slate-700/50 text-sm border border-slate-600 text-gray-200"
              >
                +{project.technologies.length - 3} more
              </motion.div>
            )}
          </div>
        </div>
      </motion.div>
      
      <ProjectModal 
        project={project} 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export function SelectedWork() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // In a real application, you would fetch this from an API
    import('../public/db.json')
      .then((data) => {
        // Add a small delay for a nicer loading effect
        setTimeout(() => {
          setProjects(data.highlightedProjects);
          setLoading(false);
        }, 800);
      })
      .catch((error) => {
        console.error('Error loading projects:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-slate-900">
        <div className="container px-4 mx-auto text-center">
          <div className="space-y-2">
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="inline-block"
            >
              <div className="w-16 h-16 border-4 border-indigo-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
            </motion.div>
            <p className="text-gray-400 mt-4">Curating amazing projects...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <BackgroundLines>
      <motion.section 
        ref={sectionRef}
        id="projects" 
        className="py-20 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Remove or keep the existing animated background elements based on preference */}
        
        <div className="container mx-auto px-4 relative z-10"></div>
          <motion.div 
            className="flex flex-col items-center mb-16"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="cursor-pointer text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">Selected Projects</h2>
            <div className="h-1 w-48 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
            <p className="mt-4 text-gray-300 max-w-lg text-center">Check out some of my favorite works and creative experiments</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
          <ViewAllProjectsButton />
      </motion.section>
    </BackgroundLines>
  );
}