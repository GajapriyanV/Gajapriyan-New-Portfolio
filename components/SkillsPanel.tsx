'use client'

import { motion } from 'framer-motion'

const skills = {
  Frontend: ['React / Next.js', 'Tailwind CSS / CSS Animations', 'Framer Motion', 'HTML / CSS / JS'],
  Backend: ['Node.js / Express', 'PostgreSQL / Prisma', 'REST & GraphQL APIs'],
  'Design & Tools': ['Figma / Motion Design', 'Docker / Git', 'Notion / VS Code'],
  Other: ['Agile / Scrum', 'SEO Basics', 'Performance Optimization'],
}

export default function SkillsPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6 }}
      whileHover={{ scale: 1.01 }}
      className="glass-card p-6"
    >
      <div className="flex items-center space-x-2 mb-6">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <h3 className="text-lg font-semibold text-white">Skills</h3>
      </div>
      
      <div className="space-y-4">
        {Object.entries(skills).map(([category, items], categoryIndex) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.7 + categoryIndex * 0.1 }}
          >
            <h4 className="text-white font-semibold mb-2">{category}:</h4>
            <div className="flex flex-wrap gap-2">
              {items.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.2, delay: 0.8 + categoryIndex * 0.1 + index * 0.05 }}
                  whileHover={{ scale: 1.05 }}
                  className="px-3 py-1 bg-white/5 rounded-lg text-sm text-gray-300 border border-white/10 hover:border-white/20 hover:text-white transition-colors"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
