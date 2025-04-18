import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Link from 'next/link'
import Image from 'next/legacy/image'
import Head from 'next/head'

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: "easeOut" 
    }
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const featureVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

// Sample recipe data
const featuredRecipes = [
  {
    id: 1,
    name: 'Käsespätzle',
    image: '/images/käsespätzle.jpg',
    description: 'Diese Käsespätzle, auch Käsespätzle genannt, sind eine traditionelle schwäbische hausgemachte Pasta mit Zwiebeln und Emmentaler. Es ist eine deutsche Version von Makkaroni und Käse',
    prepTime: '15 min',
    cookTime: '30 min',
    difficulty: 'Medium'
  },
  {
    id: 3,
    name: 'Brezeln',
    image: '/images/brezeln.png',
    description: 'Brezeln sind eine beliebte Backware, die in Deutschland und vielen anderen Ländern als Snack oder als Beilage zu verschiedenen Gerichten serviert wird.',
    prepTime: '90 min',
    cookTime: '15 min',
    difficulty: 'Medium'
  },
  {
    id: 5,
    name: 'Bratwurst',
    image: '/images/bratwurst.jpg',
    description: 'Bratwurst ist eine beliebte deutsche Wurst, die typischerweise aus Schweinefleisch hergestellt und auf dem Grill oder in der Pfanne gebraten wird.',
    prepTime: '30 min',
    cookTime: '45 min',
    difficulty: 'Medium'
  },
];

const cuisineCategories = [
  { id: 'bavarian', name: 'Bavarian', image: '/images/bavaria.webp', count: 1 },
  { id: 'swabian', name: 'Swabian', image: '/images/swabian.jpg', count: 2 },
  { id: 'franconian', name: 'Franconian', image: '/images/franconian.jpg', count: 1 },
  { id: 'baden-württemberg', name: 'Baden-Württemberg', image: '/images/Baden-Wurttemberg.jpg', count: 1 },
];

