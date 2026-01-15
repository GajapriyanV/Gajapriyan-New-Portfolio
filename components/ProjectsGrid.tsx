'use client'

import { motion } from 'framer-motion'

const projects = [
  {
    id: 1,
    name: 'Atlas',
    description: 'An AI-powered wealth platform that automatically rebalances portfolios and performs tax-loss harvesting using real-time market data and machine-learning risk models.',
    github: 'https://github.com',
  },
  {
    id: 2,
    name: '6ixFlow',
    description: 'An AI-driven geospatial platform that predicts traffic congestion across Toronto using multi-year mobility data, Random Forest models, and an interactive map interface.',
    github: 'https://github.com',
  },
  {
    id: 3,
    name: 'CourseCraft',
    description: 'An AI-powered course builder that generates structured learning roadmaps, videos, and assessments from simple user prompts.',
    github: 'https://github.com',
  },
  {
    id: 4,
    name: 'SpectraHunter Simulation',
    description: 'A multithreaded C simulation of a networked ghost-hunting system where autonomous agents explore rooms, collect evidence, and react dynamically to encounters.',
    github: 'https://github.com',
  },
  {
    id: 5,
    name: 'Task-Connect',
    description: 'A student-focused service marketplace that lets users showcase skills, find opportunities, and communicate through built-in real-time chat.',
    github: 'https://github.com',
  },
  {
    id: 6,
    name: 'Sudoku Solver (Java)',
    description: 'A high-performance Sudoku solver that uses backtracking and recursion to compute 100% accurate solutions for any valid board.',
    github: 'https://github.com',
  },
]

export default function ProjectsGrid() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ scale: 1.01 }}
      className="glass-card p-6"
    >
      <div className="flex items-center space-x-2 mb-6">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <h3 className="text-lg font-semibold text-white">Projects</h3>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
            whileHover={{ scale: 1.02, y: -2 }}
            className="bg-white/5 rounded-lg p-4 border border-white/10 hover:border-white/20 transition-colors h-40 flex flex-col"
          >
            {/* Icons Row */}
            <div className="flex items-start justify-between mb-3">
              {/* Folder Icon */}
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              
              {/* GitHub Icon */}
              <motion.a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-gray-300 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </motion.a>
            </div>
            
            {/* Project Title */}
            <h4 className="text-white font-semibold text-base mb-2">{project.name}</h4>
            
            {/* Project Description */}
            <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
