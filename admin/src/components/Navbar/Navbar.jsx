import React from 'react'
import './navbar.css';
import {assets} from "../../assets/assets.js";

const Navbar = () => {
  return (
    <nav>
        <div className="nav-left">
            <img src={assets.logo} alt="logo" />
        </div>
        <div className="nav-right">
            <img src={assets.profile_image} alt="profile" />
        </div>
    </nav>
  )
}

export default Navbar
