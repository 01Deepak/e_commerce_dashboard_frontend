import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import About from '../pages/about/About'
import Services from '../pages/services/Services'
import Contact from '../pages/contact/Contact'
import Register from '../pages/authentication/register/Register'

const MainRoute = () => {
  return (
    <Routes>
    <Route path="/" element={<Home />}/>
    <Route path="/home" element={<Home />}/>
    <Route path="/about" element={<About />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/services" element={<Services />}/>
    <Route path="/register" element={<Register />}/>

    </Routes>
    
  )
}

export default MainRoute