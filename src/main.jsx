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
import AuthProvider from './components/contexts/AuthProvider.jsx';
import RecipeDetailsPage from './components/RecipeDetailsPage.jsx';
import PrivateRoute from './components/PrivateRoute.jsx';
import UpdateRecipe from './components/UpdateRecipe.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
 
      index:true,
      loader: () => fetch('https://food-recipe-server-coral.vercel.app/recipes'),
      Component: Home
    },
    {
      path:'addRecipe',
      Component: AddRecipe,
    },
    {
      path:'allRecipes',
      loader: async () => {
  const res = await fetch('https://food-recipe-server-coral.vercel.app/recipes');
  return res.json();
},

      element: (
    <PrivateRoute>
      <AllRecipes />
    </PrivateRoute>
  )
    },
    {
      path:'myRecipes',
      loader: () => fetch('https://food-recipe-server-coral.vercel.app/recipes'),
      element: (
    <PrivateRoute>
      <MyRecipes/>
    </PrivateRoute>
  )
    },
    {
  path: "/updateRecipe/:id",
  element: (
    <PrivateRoute>
      <UpdateRecipe />
    </PrivateRoute>
  ),
  loader: async ({ params }) => {
    const res = await fetch(`https://food-recipe-server-coral.vercel.app/recipes/${params.id}`);
    return res.json();
  }
}
    ,
   {
  path: "/allRecipes/:id",
  element: (
    <PrivateRoute>
      <RecipeDetailsPage />
    </PrivateRoute>
  ),
  loader: async ({ params }) => {
    const res = await fetch(`https://food-recipe-server-coral.vercel.app/recipes/${params.id}`);
    return res.json();
  }
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
  <AuthProvider>
     <RouterProvider router={router} />
  </AuthProvider>
  </StrictMode>,
)
