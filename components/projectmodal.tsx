"use client";

import React, { useEffect, useState } from "react";
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
  landingImg?: string[] | string; // Can be an array of images or a single image string
  technologies: Technology[];
  url?: string;
  liveUrl?: string;
  githubUrl?: string;
  giturl?: string; // Added to handle the alternative property name
  featured: boolean;
  categories?: string[];
  mvpFeatures?: {
    timeline?: string;
    features: string[];
  };
}

interface ProjectModalProps {
  project: Project;
  isOpen: boolean;
  onClose: () => void;
}

export const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  // Use githubUrl if available, otherwise use giturl if available
  const repoUrl = project.githubUrl || project.giturl;
  
  // State to track the current image index for the carousel
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

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
  
  // Effect for image carousel rotation
  useEffect(() => {
    // Only set up the interval if landingImg is an array with more than one image
    if (isOpen && project.landingImg && Array.isArray(project.landingImg) && project.landingImg.length > 1) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => 
          prevIndex === (project.landingImg?.length ?? 0) - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change image every 5 seconds
      
      return () => clearInterval(interval);
    }
  }, [isOpen, project.landingImg]);
  
  // Helper function to get the current image to display
  const getCurrentImage = () => {
    if (!project.landingImg) return null;
    
    if (Array.isArray(project.landingImg)) {
      return project.landingImg.length > 0 ? project.landingImg[currentImageIndex] : null;
    }
    
    return project.landingImg; // If it's a string
  };

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
                      {project.landingImg && (
                        <div className="relative h-48 mb-4 rounded-lg overflow-hidden">
                          <Image
                            src={getCurrentImage() || project.image}
                            alt={`${project.title} solution`}
                            fill
                            className="object-cover"
                          />
                          {Array.isArray(project.landingImg) && project.landingImg.length > 1 && (
                            <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
                              {project.landingImg.map((_, index) => (
                                <div 
                                  key={index} 
                                  className={`w-2 h-2 rounded-full ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                                />
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                      <p className="text-slate-300">{project.solution}</p>
                    </div>
                  )}
                  
                  {/* MVP Features */}
                  {project.mvpFeatures && project.mvpFeatures.features.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-medium text-indigo-400 mb-2">
                        MVP Features {project.mvpFeatures.timeline && `(${project.mvpFeatures.timeline})`}
                      </h3>
                      <ul className="list-disc list-inside text-slate-300 space-y-1">
                        {project.mvpFeatures.features.map((feature, index) => (
                          <li key={index}>{feature}</li>
                        ))}
                      </ul>
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
                  
                  {repoUrl && (
                    <a 
                      href={repoUrl} 
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