"use client"

import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import titleImage from '../public/titleimage.jpg'

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden flex items-center">
      {/* Background mesh/network effect */}
      <div className="absolute inset-0 bg-black opacity-20"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col gap-6 animate-fade-in">
            <h1 className="text-6xl md:text-7xl font-bold">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                Full Stack
              </span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                Developer
              </span>
            </h1>
            
            <p className="text-foreground/70 text-lg max-w-md">
              Specializing in React, Node.js, and Cloud Architecture.
              Building scalable applications with modern tech stacks.
            </p>
            
            <div>
              <Button className="rounded-full px-8 py-6 bg-gradient-to-r from-primary to-tertiary hover:from-tertiary hover:to-primary transition-all duration-500">
                Explore Work
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden aspect-square max-w-md mx-auto">
              <Image 
                src={titleImage}
                alt="Patrick Kipkoech"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white/70 mb-1">Based in</p>
                <p className="text-xl font-medium text-blue-400">San Francisco, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

