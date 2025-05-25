import React from 'react';

import RecipeDetails from './RecipeDetails';
import { useLoaderData } from 'react-router';

const RecipeDetailsPage = () => {
  const recipe = useLoaderData(); 
  return <RecipeDetails recipe={recipe} />;
};

export default RecipeDetailsPage;
