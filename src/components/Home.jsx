import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import { Typewriter } from 'react-simple-typewriter';
import { Tooltip } from 'react-tooltip';

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
                <img src="https://i.ibb.co/606FCnHZ/banner1z.jpg" alt="Banner" />
            </div>
            <div className='absolute top-70 space-y-8 p-10'>
                <p className='text-4xl max-w-4xl font-bold'>
  <Typewriter
    words={[
      "Welcome to Recipe Book!",
      "Discover mouth-watering recipes.",
      "Cook it. Love it. Share it.",
      "Let's dive into a world of flavor!"
    ]}
    loop={true}
    cursor
    cursorStyle='|'
    typeSpeed={70}
    deleteSpeed={50}
    delaySpeed={1500}
  />
</p>


               <button
  data-tooltip-id="go-btn"
  data-tooltip-content="Explore all recipes now!"
  onClick={() => navigate('/allRecipes')}
  className='cursor-pointer text-2xl font-bold bg-amber-200 p-3 rounded-2xl'
>
  Let's Go....
</button>

<Tooltip id="go-btn" place="top" />

                
            </div>

        
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
                                onClick={() => navigate(`/allRecipes/${recipe._id}`)}
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

            
            <div className="my-20 px-6 bg-orange-50 p-10 rounded-2xl shadow">
                <h2 className="text-3xl font-bold mb-4 text-center">Why Choose Us?</h2>
                <ul className="grid md:grid-cols-3 gap-6 text-lg">
                    <li> Curated and tested recipes</li>
                    <li> Easy-to-follow cooking steps</li>
                    <li> Global cuisines at your fingertips</li>
                    <li> Time-saving meal ideas</li>
                    <li> Loved and rated by foodies</li>
                    <li> Personalized experience with login</li>
                </ul>
            </div>

            
            <div className="my-20 px-6 bg-green-50 p-10 rounded-2xl shadow">
                <h2 className="text-3xl font-bold mb-4 text-center">Cooking Tips & Tricks</h2>
                <div className="space-y-4 text-lg">
                    <p> Always read the entire recipe before starting.</p>
                    <p> Season as you go — don’t wait till the end!</p>
                    <p> Preheat your pan before adding oil or food.</p>
                    <p> Clean as you cook to stay organized.</p>
                    <p> Trust your senses — smell and taste are your best tools!</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
