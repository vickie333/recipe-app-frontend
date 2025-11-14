import {Route,  createBrowserRouter, createRoutesFromElements } from "react-router-dom"
import RootLayout from "../../layout/RootLayout"
import Home from "../../pages/Home"
import About from "../../pages/About"
import Profile from "../../pages/Profile"
import RecipeDetails from "../../pages/RecipeDetails"
import Recipes from "../../pages/Recipes"
import Login from "../../pages/Login"
import Register from "../../pages/Register"

export const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout/>}>
        <Route index element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/recipe/details" element={<RecipeDetails/>} />
        <Route path="/recipes" element={<Recipes/>} />
        <Route path="user/login" element={<Login/>} />
        <Route path="user/create" element={<Register/>} />
      </Route>
    )
  )