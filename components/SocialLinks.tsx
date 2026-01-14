'use client'

import { motion } from 'framer-motion'

const socialLinks = [
  { name: 'GitHub', icon: '🐙', url: 'https://github.com', color: 'text-gray-300' },
  { name: 'LinkedIn', icon: 'in', url: 'https://linkedin.com', color: 'text-blue-400' },
  { name: 'Twitter', icon: '🐦', url: 'https://twitter.com', color: 'text-sky-400' },
  { name: 'YouTube', icon: '▶', url: 'https://youtube.com', color: 'text-red-400' },
]

export default function SocialLinks() {
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
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <h3 className="text-lg font-semibold text-white">Social Links</h3>
      </div>
      
      <div className="space-y-3">
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 + index * 0.1 }}
            whileHover={{ x: 5, scale: 1.02 }}
            className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group"
          >
            <span className="text-2xl">{link.icon}</span>
            <span className="font-medium text-gray-300 group-hover:text-white transition-colors">
              {link.name}
            </span>
          </motion.a>
        ))}
      </div>
    </motion.div>
  )
}
