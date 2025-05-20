import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './layouts/MainLayout.jsx';
import Home from './components/Home.jsx';
import AddRecipe from './components/AddRecipe.jsx';
import AllRecipes from './components/AllRecipes.jsx';
import MyRecipes from './components/MyRecipes.jsx';
import RecipeDetails from './components/RecipeDetails.jsx';
import Error from './components/Error.jsx';
import LogIn from './components/LogIn.jsx';
import Register from './components/Register.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
 
      index:true,
      loader: () => fetch('http://localhost:5000/recipes'),
      Component: Home
    },
    {
      path:'addRecipe',
      Component: AddRecipe,
    },
    {
      path:'allRecipes',
      loader: () => fetch('http://localhost:5000/recipes'),
      Component: AllRecipes
    },
    {
      path:'myRecipes',
      loader: () => fetch('http://localhost:5000/recipes'),
      Component: MyRecipes,
    },
    {
  path: 'allRecipes/:_id',
  loader: () => fetch('http://localhost:5000/recipes'),
  Component: RecipeDetails,
}
,
    {

      path: 'login',
      Component: LogIn

},
{
  path:'register',
  Component: Register
}

     
    ]
  },
  {
            path:"/*",
           Component: Error
        },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
