import React, {  useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { toast } from 'react-toastify';
import { AuthContext } from './contexts/AuthContext';

const Header = () => {
  const userIcon = "https://i.ibb.co.com/mCtVwWf7/user.png";
 const { user, logOutUser } = useContext(AuthContext);

 

  const handleLogOut = () => {
    toast("You logged out successfully.");
    logOutUser()
      .then(() => {
        // logout successful
      })
      .catch((error) => {
        console.log(error);
      });
  };

    return (
       <div className="lg:w-full navbar bg-base-100 shadow-sm  px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
  <NavLink className="" to="/">Home</NavLink>
                <NavLink className=""  to="/addCoffee">Add Recipe</NavLink>
                <NavLink className=""  to="/allRecipes">All Recipes</NavLink>
                <NavLink className=""  to="/myRecipes">My Recipes</NavLink>
      </ul>
    </div>
    <div className='flex  '>
    <img className='w-[40%]' src='https://i.ibb.co/WWkdB1Rx/Screenshot-2025-05-20-012215.png' alt=""/>
    {/* <img className='lg:w-[20%] w-[80%]' src={logo} alt=""/> */}
    </div>
  </div>
  <div className="lg:block hidden lg:gap-10 text-center items-center lg:flex lg:justify-between  text-gray-600 ">
                <NavLink className="" to="/">Home</NavLink>
                <NavLink className=""  to="/addRecipe">Add Recipe</NavLink>
                <NavLink className=""  to="/allRecipes">All Recipes</NavLink>
                <NavLink className=""  to="/myRecipes">My Recipes</NavLink>
                
                
            </div>
  <div className="navbar-end gap-4 ">

  

 
<details className="dropdown">
  <summary className="btn p-0 w-10 h-10 min-h-0 rounded-full border-0 overflow-hidden">
    <img className="w-full h-full object-cover" src={`${user ? user.photo : userIcon}`} alt="User" />
  </summary> 
  <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-64 p-2 shadow-sm mt-2">
    <li>
      <a className="block w-full  text-sm">
        {user && user.displayName }
      </a>
    </li>
    <li>
      <a className="block w-full  text-sm">
        {user && user.email }
      </a>
    </li>
    
    <li> <Link onClick={handleLogOut}  className="">LogOut</Link></li>

  </ul>
</details>
   
    {!user && (
  <>
    <Link to="login" className="btn btn-primary text-xs w-[30%]">Login</Link>
    <Link to="register" className="btn btn-secondary text-xs w-[30%]">Register</Link>
  </>
)}

    
  </div>
</div>
    );
};

export default Header;