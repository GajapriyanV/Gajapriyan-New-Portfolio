'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function LocalTimeWidget() {
  const [time, setTime] = useState<string>('')
  const [date, setDate] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const hours = now.getHours()
      const minutes = now.getMinutes().toString().padStart(2, '0')
      const seconds = now.getSeconds().toString().padStart(2, '0')
      const ampm = hours >= 12 ? 'PM' : 'AM'
      const displayHours = hours % 12 || 12
      
      setTime(`${displayHours}:${minutes}:${seconds} ${ampm}`)
      setDate(now.toLocaleDateString('en-US', { 
        weekday: 'long', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      }))
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="glass-card p-6"
    >
      <div className="flex items-center justify-center mb-4">
        <h3 className="text-lg font-semibold text-white">My Local Time [EST]</h3>
      </div>
      
      <motion.div
        key={time}
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        className="text-3xl font-mono font-bold text-white text-center"
      >
        {time}
      </motion.div>
      
      <p className="text-xs text-gray-400 text-center mt-2">{date}</p>
    </motion.div>
  )
}
