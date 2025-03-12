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
  tags: string[];
  categories: string[];
  image: string;
  link: string;
  liveUrl: string;
  featured: boolean;
}

export default function ProjectDetail() {
  const params = useParams();
  const projectId = params?.id;
  
  const [project, setProject] = useState<ProjectDetail | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load project data from db.json
    import('../../../public/db.json')
      .then((data) => {
        const projectData = data.allProjects.find(
          (p: ProjectDetail) => p.id.toString() === projectId
        );
        // Fix: Handle undefined case properly
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
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/10 text-white/70">
                    {tag}
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
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
          >
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/5 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                My Responsibilities
              </h2>
              <ul className="text-white/70 space-y-2 ml-5">
                {project.responsibilities.map((resp, index) => (
                  <li key={index} className="list-disc">
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-zinc-900/50 backdrop-blur-sm rounded-xl border border-white/5 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Outcome & Impact
              </h2>
              <p className="text-white/70">
                {project.outcome}
              </p>
            </div>
          </motion.div>
          
          <div className="flex justify-center">
            <Link href="/projects">
              <Button variant="outline" className="border border-white/10 hover:bg-white/5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Projects
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}