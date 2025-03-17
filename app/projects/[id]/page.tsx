"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { BackgroundPattern } from "@/components/background-patterns";
import { useParams } from "next/navigation";

interface Technology {
  name: string;
  icon: string;
}

interface ProjectDetail {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  detailedDescription: string;
  problemStatement: string;
  responsibilities: string[];
  solution: string;
  outcome: string;
  mvpFeatures: {
    timeline: string;
    features: string[];
  };
  landingImg?: string[] | string;
  image: string;
  technologies: Technology[];
  url?: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  categories: string[];
}

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params?.id;
  
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState(true);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    fetch('/db.json')
      .then((response) => response.json())
      .then((data) => {
        // First check in highlightedProjects
        let projectData = data.highlightedProjects?.find(
          (p: ProjectDetail) => p.id.toString() === projectId
        );
        
        // If not found, check in allProjects
        if (!projectData && data.allProjects) {
          projectData = data.allProjects.find(
            (p: ProjectDetail) => p.id.toString() === projectId
          );
        }
        
        setProject(projectData || null);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading project:', error);
        setLoading(false);
      });
  }, [projectId]);

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white">
        <BackgroundPattern />
        <Navbar />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <p>Loading project details...</p>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  if (!project) {
    return (
      <main className="min-h-screen bg-black text-white">
        <BackgroundPattern />
        <Navbar />
        <section className="pt-32 pb-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-3xl font-bold mb-4">Project Not Found</h1>
            <p className="mb-8">The project you're looking for doesn't exist or has been removed.</p>
            <Link href="/projects">
              <Button variant="outline" className="border border-white/10 hover:bg-white/5">
                Back to Projects
              </Button>
            </Link>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white">
      <BackgroundPattern />
      <Navbar />
      
      <section className="pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="flex justify-between items-center mb-8">
            <Link href="/projects">
              <Button variant="outline" className="border border-white/10 hover:bg-white/5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to Projects
              </Button>
            </Link>
            
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  View Live Project
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </Button>
              </a>
            )}
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16"
          >
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
                {project.title}
              </h1>
              
              <p className="text-white/70 mb-8 text-lg">
                {project.detailedDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.categories.map((category) => (
                  <span key={category} className="text-sm px-3 py-1 rounded-full bg-blue-500/20 text-blue-300">
                    {category}
                  </span>
                ))}
              </div>
              <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Technologies</h2>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70">
                    {tech.icon} {tech.name}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="relative h-64 md:h-80 lg:h-full rounded-xl overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20" />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/5 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Problem Statement
              </h2>
              <p className="text-white/70">
                {project.problemStatement}
              </p>
            </div>
            
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/5 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Solution
              </h2>
              <p className="text-white/70">
                {project.solution}
              </p>
            </div>
          </motion.div>
          {project.landingImg && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-16"
            >
              {Array.isArray(project.landingImg) ? (
                <>
                  <Image
                    src={project.landingImg[currentImageIndex]}
                    alt="Landing page screenshot"
                    fill
                    className="object-cover object-center"
                  />
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {project.landingImg.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/50'}`}
                      />
                    ))}
                  </div>
                </>
              ) : (
                <Image
                  src={project.landingImg}
                  alt="Landing page screenshot"
                  fill
                  className="object-cover object-center"
                />
              )}
            </motion.div>
          )}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/5 p-6 mb-8 hover:border-blue-500/30 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
              </svg>
              MVP Features
            </h2>
            <div className="mb-4">
              <span className="text-blue-300 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                {project.mvpFeatures.timeline}
              </span>
            </div>
            <ul className="text-white/70 space-y-3">
              {project.mvpFeatures.features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-blue-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/5 p-6 mb-8 hover:border-purple-500/30 transition-all duration-300"
          >
            <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Responsibilities
            </h2>
            <ul className="text-white/70 space-y-3">
              {project.responsibilities.map((responsibility, index) => (
                <li key={index} className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-0.5 text-purple-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{responsibility}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/5 p-6 mb-8"
          >
            <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Outcome
            </h2>
            <p className="text-white/70">
              {project.outcome}
            </p>
          </motion.div>
          </div>
        </section>
        <Footer />
      </main>
    );
  }

