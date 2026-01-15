'use client'

import { motion } from 'framer-motion'

const certificates = [
  'AWS Certified Cloud Practitioner',
  'Machine Learning Specialization (Andrew Ng)',
]

export default function Certificates() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.7 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="glass-card p-3"
    >
      <div className="flex items-center space-x-2 mb-2">
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h3 className="text-base font-semibold text-white">Certificates</h3>
      </div>
      
      <div className="space-y-1.5">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.8 + index * 0.1 }}
            whileHover={{ x: 5 }}
            className="flex items-start space-x-2"
          >
            <svg className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-gray-400 text-sm">{cert}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
