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

const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children:[
      {
 
      index:true,
      Component: Home
    },
    {
      path:'addRecipe',
      Component: AddRecipe,
    }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router} />
  </StrictMode>,
)
