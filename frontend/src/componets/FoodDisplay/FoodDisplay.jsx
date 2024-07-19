import React, { useContext } from 'react'
import './foodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';
import rating_starts from '../../assets/rating_starts.png'
// import { food_list } from '../../assets/assets';



const FoodDisplay = ({category}) => {
    const {food_list} = useContext(StoreContext);
  return (
    <section className='food_display' id='food-display'>
      <h3>Top dishes near you</h3>
      <div className='food_display-list'>
        {
        food_list.map((item,index)=>{
            if(category===item.category){
                return <FoodItem key={index} name={item.name} des={item.description} id={item._id} price={item.price} img={item.image} rating={rating_starts}/>
            }
            else if(category==="All"){
                if(index<=32 && index%4===0) {
                    return <FoodItem key={index} name={item.name} des={item.description} id={item._id} price={item.price} img={item.image} rating={rating_starts}/>
                }

            }
        }
        )}
      </div>
    </section>
  )
}

export default FoodDisplay
