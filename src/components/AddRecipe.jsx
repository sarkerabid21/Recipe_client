import React from 'react';

const AddRecipe = () => {

    const handleAddRecipe = e =>{
        e.preventDefault();
        const form = e.target;
         const formData = new FormData(form);
         const newRecipe= Object.fromEntries(formData.entries())
        console.log(newRecipe);

        // swnd recipe db
        fetch('http://localhost:5000/recipes',{
            method: 'POST',
             headers: {
                'content-type': 'application/json'
            },
             body: JSON.stringify(newRecipe)
        })
        .then(res => res.json())
        .then(data=>{
           if (data.insertedId){
            console.log('added successfully',)
           }
        })


    }


    return (
        <div className='p-20 '>
            <div className='text-center px-26 py-8 mx-auto bg-amber-200 rounded-2xl'>
                <h1 className='text-6xl text-amber-800 font-extrabold'>
                Add a New Recipe.
            </h1>
            <p className='my-4'>
                Welcome to your personal recipe corner! Here, you can share your favorite dishes with the world by adding new recipes to our collection. Just fill out the form below with all the delicious details – from ingredients to instructions – and let others discover your unique flavors. Whether it’s a secret family recipe or a quick student meal, every recipe has a story, and yours deserves to be shared.
            </p>
            <form onSubmit={handleAddRecipe} >

                <div className='grid grid-cols-1 md:grid-cols-2 gap-0'>
                    <fieldset className="fieldset   rounded-box   p-4">
  
  <label className="label">Image</label>
  <input type="text" name='image' className="input w-full" placeholder="Image URL" />
</fieldset>
                    <fieldset className="fieldset   rounded-box   p-4">
  
  <label className="label">Title</label>
  <input type="text" name='title' className="input w-full" placeholder="Title" />
</fieldset>
                    <fieldset className="fieldset  p-4">
  
  <label className="label ">Ingredients</label>
  <input type="text" name='ingredients' className="input w-full" placeholder="Ingredients" />
</fieldset>
                    <fieldset className="fieldset  p-4">
  
  <label className="label ">Instructions</label>
  <input type="text" name='instructions' className="input w-full" placeholder="Instructions" />
</fieldset>
                   <fieldset className="fieldset p-4">
  <label className="label">
    <span className="label-text">Cuisine Type</span>
  </label>
  <select name="cuisine" className="select select-bordered w-full">
    <option disabled selected >Select a cuisine</option>
    <option>Italian</option>
    <option>Mexican</option>
    <option>Indian</option>
    <option>Chinese</option>
    <option>Others</option>
  </select>
</fieldset>

                    <fieldset className="fieldset  p-4">
  
  <label className="label">Preparation Time</label>
  <input type="number" name='preparation_time' className="input w-full" placeholder="Preparation Time" />
</fieldset>
                  <fieldset className="fieldset p-4">
  <label className="label">
    <span className="label-text">Categories</span>
  </label>
  <div className="grid grid-cols-2 gap-2 mt-2">
    <label className="flex items-center gap-2">
      <input type="checkbox" name="categories" value="Breakfast" className="checkbox checkbox-sm" />
      <span>Breakfast</span>
    </label>
    <label className="flex items-center gap-2">
      <input type="checkbox" name="categories" value="Lunch" className="checkbox checkbox-sm" />
      <span>Lunch</span>
    </label>
    <label className="flex items-center gap-2">
      <input type="checkbox" name="categories" value="Dinner" className="checkbox checkbox-sm" />
      <span>Dinner</span>
    </label>
    <label className="flex items-center gap-2">
      <input type="checkbox" name="categories" value="Dessert" className="checkbox checkbox-sm" />
      <span>Dessert</span>
    </label>
    <label className="flex items-center gap-2">
      <input type="checkbox" name="categories" value="Vegan" className="checkbox checkbox-sm" />
      <span>Vegan</span>
    </label>
  </div>
</fieldset>

                    
                   
                </div>
                 
<input className="btn btn-secondary  w-full" type="submit" value="Add Coffee"/>
            </form>
            </div>
             
        </div>
    );
};

export default AddRecipe;