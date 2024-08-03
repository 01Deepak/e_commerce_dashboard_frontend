import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Services from '../pages/services/Services'
import Contact from '../pages/contact/Contact'
import Register from '../pages/authentication/register/Register'
import Login from '../pages/authentication/login/Login'
import PrivateRoute from '../PrivateRoute'
import AddProduct from '../pages/product/add-product/AddProduct'
import Products from '../pages/product/show-products/Products'

const MainRoute = () => {
  return (
    <Routes>
      
    <Route element={<PrivateRoute/>}>
    <Route path="/" element={<Products />}/>
    <Route path="/products" element={<Products />}/>
    <Route path="/add-product" element={<AddProduct />}/>
    <Route path="/contact" element={<Contact />}/>
    <Route path="/services" element={<Services />}/>
    </Route>
     
    <Route path="/register" element={<Register />}/>
    <Route path="/login" element={<Login />}/>
    </Routes>
    
  )
}

export default MainRoute