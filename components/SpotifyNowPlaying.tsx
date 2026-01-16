'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export default function SpotifyNowPlaying() {
  const currentTime = '02:11'
  const totalTime = '02:54'
  const progress = (131 / 174) * 100 // 02:11 / 02:54

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.4 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="glass-card px-4 md:px-6 pt-4 md:pt-6 pb-4 md:pb-6"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">Listening to Spotify</span>
          <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.419.36-.66.78-.54 4.56 1.021 8.52 1.561 11.64 1.92.42.06.72.42.66.84-.06.359-.3.6-.66.66zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.18.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
        </div>
        <button className="text-gray-400 hover:text-white transition-colors">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
        </button>
      </div>

      {/* Album Art and Song Info */}
      <div className="flex items-center space-x-4 mb-3">
        <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
          <Image
            src="/assets/drake cover.jpg"
            alt="Album Art"
            fill
            className="object-cover"
            quality={100}
          />
        </div>
        <div className="flex-1 min-w-0">
          <h4 className="text-white font-semibold text-sm truncate">Under Ground Kings</h4>
          <p className="text-gray-400 text-xs truncate">Drake</p>
        </div>
      </div>

      {/* Progress Bar */}
      <div className="mb-3">
        <div className="flex items-center justify-between text-xs text-gray-400 mb-1">
          <span>{currentTime}</span>
          <span>{totalTime}</span>
        </div>
        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.5 }}
            className="h-full bg-green-500 rounded-full"
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-3 mb-3">
        <motion.a
          href="https://open.spotify.com/search/Under%20Ground%20Kings%20Drake"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex-1 flex items-center justify-center space-x-2 py-2.5 px-4 bg-white/5 border border-white/10 rounded-lg text-white text-sm font-medium hover:bg-white/10 hover:border-white/20 transition-all"
        >
          <svg className="w-4 h-4 text-green-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.84-.179-.84-.66 0-.419.36-.66.78-.54 4.56 1.021 8.52 1.561 11.64 1.92.42.06.72.42.66.84-.06.359-.3.6-.66.66zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.18.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.42 1.56-.299.421-1.02.599-1.559.3z"/>
          </svg>
          <span>Play on Spotify</span>
        </motion.a>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-10 h-10 flex items-center justify-center bg-white/5 border border-white/10 rounded-full text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
          </svg>
        </motion.button>
      </div>

      {/* Recently Played Section */}
      <div className="pt-3 border-t border-white/10">
        <h4 className="text-xs text-gray-400 mb-2 uppercase tracking-wider">Recently Played</h4>
        <div className="space-y-2 md:space-y-3">
          {[
            { title: 'The Color Violet', artist: 'Tory Lanez', image: '/assets/tory-cover.png' },
            { title: 'Funky Friday', artist: 'Dave', image: '/assets/DaveFredoFunkyFriday.png' },
            { title: 'Jungle', artist: 'Drake', image: '/assets/jungle-cover.jpg' },
          ].map((track, index) => (
            <motion.div
              key={`${track.title}-${index}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
              whileHover={{ x: 5 }}
              className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
            >
              <div className="relative w-10 h-10 rounded overflow-hidden flex-shrink-0">
                <Image
                  src={track.image}
                  alt={track.title}
                  fill
                  className="object-cover"
                  quality={100}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white text-xs font-medium truncate">{track.title}</p>
                <p className="text-gray-400 text-xs truncate">{track.artist}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
