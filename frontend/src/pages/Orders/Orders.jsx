import React, { useContext, useEffect } from 'react'
import './orders.css';
import { StoreContext } from '../../context/StoreContext';
import {assets} from '../../assets/assets.js'


const Orders = () => {

    const {orderData, fetchOrderData,getTotalItems} = useContext(StoreContext);

    useEffect(()=>{
        fetchOrderData();
    },[]);

  return (
    <div className='orders-main_div'>
        <h2>Orders</h2>
        <div className='orders_container'>
            {orderData.map((order)=>(
                <div className='order_div'>
                    <img src={assets.parcel_icon} alt="parcel" />
                    <p>amount: ${order.amount}</p>
                    <p>items: {getTotalItems(order)}</p>
                    <p>Food Processning</p>
                </div>
            ))}

        </div>
    </div>
  )
}

export default Orders