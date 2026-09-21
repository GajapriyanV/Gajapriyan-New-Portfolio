'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

const experiences = [
  {
    company: 'Shopify',
    role: 'Incoming Software Engineer Intern',
    period: 'Winter 2027',
    logo: '/assets/shopify.svg',
    logoClassName: 'object-contain p-2',
    details: [
      'Incoming Software Engineer Intern focused on developing scalable backend services and full-stack product features.',
    ],
  },
  {
    company: 'SAP',
    role: 'Software Engineer Intern',
    period: 'Sep 2026 - Dec 2026',
    logo: '/assets/sap.svg',
    logoClassName: 'object-contain p-1.5',
    details: [
      'Built TypeScript/React analytics features using Redux, engineering query-state management and multidimensional filtering workflows to reduce data retrieval latency by 25%.',
      'Optimized HANA queries, resolving 15+ performance and correctness issues in calculations, filtering, and sorting.',
    ],
  },
  {
    company: 'Morgan Stanley',
    role: 'Software Engineer Intern',
    period: 'May 2026 - Aug 2026',
    logo: '/assets/morganstanley.jpg',
    logoClassName: 'object-cover',
    details: [
      'Engineered end-to-end Python ETL pipelines for the Archival Status Report platform, restoring 150M+ SMS/MMS records into Snowflake for enterprise legal and compliance reporting workflows.',
      'Built a Streamlit application powered by Snowflake Cortex, enabling 7+ teams to query data using natural language.',
      'Built a reusable ETL orchestration and validation framework, accelerating onboarding by 2+ hours per pipeline.',
    ],
  },
  {
    company: 'Carleton University',
    role: 'Database Management Systems Teaching Assistant',
    period: 'Sep 2025 - Dec 2025',
    logo: '/assets/carleton.svg',
    logoClassName: 'object-contain p-2',
    details: [
      'Mentored 100+ students in SQL and NoSQL database concepts while providing technical leadership.',
    ],
  },
  {
    company: 'Royal Bank of Canada',
    role: 'Software Engineer Intern',
    period: 'May 2025 - Aug 2025',
    logo: '/assets/rbc1.png',
    logoClassName: 'object-cover',
    details: [
      'Engineered a Python GitHub Actions workflow automating Azure Service Principal secret rotation and zero-downtime Kubernetes pod rollouts, eliminating 90% of manual credential tickets across 50+ workloads.',
      'Engineered a Java Spring Boot batch service processing SCA vulnerability data for 10+ applications, leveraging Redis caching to reduce scan latency by 60% and false deployment blocks by 85%.',
      'Optimized Kubernetes resource requests across 15+ applications using Grafana metrics, reducing waste by 40%.',
    ],
  },
  {
    company: 'Royal Bank of Canada',
    role: 'Software Engineer Intern',
    period: 'May 2024 - Dec 2024',
    logo: '/assets/rbc1.png',
    logoClassName: 'object-cover',
    details: [
      'Integrated k6 load testing and Gremlin chaos engineering into Jenkins/GitHub Actions, automating post-deployment performance validation and workload right-sizing across 20 services for production workloads.',
      'Implemented audit reporting endpoints for a Java Spring Boot management API, enabling automated certificate audits across 30+ services and increasing compliance tracking by 25%.',
      'Built a Java Spring Boot service exposing compliance data through REST APIs, reducing reporting time by 40%.',
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
              className="surface-tile p-4"
            >
              <div className="grid grid-cols-[3rem_minmax(0,1fr)_2.25rem] md:grid-cols-[3rem_minmax(0,1fr)_auto_2.25rem] items-start gap-x-3 md:gap-x-4">
                {/* Company Logo */}
                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-white/10 bg-white/5 flex items-center justify-center">
                    <Image
                      src={exp.logo}
                      alt={exp.company}
                      fill
                      sizes="48px"
                      className={exp.logoClassName}
                      quality={100}
                    />
                </div>

                {/* Company and Role Info */}
                <div className="min-w-0">
                  <div>
                    <h4 className="text-white font-semibold text-base break-words">{exp.company}</h4>
                    <p className="text-gray-400 text-sm mt-0.5 break-words leading-relaxed">{exp.role}</p>
                    <p className="text-gray-400 text-sm mt-2 md:hidden">{exp.period}</p>
                  </div>
                </div>
                
                {/* Date and Arrow - Aligned */}
                <p className="text-gray-400 text-sm hidden md:block whitespace-nowrap pt-2 text-right">{exp.period}</p>
                <div>
                  <motion.button
                    onClick={() => toggleExpand(index)}
                    aria-expanded={isExpanded}
                    aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${exp.company} ${exp.period} experience`}
                    className="p-2 hover:bg-white/5 rounded-lg transition-colors flex-shrink-0"
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
