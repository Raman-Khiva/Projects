import React from 'react'
import { Navbar, SideBar } from './components'
import {Route,Routes} from 'react-router-dom'
import { Add, List, Orders } from './pages'

import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return (
    <main>
      <ToastContainer className='toast'/>
      <Navbar/>
      <hr />
      <div className='app-content'>
        <SideBar/>
        <Routes>
          <Route path='/add' element={<Add/>}/>
          <Route path='/list' element={<List/>}/>
        </Routes>
      </div>
    </main>
  )
}

export default App
