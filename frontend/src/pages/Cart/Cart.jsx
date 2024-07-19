import React, { useContext, useEffect } from 'react'
import './cart.css';

import {Link} from 'react-router-dom';

import { StoreContext } from '../../context/StoreContext';

const Cart = () => {
  const url = 'http://localhost:8000'

  const {cartItems,food_list,cartData,fetchCart,removeFromCart,getTotalCartAmount} = useContext(StoreContext);

  useEffect(()=>{
    
    fetchCart();
  },[]);

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title titles">
          <p className='item_image'>Items</p>
          <p>Title</p>
          <p className='center'>Price</p>
          <p className='center'>Quantity</p>
          <p className='center'>Total</p>
          <p className='center'>Remove</p>
        </div>
        

        {food_list.map((item,index)=>{
            if(cartData && cartData[item._id]>0){
              return(
                <div className="cart-items-title cart-items-item ">
                  <div className='item_image '>
                    <img src={`${url}/images/${item.image}`} alt="item"  width="50px"/>
                  </div>
                  <p>{item.name}</p>
                  <p className='center'>${item.price}</p>
                  <p className='center'>{cartData[item._id]}</p>
                  <p className='center'>${Number(item.price) * cartData[item._id]}</p>
                  <p className='center pointer' onClick={()=> removeFromCart(item._id)} >x</p>
                </div>
            
              )
            }
        })}
      </div>

      <div className='bill'>

        <h3>Total Cost</h3>
        <div className='bill-tags'>
          <div >
            <p>Subtotal</p>
            <p>${getTotalCartAmount()}</p>
          </div>
          <div>
            <p>Deliviry Fee</p>
            <p>$7</p>
          </div>
          <div>
            <p>Taxes</p>
            <p>$3</p>
          </div>
          <div>
            <p>Discount</p>
            <p>$6</p>
          </div>
          
        </div>
        <div className='bill-total'>
          <p>Total</p>
          <p>${getTotalCartAmount() + 4}</p>
        </div>

        <Link to="/placeOrder" className='bill-order_button'>Place Order</Link>
        

      </div>
    </div>
  )
}

export default Cart
