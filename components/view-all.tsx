"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export function ViewAllProjectsButton() {
  return (
    <div className="flex justify-center mt-12">
      <Link href="/projects">
        <Button 
          className="rounded-lg px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white"
        >
          View All Projects
          <ArrowRightIcon className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  );
}