export default function HomePage() {
  const [heroRef, heroInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [featuredRef, featuredInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [categoriesRef, categoriesInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })
  
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  return (
    <>
      <Head>
        <title>Deutsche Kochbuch - Erleben Sie das Herz Deutschlands mit jedem Bissen</title>
        <meta name="description" content="Entdecken Sie traditionelle deutsche Rezepte mit unserem interaktiven Kochbuch" />
      </Head>

      {/* Hero Section */}
      <section 
        ref={heroRef} 
        className="relative h-[90vh] flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/hero-bg.jpg" 
            alt="German cuisine" 
            layout="fill"
            objectFit="cover"
            className="opacity-90"
            quality={90}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/60 to-dark/30 backdrop-blur-sm" />
        </div>
        
        <motion.div 
          className="container mx-auto px-6 relative z-10 text-center"
          initial="hidden"
          animate={heroInView ? "visible" : "hidden"}
          variants={fadeInUp}
        >
          <motion.h1 
            className="text-5xl md:text-7xl font-display text-white mb-6 leading-tight"
            variants={fadeInUp}
          >
            Authentische Deutsche <span className="text-accent font-bold">Küche</span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto font-serif"
            variants={fadeInUp}
          >
            Entdecken Sie die reichhaltigen Aromen und Traditionen der deutschen Küche mit unserer Sammlung authentischer Rezepte
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <Link href="/recipes" className="btn-primary text-lg px-8 py-4">
              Rezepte Durchsuchen
            </Link>
            <Link href="/about" className="btn-outline-white text-lg px-8 py-4">
              Über Unser Kochbuch
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 1, repeat: Infinity, repeatType: "reverse" }}
        >
          <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </motion.div>
      </section>

      {/* Featured Recipes */}
      <section className="py-20 bg-light">
        <div className="container mx-auto px-6">
          <motion.div 
            ref={featuredRef}
            initial="hidden"
            animate={featuredInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl font-display text-dark mb-6"
              variants={fadeInUp}
            >
              Ausgewählte Rezepte
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-primary mx-auto mb-6"
              variants={fadeInUp}
            />
            <motion.p 
              className="text-lg text-dark/80 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Unsere beliebtesten traditionellen deutschen Rezepte, über Generationen perfektioniert
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={staggerContainer}
            initial="hidden"
            animate={featuredInView ? "visible" : "hidden"}
          >
            {featuredRecipes.map((recipe) => (
              <motion.div 
                key={recipe.id}
                className="recipe-card group"
                variants={featureVariants}
                whileHover={{ y: -10 }}
              >
                <div className="relative h-64 mb-6 overflow-hidden rounded-t-2xl">
                  <Image 
                    src={recipe.image} 
                    alt={recipe.name} 
                    layout="fill"
                    objectFit="cover"
                    className="group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dark/80 to-transparent h-1/2" />
                  <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center">
                    <span className="text-white/90 text-sm">{recipe.prepTime} Zubereitung | {recipe.cookTime} Garzeit</span>
                    <span className={`
                      px-3 py-1 rounded-full text-xs font-medium
                      ${recipe.difficulty === 'Easy' ? 'bg-green-500/80' : 
                        recipe.difficulty === 'Medium' ? 'bg-yellow-500/80' : 'bg-red-500/80'}
                    `}>
                      {recipe.difficulty}
                    </span>
                  </div>
                </div>
                <h3 className="text-xl font-display font-bold text-dark mb-2 group-hover:text-primary transition-colors">
                  {recipe.name}
                </h3>
                <p className="text-dark/70 mb-4 line-clamp-2">
                  {recipe.description}
                </p>
                <Link href={`/recipes/${recipe.id}`} className="inline-flex items-center text-primary font-medium hover:text-primary-dark transition-colors">
                  Rezept Ansehen
                  <svg className="w-4 h-4 ml-2 group-hover:ml-3 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="text-center mt-12"
            variants={fadeInUp}
            initial="hidden"
            animate={featuredInView ? "visible" : "hidden"}
          >
            <Link href="/recipes" className="btn-secondary inline-flex items-center">
              Alle Rezepte Ansehen
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            ref={categoriesRef}
            initial="hidden"
            animate={categoriesInView ? "visible" : "hidden"}
            variants={staggerContainer}
            className="text-center mb-16"
          >
            <motion.h2 
              className="text-4xl font-display text-dark mb-6"
              variants={fadeInUp}
            >
              Regionale Küche
            </motion.h2>
            <motion.div 
              className="w-24 h-1 bg-primary mx-auto mb-6"
              variants={fadeInUp}
            />
            <motion.p 
              className="text-lg text-dark/80 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              Die kulinarische Landschaft Deutschlands ist so vielfältig wie seine Regionen, jede mit einzigartigen Aromen und Traditionen
            </motion.p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            variants={staggerContainer}
            initial="hidden"
            animate={categoriesInView ? "visible" : "hidden"}
          >
            {cuisineCategories.map((category) => (
              <motion.div 
                key={category.id}
                className="glass-bg rounded-2xl overflow-hidden group"
                variants={featureVariants}
                whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)" }}
              >
                <Link href={`/recipes?region=${category.name}`} className="block">
                  <div className="relative h-48 overflow-hidden">
                    <Image 
                      src={category.image} 
                      alt={category.name} 
                      layout="fill"
                      objectFit="cover"
                      className="group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/10 transition-colors" />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-display font-bold text-dark mb-1 group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-dark/60 flex items-center">
                      <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
                        <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
                      </svg>
                      {category.count} Rezepte
                    </p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section 
        ref={ctaRef}
        className="py-24 bg-primary-dark relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-10">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern id="pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M0 20 L40 20 M20 0 L20 40" stroke="white" strokeWidth="1" fill="none" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)" />
          </svg>
        </div>
        
        <motion.div 
          className="container mx-auto px-6 relative z-10"
          initial="hidden"
          animate={ctaInView ? "visible" : "hidden"}
          variants={staggerContainer}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.h2 
              className="text-4xl md:text-5xl font-display text-white mb-6"
              variants={fadeInUp}
            >
              Erhalten Sie Jede Woche Neue Rezepte
            </motion.h2>
            
            <motion.p 
              className="text-lg text-white/80 mb-10 font-serif"
              variants={fadeInUp}
            >
              Abonnieren Sie unseren Newsletter und erhalten Sie frische deutsche Rezepte, Kochtipps und kulinarische Inspiration direkt in Ihren Posteingang
            </motion.p>
            
            <motion.form 
              className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              <input 
                type="email" 
                placeholder="Ihre E-Mail-Adresse" 
                className="flex-grow bg-white/10 backdrop-blur-sm text-white placeholder-white/50 border border-white/20 rounded-full px-6 py-4 focus:outline-none focus:ring-2 focus:ring-white/30"
                required
              />
              <button 
                type="submit" 
                className="btn-accent text-dark font-bold px-8 py-4 rounded-full"
              >
                Abonnieren
              </button>
            </motion.form>
            
            <motion.p 
              className="text-white/60 text-sm mt-4"
              variants={fadeInUp}
            >
              Wir respektieren Ihre Privatsphäre. Abmeldung jederzeit möglich.
            </motion.p>
          </div>
        </motion.div>
      </section>
    </>
  )
} 