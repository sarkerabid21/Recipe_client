import React from 'react';
import { NavLink } from 'react-router';

const Home = () => {
    return (
        <div>
            <div>
                 <img src="https://i.ibb.co/606FCnHZ/banner1z.jpg" alt=""/>
            </div>
            <div className='absolute top-70 space-y-8'>
                <p className='text-4xl w-3xl px-15 font-bold'>It's our pleasure to have you here, exploring delicious recipes with us. Your visit is a true delight — let's dive into a world of flavor, together!</p>
                <NavLink to="allRecipes" className='text-2xl  mx-15 font-bold bg-amber-200 p-3 rounded-2xl'>Let's Go....</NavLink>
            </div> 
        </div>
    );
};

export default Home;