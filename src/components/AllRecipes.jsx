import React from 'react';
import { useLoaderData } from 'react-router';
import RecipeCard from './RecipeCard';

const AllRecipes = () => {
    const recipes = useLoaderData();
    console.log(recipes)
    return (
        <div className='bg-amber-200 max-h-full px-8 py-20  '>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 '>
                {
                    recipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>)
                }
            </div>
        </div>
    );
};

export default AllRecipes;