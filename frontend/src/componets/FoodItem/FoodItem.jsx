import React, { useContext } from 'react'
import './foodItem.css';
import {assets} from '../../assets/assets';
import  {StoreContext}  from '../../context/StoreContext';
const FoodItem = ({id,name,price,des,img,rating}) => {

    // const [itemCount,setItemCount] = useState(0);
    const url = 'http://localhost:8000'
    const {cartItems,addToCart, removeFromCart}  = useContext(StoreContext);
  return (
    <div id={id} className='food_item'>
      <div className='food_item-img_container'>
          <img src={`${url}/images/${img}`} alt="item"  className='main_img'/>


          <div className='food_item-counter'>
            {!cartItems[id]
                    ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon_white} />
                    :<div className='food_item-counter-inner_div'>
                        <img src={assets.remove_icon_red} alt='minus' onClick={()=> removeFromCart(id)}/>
                        <p>{cartItems[id]}</p>
                        <img src={assets.add_icon_green} alt="plus" onClick={() => addToCart(id)}/>
                    </div>    
            }    
          </div>
      </div>

      <div className='food_item-content'>
        <div className='food_item-title_div'>
            <h3>${price}</h3>
            <img src={rating} alt="" />
        </div>
        <h4>{name}</h4>
        <p>{des}</p>
      </div>
    </div>
  )
}

export default FoodItem
