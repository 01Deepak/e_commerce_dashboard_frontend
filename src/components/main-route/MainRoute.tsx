import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/about/About'
import Services from '../pages/services/Services'
import Contact from '../pages/contact/Contact'
import Register from '../pages/authentication/register/Register'
import Login from '../pages/authentication/login/Login'
import PrivateRoute from '../PrivateRoute'

const MainRoute = () => {
  return (
    <Routes>
      
    <Route element={<PrivateRoute/>}>
    <Route path="/" element={<Home />}/>
    <Route path="/home" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/services" element={<Services />}/>
    </Route>
     
    <Route path="/register" element={<Register />}/>
    <Route path="/login" element={<Login />}/>
    </Routes>
    
  )
}

export default MainRoute