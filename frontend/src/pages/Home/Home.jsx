import React, { useState } from 'react'
import './home.css';
import { ExploreMenu, Header,FoodDisplay } from '../../componets';
// import FoodDisplay from '../../componets/FoodDisplay/FoodDisplay';

const Home = () => {
  const [category,setCategory] = useState('All');
  return (
    <main>
      <Header/>
      <ExploreMenu category={category} setCategory={setCategory}/>
      <FoodDisplay category={category} setCategory={setCategory}/>
      
    </main>
  )
}

export default Home
