"use client";

import React, { useEffect, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { ViewAllProjectsButton } from "./view-all";
import Image from "next/image";

interface Technology {
  name: string;
  icon: string;
}

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: Technology[];
  url?: string;
  featured: boolean;
}

const ProjectCard = ({ title, description, image, technologies, url }: Project) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl">
      <div className="relative overflow-hidden h-64">
        <Image 
          src={image} 
          alt={title} 
          fill
          className="object-cover transition-transform hover:scale-105"
        />
      </div>
      <div className="p-6 bg-[#111827]">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          {url && (
            <a href={url} className="text-primary">
              <ArrowUpRight size={20} />
            </a>
          )}
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <div key={index} className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#1a2030] text-sm">
              <span className="mr-1">{tech.icon}</span>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export function SelectedWork() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, you would fetch this from an API
    // For now, we'll import it directly
    import('../public/db.json')
      .then((data) => {
        setProjects(data.highlightedProjects);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error loading projects:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-[#0a101f]">
        <div className="container px-4 mx-auto text-center">
          <p>Loading projects...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[#0a101f]">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Selected Work</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#3b82f6] to-[#ec4899] rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
      <ViewAllProjectsButton/>
    </section>
  );
}