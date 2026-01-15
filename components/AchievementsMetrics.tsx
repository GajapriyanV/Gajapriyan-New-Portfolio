'use client'

import { useState, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const achievements = [
  { label: 'Projects Completed', value: 50, suffix: '+' },
  { label: 'Open Source Contributions', value: 10, suffix: '+' },
  { label: 'Speaker Engagements', value: 3, suffix: '+' },
  { label: 'Awards & Recognition', value: 5 },
]

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="text-3xl font-bold text-white text-left block">
      {count.toLocaleString()}{suffix}
    </span>
  )
}

export default function AchievementsMetrics() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="glass-card pt-4 px-4 pb-0 h-full"
    >
      <div className="flex items-center space-x-2 mb-4">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
        <h3 className="text-lg font-semibold text-white">Achievements & Metrics</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-3 -mb-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={achievement.label}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
            className="bg-white/5 rounded-lg p-3 border border-white/10 text-left"
          >
            <div className="text-left">
              <Counter value={achievement.value} suffix={achievement.suffix} />
            </div>
            <p className="text-gray-400 text-xs mt-2">{achievement.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
