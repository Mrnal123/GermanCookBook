import React, { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-light">
      <Navbar />
      
      <AnimatePresence mode="wait">
        <motion.main 
          key="main-content"
          className="flex-grow pt-24 md:pt-32"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ 
            duration: 0.5,
            ease: "easeInOut"
          }}
        >
          {children}
        </motion.main>
      </AnimatePresence>
      
      <Footer />
    </div>
  )
}

export default Layout 