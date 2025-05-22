import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './contexts/AuthContext';
import RecipeCard from './RecipeCard';

const MyRecipes = () => {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (!user?.email) return;
    fetch(`http://localhost:5000/recipes?userEmail=${user.email}`)
      .then(r => r.json())
      .then(data => setRecipes(data));
  }, [user]);

  return (
    <div className='bg-amber-200 max-h-full px-8 py-20  '>
      <h2 className="text-3xl text-center font-bold mb-4">My Recipes</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {recipes.map(r => <RecipeCard key={r._id} recipe={r} />)}
      </div>
    </div>
  );
};

export default MyRecipes;
