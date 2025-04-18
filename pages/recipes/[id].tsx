import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { getRecipeById, Recipe } from '../../data/recipes'

const RecipeDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const [recipe, setRecipe] = useState<Recipe | null>(null);
  const [servings, setServings] = useState(4);
  const [activeTab, setActiveTab] = useState('ingredients');
  
  useEffect(() => {
    if (id) {
      // Handle cases where id might be an array by taking the first element
      const recipeId = Array.isArray(id) ? id[0] : id;
      const foundRecipe = getRecipeById(recipeId);
      
      if (foundRecipe) {
        setRecipe(foundRecipe);
        setServings(foundRecipe.servings || 4);
      } else {
        // Handle recipe not found
        router.push('/recipes');
      }
    }
  }, [id, router]);
  
  const handleServingChange = (newServings: number) => {
    if (newServings >= 1 && newServings <= 12) {
      setServings(newServings);
    }
  };
  
  if (!recipe || router.isFallback) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumb Navigation */}
      <nav className="mb-8">
        <ol className="flex text-gray-500 text-sm">
          <li className="hover:text-german-red">
            <Link href="/">Home</Link>
          </li>
          <li className="mx-2">/</li>
          <li className="hover:text-german-red">
            <Link href="/recipes">Recipes</Link>
          </li>
          <li className="mx-2">/</li>
          <li className="text-cookbook-brown">{recipe.title}</li>
        </ol>
      </nav>
      
      {/* Recipe Header */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl font-bold">{recipe.title}</h1>
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-german-gold text-black">
              {recipe.category}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100">
              {recipe.region}
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100">
              {recipe.difficulty}
            </span>
          </div>
          <p className="text-lg">{recipe.description}</p>
          
          <div className="flex space-x-8 text-sm">
            <div className="text-center">
              <div className="text-gray-500">Prep Time</div>
              <div className="font-medium">{recipe.prepTime || '-'}</div>
            </div>
            <div className="text-center">
              <div className="text-gray-500">Cook Time</div>
              <div className="font-medium">{recipe.cookTime || '-'}</div>
            </div>
            <div className="text-center">
              <div className="text-gray-500">Calories</div>
              <div className="font-medium">{recipe.calories ? `${recipe.calories} kcal` : '-'}</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <label className="text-gray-500">Servings:</label>
            <div className="flex items-center">
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                onClick={() => handleServingChange(servings - 1)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
              >
                -
              </motion.button>
              <span className="mx-3 font-medium">{servings}</span>
              <motion.button 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
                onClick={() => handleServingChange(servings + 1)}
                className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200"
              >
                +
              </motion.button>
            </div>
          </div>
          
          <div className="flex space-x-4 pt-4">
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              Print Recipe
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              whileTap={{ scale: 0.95 }}
              className="btn btn-secondary"
            >
              Save Recipe
            </motion.button>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="rounded-lg overflow-hidden shadow-xl h-96 lg:h-auto"
        >
          <motion.img 
            src={recipe.image} 
            alt={recipe.title} 
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5 }}
          />
        </motion.div>
      </div>
      
      {/* Recipe Content */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <div className="flex border-b mb-8">
          <button 
            className={`px-6 py-3 font-medium ${activeTab === 'ingredients' ? 'text-german-red border-b-2 border-german-red' : 'text-gray-500 hover:text-german-red'}`}
            onClick={() => setActiveTab('ingredients')}
          >
            Ingredients
          </button>
          <button 
            className={`px-6 py-3 font-medium ${activeTab === 'instructions' ? 'text-german-red border-b-2 border-german-red' : 'text-gray-500 hover:text-german-red'}`}
            onClick={() => setActiveTab('instructions')}
          >
            Instructions
          </button>
          <button 
            className={`px-6 py-3 font-medium ${activeTab === 'tips' ? 'text-german-red border-b-2 border-german-red' : 'text-gray-500 hover:text-german-red'}`}
            onClick={() => setActiveTab('tips')}
          >
            Tips
          </button>
        </div>
        
        {activeTab === 'ingredients' && recipe.ingredients && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
            <ul className="ingredient-list">
              {recipe.ingredients.map((ingredient, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="py-2 border-b border-gray-100 last:border-0"
                >
                  {ingredient}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
        
        {activeTab === 'instructions' && recipe.instructions && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Instructions</h2>
            <ol className="instruction-list">
              {recipe.instructions.map((instruction, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="py-3 border-b border-gray-100 last:border-0"
                >
                  {instruction}
                </motion.li>
              ))}
            </ol>
          </motion.div>
        )}
        
        {activeTab === 'tips' && recipe.tips && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-bold mb-4">Chef's Tips</h2>
            <ul className="space-y-4">
              {recipe.tips.map((tip, index) => (
                <motion.li 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <span className="text-german-gold mr-2">•</span>
                  <span>{tip}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
      
      {/* Related Recipes */}
      {recipe.relatedRecipes && (
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-6">You Might Also Like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {recipe.relatedRecipes.map((related, index) => (
              <motion.div 
                key={related.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <Link href={`/recipes/${related.id}`} className="block">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={related.image} 
                      alt={related.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-medium">{related.title}</h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeDetail; 