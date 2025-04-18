import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Recipes', path: '/recipes' },
    { name: 'About', path: '/about' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.nav 
      initial="hidden"
      animate="visible"
      variants={navVariants}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'py-3 glass-bg shadow-soft' : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex-shrink-0 flex items-center"
            variants={itemVariants}
          >
            <Link href="/" className="flex items-center">
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.img 
                  src="/images/german-cookbook-logo.png" 
                  alt="German Cookbook Logo"
                  className="h-12 w-auto"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                />
              </motion.div>
              <motion.span 
                className="ml-3 text-2xl font-serif text-dark"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-primary">Das</span> Kochbuch
              </motion.span>
            </Link>
          </motion.div>
          
          {/* Desktop menu */}
          <div className="hidden md:block">
            <motion.div 
              className="ml-10 flex items-center space-x-6"
              variants={itemVariants}
            >
              {navLinks.map((link, index) => (
                <motion.div 
                  key={link.name}
                  variants={itemVariants}
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link 
                    href={link.path} 
                    className="animated-underline px-3 py-2 text-lg font-medium text-dark hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.button 
                className="btn btn-primary ml-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                <span className="mr-2">Random Recipe</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                </svg>
              </motion.button>
            </motion.div>
          </div>
          
          {/* Mobile menu button */}
          <motion.div 
            className="md:hidden"
            variants={itemVariants}
          >
            <motion.button 
              onClick={toggleMenu} 
              className="inline-flex items-center justify-center p-2 rounded-md text-dark hover:text-primary hover:bg-gray-100"
              whileTap={{ scale: 0.95 }}
            >
              <span className="sr-only">Open main menu</span>
              <div className="relative w-6 h-6">
                <motion.span
                  className="absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out"
                  animate={{
                    rotate: isOpen ? 45 : 0,
                    translateY: isOpen ? 8 : 0,
                  }}
                />
                <motion.span
                  className="absolute h-0.5 bg-current transform transition-all duration-300 ease-in-out"
                  animate={{
                    width: isOpen ? "100%" : "80%",
                    translateY: 8,
                    opacity: isOpen ? 0 : 1
                  }}
                  style={{ translateX: "20%" }}
                />
                <motion.span
                  className="absolute h-0.5 w-full bg-current transform transition duration-300 ease-in-out"
                  animate={{
                    rotate: isOpen ? -45 : 0,
                    translateY: isOpen ? 8 : 16,
                  }}
                />
              </div>
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-bg border-t mt-2"
          >
            <div className="px-4 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Link 
                    href={link.path}
                    className="block px-4 py-3 rounded-lg text-base font-medium text-dark hover:bg-white/50 hover:text-primary transition-colors duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: 0.3 }}
              >
                <button className="flex items-center w-full text-left px-4 py-3 rounded-lg text-base font-medium text-white bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg mt-2">
                  <span className="mr-2">Random Recipe</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
                  </svg>
                </button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navbar 