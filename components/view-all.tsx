"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";

export function ViewAllProjectsButton() {
    const scrollToProjects = () => {
        const projectsSection = document.getElementById("projects");
        if (projectsSection) {
        projectsSection.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <div className="flex justify-center mt-12">
        <Button 
            onClick={scrollToProjects}
            className="rounded-lg px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
        >
            View All Projects
            <ArrowDownIcon className="ml-2 h-4 w-4" />
        </Button>
        </div>
    );
}