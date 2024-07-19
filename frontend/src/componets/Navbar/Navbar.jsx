import React, { useContext, useState } from 'react'
import './navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';
import {FaBars} from 'react-icons/fa'

const Navbar = ({logOpen, setLogOpen}) => {

  const [menu,setMenu] = useState("home");
  const changeMenu = (menuItem) =>() => setMenu(menuItem);

  const [barsOpen, setBarsOpen] = useState(false);

  const {token,setToken, fetchOrderData} = useContext(StoreContext);
  const [profileOpen,setProfileOpen] = useState(false);

  return (
    <nav className='navbar'>
      <Link to='/' className='navbar-logo_container' ><img  src={assets.logo} alt="Tomato" className='logo' /></Link>
      <ul className="navbar-menu">
        <Link to="/"><li className={menu==="home"?"active":""} onClick={changeMenu("home")}>Home</li> </Link>
        <Link to="/menu"  className={menu==="menu"?"active":"" } onClick={changeMenu("menu")}>Menu</Link>
        <a><li className={menu==="mobile"?"active":""} onClick={changeMenu("mobile")}>Mobile App</li></a>
        <a><li className={menu==="contact"?"active":""} onClick={changeMenu("contact")}>Contact Us</li></a>
      </ul>

      <div className="navbar-right">
        <div className="navbar-search-icon">
          <Link to='/cart'><img src={assets.basket_icon} alt="" width="22px" height="22px"/></Link>
          <div className='dot'></div>
        </div>
        {token? 
          <div className='navbar-profile_container'>
            <img className='navbar-profile_icon'  onClick={()=>{setProfileOpen(!profileOpen)}} src={assets.profile_icon} alt="profile_icon" />
            {profileOpen &&
              <ul className='navbar-profile_options'>
                <li onClick={fetchOrderData} ><Link to='/orders'><img src={assets.bag_icon} alt="bag_icon" /><p>Orders</p></Link></li>
                <hr />
                <li><img src={assets.logout_icon} alt="logout_icon" /><p>Logout</p></li>
              </ul>
            }
          </div>:
          <button onClick={()=> setLogOpen(true)}>sign in</button>
        }
        <FaBars className='navbar-bars' onClick={()=>setBarsOpen(!barsOpen)} />
        {barsOpen && 
          <div className='navbar-profile_options navbar-bars_options'>
            <Link to='/menu' className={menu==="menu"?"active":"" } onClick={changeMenu("menu")}>Menu</Link>
            <a className={menu==="mobile"?"active":""} onClick={changeMenu("mobile")}>Mobile App</a>
            <a className={menu==="contact"?"active":""} onClick={changeMenu("contact")}>Contact Us</a>
          </div>
        }
      </div>
    </nav>
  )
}

export default Navbar;
