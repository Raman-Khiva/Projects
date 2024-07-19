import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import './placeorder.css'
import { useNavigate } from 'react-router-dom';


import { StoreContext } from '../../context/StoreContext'

const PlaceOrder = () => {
  const {getTotalCartAmount, setAddress, address, placeOrder} = useContext(StoreContext);


  const handleChange = (e) =>{
    const {name,value} = e.target;
    setAddress((prv)=> ({...prv,[name]:value}));
  }

  useEffect(()=>{
    console.log(address);
  },[address]);

  const navigate = useNavigate();

  return (
    <div className='place_order'>
      <div className='place_order-info_form'>
        <h3>Delivery Information</h3>
          <form onSubmit={placeOrder}>
            <div className='info_form-name input_div'>
              <input type="text" placeholder='First name'  name='first_name' value={address.first_name} onChange={handleChange}/>
              <input type="text" placeholder='Last name'  name='last_name' value={address.last_name}  onChange={handleChange}/>
            </div>
            <input type="email" placeholder='Email address'  name='email' value={address.email} onChange={handleChange}/>
            <input type="text" placeholder='Address'  name='street' value={address.street} onChange={handleChange}/>
            <div className='info_form-state input_div'>
              <input type="text" placeholder='City'  name='city' value={address.city} onChange={handleChange}/>
              <input type="text" placeholder='State'  name='state' value={address.state} onChange={handleChange}/>
            </div>
            <div className='info_form-country input_div'>
              <input type="text" placeholder='Zip code'  name='zip_code' value={address.zip_code} onChange={handleChange}/>
              <input type="text" placeholder='Country'  name='country' value={address.county} onChange={handleChange}/>
            </div>
            <input type="tel" placeholder='Phone' name='phone' value={address.value} onChange={handleChange}/>

          </form>
      </div>

      <div className='place_order-bill'>

        <h3>Total Cost</h3>
        <div className='place_order-bill_tags'>
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

        <button  className='bill-order_button'  type='submit' onClick={()=> placeOrder()} >Place Order</button>
        

      </div>
      
    </div>
  )
}

export default PlaceOrder
