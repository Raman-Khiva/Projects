import React, { useContext } from 'react'
import './menu.css';
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../../componets/FoodItem/FoodItem';

const Menu = () => {
    const {food_list} = useContext(StoreContext);
  return (
    <div className='menu'>
        {food_list.map((item,index)=>
            <FoodItem id={item._id} price={item.price} des={item.description} name={item.name} img={item.image} />
        )}
    </div>
  )
}

export default Menu