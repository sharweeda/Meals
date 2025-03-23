import React from 'react'
import{createBrowserRouter, RouterProvider} from "react-router-dom"
import Meals from './components/Meals/Meals'
import Area from './components/Area/Area'
import Layout from './components/Layout/Layout'
import MealDetails from './components/MealDetails/MealDetails'
import NotFound from './components/NotFound/NotFound'
import Ingredients from './components/Ingredients/Ingredients'
import "@fortawesome/fontawesome-free/css/all.min.css"
export default function App() {
  const routes = createBrowserRouter([
    {path:'/' , element: <Layout/> , children:[
      {index: true , element:<Meals/>},
      {path: "area" , element:<Area/>},
      {path: "ingredients" , element:<Ingredients/>},
      {path: "mealdetails/:id" , element:<MealDetails/>},
      {path: "*" , element:<NotFound/>},
      
    ] }
])
  return (
    <>
    <RouterProvider router={routes}/>
    
    
    </>
  )
}
