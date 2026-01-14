'use client'

import { motion } from 'framer-motion'

export default function ProfileCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="glass-card p-6"
    >
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
          <h2 className="text-xl font-semibold text-white">Gajapriyan Vigneswaran</h2>
        </div>
        
        <p className="text-sm text-gray-400 leading-relaxed max-w-md mx-auto">
        Welcome to my site! I'm a passionate developer specializing in full-stack, cloud security, and DevOps. I'm a Computer Science student at Carleton University with strong academic and industry experience. Always exploring new tech and building ambitious projects.
        </p>
      </div>
    </motion.div>
  )
}
