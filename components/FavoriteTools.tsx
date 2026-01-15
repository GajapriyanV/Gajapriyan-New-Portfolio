'use client'

import { motion } from 'framer-motion'

const tools = [
  { name: 'LangGraph', description: 'AI/ML Workflow' },
  { name: 'LangChain', description: 'LLM Framework' },
  { name: 'Pinecone', description: 'Vector Database' },
  { name: 'FastAPI', description: 'API Framework' },
  { name: 'Next.js', description: 'React Framework' },
  { name: 'Python', description: 'Programming Language' },
  { name: 'PostgreSQL', description: 'Database' },
]

export default function FavoriteTools() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="glass-card p-6"
    >
      <div className="flex items-center space-x-2 mb-4">
        <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <h3 className="text-lg font-semibold text-white">Favorite Tools</h3>
      </div>
      
      <div className="space-y-2">
        {tools.map((tool, index) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
            whileHover={{ x: 5 }}
            className="flex items-center space-x-2"
          >
            <div className="w-2 h-2 rounded-full bg-white/40"></div>
            <div>
              <span className="text-white font-medium">{tool.name}</span>
              <span className="text-gray-400 text-sm ml-2">- {tool.description}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}
