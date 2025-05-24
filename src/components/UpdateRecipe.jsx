import React, { useContext } from 'react';
// import { useLoaderData, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from './contexts/AuthContext';
import { useLoaderData, useNavigate } from 'react-router';

const UpdateRecipe = () => {
    const recipe = useLoaderData();
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updatedRecipe = Object.fromEntries(formData.entries());

        updatedRecipe.userEmail = user?.email;

        // Handle checkboxes
        const categories = [];
        form.querySelectorAll('input[name="categories"]:checked').forEach(checkbox => {
            categories.push(checkbox.value);
        });
        updatedRecipe.categories = categories;

        fetch(`http://localhost:5000/recipes/${recipe._id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updatedRecipe)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Recipe updated successfully!',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    });
                    navigate('/myRecipes');
                }
            });
    };

    return (
        <div className='p-20'>
            <div className='text-center px-26 py-8 mx-auto bg-blue-100 rounded-2xl'>
                <h1 className='text-5xl font-bold text-blue-700'>Update Recipe</h1>
                <form onSubmit={handleUpdate}>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-0'>
                        <fieldset className="p-4">
                            <label className="label">Image</label>
                            <input type="text" name='image' defaultValue={recipe.image} className="input w-full" />
                        </fieldset>
                        <fieldset className="p-4">
                            <label className="label">Title</label>
                            <input type="text" name='title' defaultValue={recipe.title} className="input w-full" />
                        </fieldset>
                        <fieldset className="p-4">
                            <label className="label">Ingredients</label>
                            <input type="text" name='ingredients' defaultValue={recipe.ingredients} className="input w-full" />
                        </fieldset>
                        <fieldset className="p-4">
                            <label className="label">Instructions</label>
                            <input type="text" name='instructions' defaultValue={recipe.instructions} className="input w-full" />
                        </fieldset>
                        <fieldset className="p-4">
                            <label className="label">Cuisine</label>
                            <select name="cuisine" className="select select-bordered w-full" defaultValue={recipe.cuisine}>
                                <option>Italian</option>
                                <option>Mexican</option>
                                <option>Indian</option>
                                <option>Chinese</option>
                                <option>Others</option>
                            </select>
                        </fieldset>
                        <fieldset className="p-4">
                            <label className="label">Preparation Time (min)</label>
                            <input type="number" name='preparation_time' defaultValue={recipe.preparation_time} className="input w-full" />
                        </fieldset>
                        <fieldset className="p-4 col-span-2">
                            <label className="label">Categories</label>
                            <div className="grid grid-cols-2 gap-2 mt-2">
                                {['Breakfast', 'Lunch', 'Dinner', 'Dessert', 'Vegan'].map(cat => (
                                    <label key={cat} className="flex items-center gap-2">
                                        <input
                                            type="checkbox"
                                            name="categories"
                                            value={cat}
                                            defaultChecked={recipe.categories?.includes(cat)}
                                            className="checkbox checkbox-sm"
                                        />
                                        <span>{cat}</span>
                                    </label>
                                ))}
                            </div>
                        </fieldset>
                    </div>
                    <input className="btn btn-primary w-full mt-4" type="submit" value="Update Recipe" />
                </form>
            </div>
        </div>
    );
};

export default UpdateRecipe;
