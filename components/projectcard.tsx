import React from "react";
import { ArrowUpRight } from "lucide-react";
import { ViewAllProjectsButton } from "./view-all";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: Array<{
    name: string;
    icon: React.ReactNode;
  }>;
  url?: string;
}

const ProjectCard = ({ title, description, image, technologies, url }: ProjectCardProps) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg transition-all hover:shadow-xl">
      <div className="relative overflow-hidden h-64">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform hover:scale-105" />
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
              {tech.icon}
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export function SelectedWork() {
  // You can replace these with your actual project data
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Modern shopping experience with Next.js and TypeScript",
      image: "/images/ecommerce-project.jpg", // Replace with your image path
      technologies: [
        { name: "React", icon: <span className="text-[#61DAFB]">⚛️</span> },
        { name: "Next.js", icon: <span>N</span> },
        { name: "Tailwind", icon: <span className="text-[#38B2AC]">🌊</span> },
      ],
      url: "#",
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time data visualization platform",
      image: "/images/analytics-dashboard.jpg", // Replace with your image path
      technologies: [
        { name: "TypeScript", icon: <span className="text-[#3178C6]">TS</span> },
        { name: "D3.js", icon: <span className="text-[#F9A03C]">D3</span> },
        { name: "Node.js", icon: <span className="text-[#68A063]">🟢</span> },
      ],
      url: "#",
    },
    {
      title: "Mobile Application",
      description: "Cross-platform mobile app for health tracking",
      image: "/images/mobile-app.jpg", // Replace with your image path
      technologies: [
        { name: "React Native", icon: <span className="text-[#61DAFB]">⚛️</span> },
        { name: "Firebase", icon: <span className="text-[#FFCA28]">🔥</span> },
        { name: "GraphQL", icon: <span className="text-[#E535AB]">GQL</span> },
      ],
      url: "#",
    },
  ];

  return (
    <section className="py-20 bg-[#0a101f]">
      <div className="container px-4 mx-auto">
        <div className="flex flex-col items-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Selected Work</h2>
          <div className="h-1 w-32 bg-gradient-to-r from-[#3b82f6] to-[#ec4899] rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
      <ViewAllProjectsButton/>
    </section>
  );
}