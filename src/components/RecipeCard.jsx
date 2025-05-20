import React from 'react';
import { NavLink } from 'react-router';

const RecipeCard = ({recipe}) => {
    const {image} = recipe;
    const {title} = recipe;
    const {cuisine} = recipe;
    const {categories} = recipe;
    return (
        <div className="card bg-base-100  shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={image}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center space-y-2">
    <h2 className="card-title">{title}</h2>
    <div className='flex gap-10'>
        <h1 className='bg-amber-200 p-2 rounded-4xl'>Cuisine: {cuisine}</h1>
    <h2  className='bg-amber-200 p-2 rounded-4xl'>
categories: {
categories
}
</h2>
    </div>
    <div className="card-actions">
      
      <NavLink
  to={`/allRecipes/${recipe._id}`}
  className="btn font-bold hover:font-bold bg-secondary text-amber-50 hover:bg-primary hover:text-amber-950 rounded-2xl"
>
  Details
</NavLink>
    </div>
  </div>
</div>
    );
};

export default RecipeCard;