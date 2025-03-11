import React from "react";
import Link from "next/link";

export function ViewAllProjectsButton() {
  return (
    <div className="flex justify-center mt-16">
      <Link 
        href="/projects" 
        className="px-8 py-3 rounded-full bg-[#1a1f2e] text-white hover:bg-[#252c3e] transition-colors"
      >
        View All Projects
      </Link>
    </div>
  );
}