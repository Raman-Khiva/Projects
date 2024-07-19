import React from 'react';
import './sidebar.css';
import {assets} from '../../assets/assets.js'
import {NavLink} from 'react-router-dom'

const SideBar = () => {
  return (
    <div className='sidebar'>
      
      <NavLink to='/add' className="sidebar-add_items sidebar-option">
        <img src={assets.add_icon} alt="add" />
        <p>Add Items</p>
      </NavLink>

      <NavLink to='/list' className="sidebar-list_items sidebar-option">
        <img src={assets.order_icon} alt="list" />
        <p>List Items</p>
      </NavLink>

      <NavLink to='/order' className="sidebar-orders  sidebar-option">
        <img src={assets.order_icon} alt="list" />
        <p>Orders</p>
      </NavLink>

    </div>
  )
}

export default SideBar
