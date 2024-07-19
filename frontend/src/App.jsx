import React, { useState } from 'react'
import { Navbar,LoginPopup, Footer } from './componets'
import { Cart, Home, Menu, Orders, PlaceOrder } from './pages'
import { Routes,Route } from 'react-router-dom'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const [logOpen, setLogOpen] = useState(false);
  return (
    <div className='app'>
      <ToastContainer/>
      <Navbar logOpen={logOpen} setLogOpen={setLogOpen}/>
      <Routes>
        <Route path='/' exact element={<Home/>}/>
        <Route path='/cart'  element={<Cart/>}/>
        <Route path='/placeOrder' element={<PlaceOrder/>} /> 
        <Route path='/menu' element={<Menu/>} />
        <Route path='/orders' element={<Orders/>} />
      </Routes>

      <Footer/>
      {logOpen && 

          <LoginPopup  logOpen={logOpen} setLogOpen={setLogOpen} />
        
      }

    </div>
  )
}

export default App
