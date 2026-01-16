'use client'

import { motion } from 'framer-motion'

export default function ContactCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="glass-card p-6"
    >
      <div className="flex items-center space-x-2 mb-4">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <h3 className="text-lg font-semibold text-white">Contact</h3>
      </div>
      
      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
        Have a project, collaboration, or just want to say hi? Drop me a message anytime.
      </p>
      
      <motion.a
        href="mailto:gajapriyan.v@gmail.com"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="block w-full text-center py-3 px-6 bg-white/5 border border-white/10 rounded-lg text-white font-medium hover:bg-white/10 hover:border-white/20 transition-all"
      >
        Send Email
      </motion.a>
    </motion.div>
  )
}
