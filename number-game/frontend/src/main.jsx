import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, createRoutesFromElements, 
  Route, RouterProvider} from "react-router-dom"
import SignUp from './pages/SignUp.jsx'
import Home from './pages/Home.jsx'
import SignIn from "./pages/SignIn.jsx"
import Game from "./pages/Game.jsx"
import Root from "./routes/root.jsx"
import AboutUs from './pages/AboutUs.jsx'
import User from './pages/User.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root/>}>
      <Route index element={<Home />}/>
      <Route path="signup" element={<SignUp />}/>
      <Route path="login" element={<SignIn/>}/>
      <Route path="game" element={<Game />}/>
      <Route path="signin" element={<SignIn/>}/>
      <Route path="aboutus" element={<AboutUs/>}/>
      <Route path="user" element={<User/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
)
