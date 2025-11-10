'use client'

import { useLanguage } from '../context/LanguageContext'
import { motion } from 'framer-motion'

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      onClick={toggleLanguage}
      className="relative w-14 h-7 rounded-full bg-gray-300 dark:bg-gray-600 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-950"
      aria-label="Toggle language"
    >
      <motion.div
        className="absolute top-0.5 left-0.5 w-6 h-6 rounded-full bg-white dark:bg-gray-900 flex items-center justify-center shadow-lg"
        animate={{
          x: language === 'en' ? 0 : 28,
        }}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 30,
        }}
      >
        <span className="text-[10px] font-bold text-blue-600 dark:text-blue-400">
          {language.toUpperCase()}
        </span>
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-between px-1.5 text-[9px] font-semibold pointer-events-none">
        <span className={`${language === 'en' ? 'text-transparent' : 'text-gray-600 dark:text-gray-400'}`}>EN</span>
        <span className={`${language === 'fr' ? 'text-transparent' : 'text-gray-600 dark:text-gray-400'}`}>FR</span>
      </div>
    </button>
  )
}

