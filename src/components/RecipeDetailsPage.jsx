import React from 'react';
// import { useLoaderData } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import { useLoaderData } from 'react-router';

const RecipeDetailsPage = () => {
  const recipe = useLoaderData(); // get the recipe from the loader
  return <RecipeDetails recipe={recipe} />;
};

export default RecipeDetailsPage;
