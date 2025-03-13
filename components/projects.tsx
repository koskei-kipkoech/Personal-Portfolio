"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft } from 'lucide-react';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { BackgroundPattern } from "@/components/background-patterns";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  featured: boolean;
}

export default function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load all projects from db.json
    import('../public/db.json')
      .then((data) => {
        setProjects(data.allProjects);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading projects:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <main className="min-h-screen bg-black text-white">
        <BackgroundPattern />
        <Navbar />
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <p>Loading projects...</p>
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
      
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center mb-16">
            <h1 className="cursor-pointer text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500">
              All Projects
            </h1>
            <p className="text-white/70 text-center max-w-2xl mb-8">
              An extensive collection of my work across different technologies and industries.
            </p>
            <Link href="/" className="mb-12 relative group inline-block">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg opacity-75 group-hover:opacity-100 transition duration-300 animate-spin-slow"></div>
              <Button 
                variant="outline" 
                className="relative px-6 py-2 bg-background text-foreground border-0 rounded-lg font-medium group-hover:bg-background/80 transition duration-300 flex items-center gap-2"
              >
                <ArrowLeft size={16} />
                Back to Home
              </Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-zinc-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-white/5 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10" />
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="cursor-pointer text-xl font-semibold mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-purple-500 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2 py-1 rounded-full bg-white/5 text-white/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Link href={`/projects/${project.id}`} className="inline-flex items-center text-sm text-blue-400 hover:text-blue-300">
                    View Project
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                    </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      
      <Footer />
    </main>
  );
}