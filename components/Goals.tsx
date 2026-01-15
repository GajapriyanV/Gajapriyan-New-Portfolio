'use client'

import { motion } from 'framer-motion'

const goals = [
  'Begin Tech content creation',
  'Learn new AI frameworks',
  'Work on a new startup idea',
  'Learn a new language',
]

export default function Goals() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="glass-card p-6"
    >
      <div className="flex items-center space-x-2 mb-4">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
        <h3 className="text-lg font-semibold text-white">Goals</h3>
      </div>
      
      <div className="space-y-2">
        {goals.map((goal, index) => (
          <motion.div
            key={goal}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
            whileHover={{ x: 5 }}
            className="flex items-center space-x-2"
          >
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
            <span className="text-gray-400">{goal}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
