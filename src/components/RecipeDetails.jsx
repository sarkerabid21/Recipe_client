import React, { useState } from 'react';
import { useLoaderData, useParams, NavLink } from 'react-router';

const RecipeDetails = () => {
  const allRecipes = useLoaderData(); // all recipes loaded from parent route
  const { _id } = useParams();

  const recipe = allRecipes.find(r => r._id === _id);
  if (!recipe) return <p>Recipe not found</p>;

  const [likeCount, setLikeCount] = useState(recipe.likes || 0);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) return; // prevent multiple likes from same user
    setLikeCount(prev => prev + 1);
    setIsLiked(true);

    fetch(`http://localhost:5000/recipes/${recipe._id}/like`, {
      method: 'PATCH',
    }).catch(() => {
      setLikeCount(prev => prev - 1);
      setIsLiked(false);
    });
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center">{likeCount} people liked this recipe</h2>
      <div className="bg-yellow-100 p-4 rounded-lg space-y-2">
        <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-md" />
        <h1 className="text-xl font-bold">{recipe.title}</h1>
        <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
        <p><strong>Categories:</strong> {recipe.categories}</p>
        <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
        <p><strong>Instructions:</strong> {recipe.instructions}</p>

        <div className="flex justify-between items-center pt-2">
          <button onClick={handleLike} className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
            {isLiked ? "Liked" : "Like"}
          </button>
          <NavLink to="/allRecipes" className="text-blue-600 underline">Back</NavLink>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
