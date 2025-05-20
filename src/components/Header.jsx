import React from 'react';
import { Link, NavLink } from 'react-router';

const Header = () => {
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

  

 

   
    <Link to="login" className="btn btn-primary text-xs w-[30%] ">Login</Link>
    <Link to="register" className="btn btn-secondary text-xs w-[30%] ">Register</Link>
    
  </div>
</div>
    );
};

export default Header;