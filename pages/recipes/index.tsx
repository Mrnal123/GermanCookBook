import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { allRecipes } from '../../data/recipes'

// Categories for filter
const categories = ['All', 'Main Course', 'Side Dish', 'Dessert', 'Snack'];
const regions = ['All', 'Bavarian', 'Swabian', 'Baden-Württemberg', 'Rhineland', 'Franconian'];
const difficulties = ['All', 'Easy', 'Medium', 'Hard'];

const RecipesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [region, setRegion] = useState('All');
  const [difficulty, setDifficulty] = useState('All');
  const [filteredRecipes, setFilteredRecipes] = useState(allRecipes);
  const [isFiltering, setIsFiltering] = useState(false);
  
  useEffect(() => {
    setIsFiltering(true);
    
    const filtered = allRecipes.filter(recipe => {
      const matchesSearch = recipe.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                           recipe.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = category === 'All' || recipe.category === category;
      const matchesRegion = region === 'All' || recipe.region === region;
      const matchesDifficulty = difficulty === 'All' || recipe.difficulty === difficulty;
      
      return matchesSearch && matchesCategory && matchesRegion && matchesDifficulty;
    });
    
    // Simulate a slight delay to show the animation
    setTimeout(() => {
      setFilteredRecipes(filtered);
      setIsFiltering(false);
    }, 300);
  }, [searchTerm, category, region, difficulty]);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      } 
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };
  
  const handleReset = () => {
    setSearchTerm('');
    setCategory('All');
    setRegion('All');
    setDifficulty('All');
  };
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl font-bold mb-4">German Recipes</h1>
        <p className="text-lg max-w-3xl mx-auto">
          Explore our collection of authentic German recipes from different regions. 
          Filter by category, region, and difficulty to find your perfect dish.
        </p>
      </motion.div>
      
      {/* Search and Filter Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-white rounded-lg shadow-md p-6 mb-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2">
            <label className="block text-sm font-medium text-gray-700 mb-1">Search</label>
            <input 
              type="text" 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search recipes..." 
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-german-red"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-german-red"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Region</label>
            <select 
              value={region}
              onChange={(e) => setRegion(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-german-red"
            >
              {regions.map((reg) => (
                <option key={reg} value={reg}>{reg}</option>
              ))}
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Difficulty</label>
            <select 
              value={difficulty}
              onChange={(e) => setDifficulty(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-german-red"
            >
              {difficulties.map((diff) => (
                <option key={diff} value={diff}>{diff}</option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReset}
            className="px-4 py-2 text-gray-600 hover:text-german-red"
          >
            Reset Filters
          </motion.button>
        </div>
      </motion.div>
      
      {/* Results Count */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-6 flex justify-between items-center"
      >
        <p className="text-gray-600">
          Showing <span className="font-medium">{filteredRecipes.length}</span> recipes
        </p>
        <div className="flex items-center">
          <span className="text-gray-600 mr-2">Sort by:</span>
          <select className="px-2 py-1 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-german-red">
            <option>Popularity</option>
            <option>Newest</option>
            <option>Easiest</option>
            <option>A-Z</option>
          </select>
        </div>
      </motion.div>
      
      {/* Recipes Grid */}
      {isFiltering ? (
        <div className="flex justify-center items-center py-20">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-german-red"></div>
        </div>
      ) : (
        filteredRecipes.length > 0 ? (
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filteredRecipes.map((recipe) => (
              <motion.div 
                key={recipe.id}
                className="recipe-card"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <Link href={`/recipes/${recipe.id}`} className="block">
                  <div className="relative h-60 mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={recipe.image} 
                      alt={recipe.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-0 right-0 bg-german-gold text-black py-1 px-3 rounded-bl-lg">
                      {recipe.category}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{recipe.title}</h3>
                  <p className="text-gray-600 mb-3">{recipe.description}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <span className="text-sm bg-gray-100 rounded-full px-3 py-1 mr-2">{recipe.region}</span>
                      <span className="text-sm bg-gray-100 rounded-full px-3 py-1">{recipe.difficulty}</span>
                    </div>
                    <span className="text-sm">{recipe.time}</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-center py-16"
          >
            <h3 className="text-xl font-medium mb-2">No recipes found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your filters or search term.</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleReset}
              className="btn btn-primary"
            >
              Reset All Filters
            </motion.button>
          </motion.div>
        )
      )}
    </div>
  );
};

export default RecipesPage; 