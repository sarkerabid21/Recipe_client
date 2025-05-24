import React, { useState, useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';
import Swal from 'sweetalert2';
import { Link } from 'react-router';

const RecipeDetails = ({ recipe }) => {
    const {_id} = recipe;
  const { user } = useContext(AuthContext);
  const [likeCount, setLikeCount] = useState(recipe.likes || 0);
  const [isLiked, setIsLiked] = useState(recipe.likedBy?.includes(user?.email));

 const handleDelete = (id) => {
  console.log(id)
  Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
    console.log(result.isConfirmed)
  if (result.isConfirmed) {

    fetch(`http://localhost:5000/recipes/${_id}`,{
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(data =>{
        if(data.deletedCount){
 Swal.fire({
      title: "Deleted!",
      text: "Your recipe has been deleted.",
      icon: "success"
    });
        }
    })
    
   
  }
});
    }
  

  const handleLike = () => {
    if (isLiked || !user) return;

    fetch(`http://localhost:5000/recipes/${recipe._id}/like`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userEmail: user.email }),
    })
      .then(res => res.json())
      .then(() => {
        setLikeCount(prev => prev + 1);
        setIsLiked(true);
      })
      .catch(() => {
        console.log('Failed to like');
      });
  };

  return (
    <div className="max-w-3xl mx-auto bg-yellow-100 p-6 mb-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-2">{likeCount} people liked this recipe</h2>
      <img src={recipe.image} alt={recipe.title} className="w-full h-64 object-cover rounded-md mb-4" />
      <h1 className="text-xl font-bold">{recipe.title}</h1>
      <p><strong>Cuisine:</strong> {recipe.cuisine}</p>
      <p><strong>Categories:</strong> {recipe.categories}</p>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Instructions:</strong> {recipe.instructions}</p>
      <div className="flex justify-between pt-2">
        <button
          onClick={handleLike}
          className={`px-4 py-2 rounded ${isLiked ? "bg-gray-400" : "bg-blue-500 text-white hover:bg-blue-600"}`}
        >
          {isLiked ? "Liked" : "Like"}
        </button>
       <Link to={`/updateRecipe/${_id}`}>
  <button className='btn bg-cyan-900 text-amber-200'>Update</button>
</Link>

        <button onClick={() => handleDelete(_id)} className='bg-red-500 text-amber-50 p-1'>
          Delete
        </button>
      </div>
    </div>
  );
};

export default RecipeDetails;
