import React from 'react'
import './exploreMenu.css'
import { menu_list } from '../../assets/assets'
const ExploreMenu = ({category,setCategory}) => {
  return (
    <section className='explore_menu'>
      <h2>Explore our menu</h2>
      <p>Choose from a diverse menu featuring a delectable array of dishes. Our missin is to stisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
      
      <div className='menu_list'>
        {menu_list.map((item)=>(
            <div className='menu_list-item' onClick={()=>setCategory(prv=> prv===item.menu_name?"All":item.menu_name)}>
                <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="item" />
                <h3>{item.menu_name}</h3>
            </div>

        ))}
      </div>
    </section>
  )
}

export default ExploreMenu
