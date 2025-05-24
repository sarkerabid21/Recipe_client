import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
// import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [topRecipes, setTopRecipes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:5000/top-recipes')
            .then(res => res.json())
            .then(data => setTopRecipes(data));
    }, []);

    return (
        <div>
            <div>
                <img src="https://i.ibb.co/606FCnHZ/banner1z.jpg" alt="" />
            </div>
            <div className='absolute top-70 space-y-8 p-10'>
                <p className='text-4xl max-w-4xl font-bold'>
                    It's our pleasure to have you here, exploring delicious recipes with us. Your visit is a true delight — let's dive into a world of flavor, together!
                </p>
                <button
                    onClick={() => navigate('/allRecipes')}
                    className='text-2xl font-bold bg-amber-200 p-3 rounded-2xl'
                >
                    Let's Go....
                </button>
            </div>

            {/* 👇👇 Top Recipes Section */}
            <div className="my-20 px-6">
                <h2 className="text-3xl font-bold mb-6">Top Liked Recipes</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {topRecipes.map(recipe => (
                        <div key={recipe._id} className="bg-amber-100 rounded-xl shadow p-4">
                            <img
                                src={recipe.image || 'https://via.placeholder.com/300'}
                                alt={recipe.title}
                                className="h-48 w-full object-cover rounded"
                            />
                            <h3 className="text-xl font-semibold mt-3">{recipe.title}</h3>
                            <p className="text-gray-600">Cuisine: {recipe.cuisine}</p>
                            <p className="text-gray-500">Likes: {recipe.likes || 0}</p>
                         <button
  onClick={() => navigate(`/allRecipes/${recipe._id}`)} // ✅ Correct path
  className="mt-3 btn btn-primary"
>
  View Details
</button>

 

                        </div>
                    ))}
                </div>
                <div className="text-center mt-8">
                    <button
                        onClick={() => navigate('/allRecipes')}
                        className="btn btn-secondary"
                    >
                        See All Recipes
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Home;
