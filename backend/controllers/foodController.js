//import { json } from "body-parser";
import foodModel from "../models/foodModel.js";
import fs from 'fs';


//add new food item

const addFood = async (req,res)=>{
    console.log('user is adding new food item to DB');
    
    if(req.file && req.file.filename){
        let image_filename = `${req.file.filename}`;
    
        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category:req.body.category,
            image: image_filename
        })
        try{
            await food.save();
            console.log('new food item added to DB');
            res.json({success:true,message:'food Added'})
        } catch (error){
            console.log(error);
            console.log('failed to add new item to DB')
            res.json({success:false,message:"Error"});
        }
    }
    else{
        console.log(", but didn't provide all details");
        res.json({success:false, message:"Please enter all details!"});
    }
}

// show all food items
const listFood = async (req,res)=>{
    try{
        const foods = await foodModel.find({});
        console.log("data sent");
        res.json({success: true, data:foods});
    }catch(err){
        console.log({error : " cant get food items list"});
        console.log("error occured while sending data");
        res.json({success:false, message:"Error"});
    }
}

const removeFood = async (req,res) =>{
    try{
        const food = await foodModel.findById(req.body.id);
        fs.unlink(`uploads/${food.image}`,()=>{});

        await foodModel.findByIdAndDelete(req.body.id);
        res.json({success:true, message:"Food Removed"});
    }catch(err){
        console.log({err: "unable to delete food item"});
        res.json({success:false, message:"unable to remove item"});
    }
}

export {addFood,listFood,removeFood} ;