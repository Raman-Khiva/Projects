import orderModel from '../models/orderModel.js';
import userModel from '../models/userModel.js';


const placeOrder = async(req,res)=>{
    try {
        const newOrder = new orderModel({
            userId:req.body.userId,
            items: req.body.items,
            amount: req.body.amount,
            address: req.body.address
        })

        await newOrder.save();
        await userModel.findByIdAndUpdate(req.body.userId,{cartData:{}});
        console.log("new order place");
        res.json({success:true, message:"Order Placed successfully"});
        
    } catch (error) {

        console.log("error ouccred while placing order : ",error);
        res.json({success:false, message:"can't place order"});
        
    }

}

const getOrderList = async (req,res) =>{
    try{
        const userId = req.body.userId;
        const orderData = await orderModel.find({userId: userId});
        res.json({success:true,orderData:orderData});

    }catch(err){
        console.log("can't send orderData", err);
        res.json({success:false, message:err});
    }

    
}


export {placeOrder,getOrderList};