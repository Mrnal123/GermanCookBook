import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-dark text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-12 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={footerVariants}
        >
          {/* Brand Section */}
          <motion.div
            className="md:col-span-4"
            variants={itemVariants}
          >
            <Link href="/" className="flex items-center mb-6">
              <motion.img 
                src="/images/german-cookbook-logo.png" 
                alt="German Cookbook Logo"
                className="h-10 w-auto"
                whileHover={{ rotate: 5, scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              />
              <span className="ml-3 text-xl font-serif">
                <span className="text-primary">Das</span> Kochbuch
              </span>
            </Link>
            <p className="mb-6 text-gray-300 max-w-md">
              Entdecken Sie authentische deutsche Rezepte, sorgfältig zusammengestellt mit Präzision und Leidenschaft, die das reiche kulinarische Erbe Deutschlands in Ihre Küche bringen.
            </p>
            <div className="flex space-x-4">
              {[
                { 
                  name: 'Twitter',
                  icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                },
                {
                  name: 'Instagram',
                  icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                },
                {
                  name: 'Facebook',
                  icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
                },
                {
                  name: 'Pinterest',
                  icon: <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/></svg>
                }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href="#"
                  aria-label={social.name}
                  className="bg-gray-700 hover:bg-primary text-white p-3 rounded-full transition-colors duration-300"
                  whileHover={{ 
                    scale: 1.1, 
                    rotate: 5,
                    backgroundColor: "#FF5A5F" 
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div
            className="md:col-span-2 md:col-start-6"
            variants={itemVariants}
          >
            <h3 className="text-lg font-medium text-white mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'All Recipes', path: '/recipes' },
                { name: 'About', path: '/about' },
                { name: 'Contact', path: '/contact' },
              ].map((link) => (
                <motion.li key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link 
                    href={link.path} 
                    className="text-gray-300 hover:text-primary transition-colors duration-300 inline-flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Recipe Categories */}
          <motion.div
            className="md:col-span-2"
            variants={itemVariants}
          >
            <h3 className="text-lg font-medium text-white mb-6">Recipe Filters</h3>
            <ul className="space-y-4">
              {[
                { name: 'Main Courses', path: '/recipes?category=Main Course' },
                { name: 'Side Dishes', path: '/recipes?category=Side Dish' },
                { name: 'Desserts', path: '/recipes?category=Dessert' },
                { name: 'Bavarian', path: '/recipes?region=Bavarian' },
                { name: 'Festive Food', path: '/recipes?tag=festive' },
              ].map((category) => (
                <motion.li key={category.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <Link 
                    href={category.path} 
                    className="text-gray-300 hover:text-primary transition-colors duration-300 inline-flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {category.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Newsletter */}
          <motion.div
            className="md:col-span-4"
            variants={itemVariants}
          >
            <h3 className="text-lg font-medium text-white mb-6">Newsletter</h3>
            <p className="mb-6 text-gray-300">
              Subscribe to get exclusive recipes, cooking tips, and updates delivered directly to your inbox.
            </p>
            <form className="space-y-4">
              <div>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300"
                  required
                />
              </div>
              <motion.button 
                type="submit" 
                className="w-full btn btn-primary"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
        
        {/* Divider */}
        <div className="border-t border-gray-700 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            className="text-gray-400 text-sm mb-4 md:mb-0"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            &copy; {currentYear} Das Kochbuch. All rights reserved.
          </motion.p>
          <motion.div 
            className="flex space-x-6 text-sm text-gray-400"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.9 }}
          >
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 