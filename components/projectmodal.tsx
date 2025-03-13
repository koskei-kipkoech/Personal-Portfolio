"use client";

import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

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

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[1000]" // Ensure the backdrop has a high z-index
            onClick={onClose}
          />
          
          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[1050] flex items-center justify-center p-4 sm:p-6 md:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="bg-slate-900 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
              {/* Header with close button */}
              <div className="flex items-center justify-between p-4 border-b border-slate-700">
                <h2 className="cursor-pointer text-xl font-bold text-white">{project.title}</h2>
                <button 
                  onClick={onClose}
                  className="p-2 hover:bg-slate-700 rounded-full transition-colors"
                >
                <X size={20} className="text-orange-500 hover:text-red-500 transition-colors" />
                </button>
              </div>
              
              {/* Content area with scrolling */}
              <div className="overflow-y-auto flex-grow">
                {/* Hero image */}
                <div className="relative h-56 md:h-72">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Project details */}
                <div className="p-6">
                  {/* Tags/Categories */}
                  {project.categories && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.categories.map((category, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-indigo-900/40 text-indigo-300 text-xs rounded-full"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                  )}
                  
                  {/* Description */}
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-indigo-400 mb-2">Overview</h3>
                    <p className="text-slate-300">
                      {project.detailedDescription || project.description}
                    </p>
                  </div>
                  
                  {/* Problem Statement */}
                  {project.problemStatement && (
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-indigo-400 mb-2">The Challenge</h3>
                      <p className="text-slate-300">{project.problemStatement}</p>
                    </div>
                  )}
                  
                  {/* Solution */}
                  {project.solution && (
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-indigo-400 mb-2">Solution</h3>
                      <p className="text-slate-300">{project.solution}</p>
                    </div>
                  )}
                  
                  {/* Responsibilities */}
                  {project.responsibilities && project.responsibilities.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-indigo-400 mb-2">My Role</h3>
                      <ul className="list-disc list-inside text-slate-300 space-y-1">
                        {project.responsibilities.map((item, index) => (
                          <li key={index}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {/* Outcome */}
                  {project.outcome && (
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-indigo-400 mb-2">Results</h3>
                      <p className="text-slate-300">{project.outcome}</p>
                    </div>
                  )}
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h3 className="text-lg font-medium text-indigo-400 mb-2">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <div 
                          key={index}
                          className="flex items-center gap-1 px-3 py-1 rounded-full bg-slate-800 text-sm border border-slate-700 text-slate-300"
                        >
                          <span className="mr-1">{tech.icon}</span>
                          <span>{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Footer with actions */}
              <div className="border-t border-slate-700 p-4 flex justify-between items-center">
                <Link 
                  href="/" 
                  className="text-slate-300 hover:text-white flex items-center gap-1"
                  onClick={onClose}
                >
                  <ArrowRight size={16} className="rotate-180" />
                  <span>Home</span>
                </Link>
                
                <div className="flex gap-2">
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg flex items-center gap-1 transition-colors"
                    >
                      <ExternalLink size={16} />
                      <span>Live Demo</span>
                    </a>
                  )}
                  
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors"
                    >
                      Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
