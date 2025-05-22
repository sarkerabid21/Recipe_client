// AddRecipe.jsx
import React, { useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from './contexts/AuthContext';

const AddRecipe = () => {
    const { user } = useContext(AuthContext);

    const handleAddRecipe = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const newRecipe = Object.fromEntries(formData.entries());

        // ✅ Add logged-in user's email
        newRecipe.userEmail = user?.email;

        fetch('http://localhost:5000/recipes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newRecipe)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Recipe added successfully",
                        icon: "success",
                        draggable: true
                    });
                }
            });
    };

    return (
        <div className='p-20'>
            <div className='text-center px-26 py-8 mx-auto bg-amber-200 rounded-2xl'>
                <h1 className='text-6xl text-amber-800 font-extrabold'>Add a New Recipe.</h1>
                <p className='my-4'>Share your favorite dish with the world!</p>
                <form onSubmit={handleAddRecipe}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-0'>
                        <fieldset className="fieldset p-4">
                            <label className="label">Image</label>
                            <input type="text" name='image' className="input w-full" placeholder="Image URL" />
                        </fieldset>
                        <fieldset className="fieldset p-4">
                            <label className="label">Title</label>
                            <input type="text" name='title' className="input w-full" placeholder="Title" />
                        </fieldset>
                        <fieldset className="fieldset p-4">
                            <label className="label">Ingredients</label>
                            <input type="text" name='ingredients' className="input w-full" placeholder="Ingredients" />
                        </fieldset>
                        <fieldset className="fieldset p-4">
                            <label className="label">Instructions</label>
                            <input type="text" name='instructions' className="input w-full" placeholder="Instructions" />
                        </fieldset>
                        <fieldset className="fieldset p-4">
                            <label className="label">Cuisine Type</label>
                            <select name="cuisine" className="select select-bordered w-full">
                                <option disabled selected>Select a cuisine</option>
                                <option>Italian</option>
                                <option>Mexican</option>
                                <option>Indian</option>
                                <option>Chinese</option>
                                <option>Others</option>
                            </select>
                        </fieldset>
                        <fieldset className="fieldset p-4">
                            <label className="label">Preparation Time(min)</label>
                            <input type="number" name='preparation_time' className="input w-full" placeholder="Preparation Time" />
                        </fieldset>
                        <fieldset className="fieldset p-4 col-span-2">
                            <label className="label">Categories</label>
                            <div className="grid grid-cols-2 gap-2 mt-2">
                                {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan'].map(cat => (
                                    <label key={cat} className="flex items-center gap-2">
                                        <input type="checkbox" name="categories" value={cat} className="checkbox checkbox-sm" />
                                        <span>{cat}</span>
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                    </div>
                    <input className="btn btn-secondary w-full mt-4" type="submit" value="Add Recipe" />
                </form>
            </div>
        </div>
    );
};

export default AddRecipe;
