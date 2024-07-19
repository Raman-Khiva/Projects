import React from 'react'
import './list.css';
import axios from 'axios';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { useEffect } from 'react';


const List = () => {

    const url = "http://localhost:8000";
    const [list,setList] = useState([]);
    const fetchList = async () =>{
        const response = await axios.get(`${url}/api/food/list`);
        console.log(response.data);
        if(response.data.success){
            setList(response.data.data);
        }
        else{
            toast.error("Error");
        }
    }


    const removeFood = async (foodId) =>{
        console.log(foodId);
        const response = await axios.post(`${url}/api/food/remove`,{id:foodId});
        await fetchList();
        if(response.data.success){
            toast.success("Item has removed");
        }
        else toast.error('Unable to remove');
    }


    useEffect(()=>{
        fetchList();
    },[]);

  return (
    <div className='list add flex-col'>
        <h3>Food Items</h3>
        <div className='list-header flex-row'>
            <p>Image </p>
            <p>Name</p>
            <p >Category</p>
            <p className='center'>Price</p>
            <p className='center'>Action</p>
        </div>

        {list.map((item,index)=>{

            return(
                <div key={index} className='list-item_div flex-row '>
                    <img className='list-item_img' src={`${url}/images/${item.image}`} alt="item" />
                    <p>{item.name}</p>
                    <p >{item.category}</p>
                    <p className="center">{item.price}</p>
                    <p className="center list-item_div-remove" ><span  onClick={() => removeFood(item._id)}>x</span></p>
                </div>
            )
            
        })}
    </div>
  )
}

export default List
