"use client";

import { useState } from "react";
import Image from "next/image";
import { TOOLS, CATEGORIES } from "@/data/tools";
import ToolCard from "@/components/ToolCard";

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTools = selectedCategory 
    ? TOOLS.filter(tool => tool.category === selectedCategory)
    : TOOLS;

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8 sm:py-16">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 mb-4">
            Vibecoding Directory
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover modern tools that let you build software without traditional coding. 
            Perfect for non-technical creators, entrepreneurs, and developers alike.
          </p>
        </header>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button 
            className={`px-4 py-2 rounded-full font-medium transition
            ${selectedCategory === null 
              ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-100' 
              : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-100'}`}
            onClick={() => setSelectedCategory(null)}
          >
            All
          </button>
          {CATEGORIES.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-full font-medium transition
              ${selectedCategory === category 
                ? 'bg-purple-100 text-purple-700 dark:bg-purple-900 dark:text-purple-100' 
                : 'bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-100'}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} {...tool} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-800 dark:text-white">
            Ready to try vibecoding?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Pick a tool and start building your next project without writing code.
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-16 border-t border-gray-200 dark:border-gray-800 pt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300">
              About
            </a>
            <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300">
              Submit a Tool
            </a>
            <a href="#" className="hover:text-gray-700 dark:hover:text-gray-300">
              Privacy
            </a>
          </div>
          <p>© {new Date().getFullYear()} Vibecoding Directory. All tools belong to their respective owners.</p>
        </footer>
      </div>
    </div>
  );
}