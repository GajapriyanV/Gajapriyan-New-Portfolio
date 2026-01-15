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
          <motion.span
            className="text-2xl"
            animate={{
              rotate: [0, 14, -8, 14, -4, 10, 0],
            }}
            transition={{
              duration: 0.5,
              repeat: Infinity,
              repeatDelay: 2,
              ease: "easeInOut"
            }}
          >
            👋
          </motion.span>
          <h2 className="text-xl font-semibold text-white">Hey! It's Gaja</h2>
        </div>
        
        <p className="text-sm text-gray-400 leading-relaxed max-w-md mx-auto">
        Welcome to my site! I'm a passionate developer specializing in full-stack, cloud security, and DevOps. I'm a Computer Science student at Carleton University with strong academic and industry experience. Always exploring new tech and building ambitious projects.
        </p>
      </div>
    </motion.div>
  )
}
