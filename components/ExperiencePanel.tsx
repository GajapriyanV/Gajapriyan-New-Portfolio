'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const experiences = [
  {
    company: 'Morgan Stanley',
    role: 'Incoming Software Engineer Intern',
    period: 'Sep 2025 - Dec 2025',
    logo: '/assets/morganstanley.jpg',
    details: [
      'Working on scalable financial technology solutions',
      'Collaborating with cross-functional teams to improve platform performance',
      'Contributing to open-source projects and internal tooling',
    ],
  },
  {
    company: 'Royal Bank of Canada',
    role: 'Security DevOps Engineer Intern',
    period: 'May 2025 - Aug 2025',
    logo: '/assets/rbc1.png',
    details: [
      'Developed security automation tools and CI/CD pipelines',
      'Collaborated with security teams to implement best practices',
      'Improved system reliability and monitoring capabilities',
    ],
  },
  {
    company: 'Royal Bank of Canada',
    role: 'Backend Engineer Intern',
    period: 'May 2024 - Dec 2024',
    logo: '/assets/rbc1.png',
    details: [
      'Built internal dashboards and small-scale SaaS tools with React and Node.js',
      'Improved UI performance by 40% through code optimization and best practices',
      'Introduced reusable component systems for faster development cycles',
    ],
  },
]

export default function ExperiencePanel() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ scale: 1.01 }}
      className="glass-card p-6"
    >
      <div className="flex items-center space-x-2 mb-6">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <h3 className="text-lg font-semibold text-white">Experience</h3>
      </div>
      
      <div className="space-y-4">
        {experiences.map((exp, index) => {
          const isExpanded = expandedIndex === index
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 + index * 0.1 }}
              className="border border-white/10 rounded-lg p-4 hover:border-white/20 transition-colors"
            >
              <div className="flex items-start space-x-4">
                {/* Company Logo */}
                <div className={`relative rounded-full overflow-hidden border border-white/10 flex-shrink-0 ${
                  exp.company === 'Royal Bank of Canada' ? 'w-11 h-11' : 'w-12 h-12'
                }`}>
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    fill
                    className="object-cover"
                    quality={100}
                  />
                </div>
                
                {/* Company and Role Info */}
                <div className="flex-1 min-w-0">
                  <div>
                    <h4 className="text-white font-semibold text-base">{exp.company}</h4>
                    <p className="text-gray-400 text-sm mt-0.5">{exp.role}</p>
                  </div>
                </div>
                
                {/* Date and Arrow - Aligned */}
                <div className="flex items-center space-x-3 flex-shrink-0">
                  <p className="text-gray-400 text-sm">{exp.period}</p>
                  <motion.button
                    onClick={() => toggleExpand(index)}
                    className="p-2 hover:bg-white/5 rounded-lg transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.svg
                      className="w-5 h-5 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </motion.button>
                </div>
              </div>
              
              {/* Expanded Details */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="mt-4 pt-4 border-t border-white/10">
                      <ul className="space-y-2">
                        {exp.details.map((detail, detailIndex) => (
                          <motion.li
                            key={detailIndex}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: detailIndex * 0.1 }}
                            className="text-sm text-gray-400 flex items-start"
                          >
                            <span className="text-gray-500 mr-3 mt-0.5 flex-shrink-0">•</span>
                            <span className="flex-1">{detail}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </motion.div>
  )
}
