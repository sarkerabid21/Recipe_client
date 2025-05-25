import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from './contexts/AuthContext';
import RecipeDetails from './RecipeDetails';

const MyRecipes = () => {
  const { user } = useContext(AuthContext);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    if (!user?.email) return;
    fetch(`http://localhost:5000/recipes?userEmail=${user.email}`)
      .then(res => res.json())
      .then(data => setRecipes(data));
  }, [user]);

  return (
    <div className="bg-amber-200 min-h-screen px-8 py-20">
      <h2 className="text-3xl text-center font-bold mb-6">My Recipes</h2>
      <div className="space-y-8">
        {recipes.map(recipe => (
          <RecipeDetails key={recipe._id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default MyRecipes;
