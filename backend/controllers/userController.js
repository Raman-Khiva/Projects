import userModel from "../models/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
import validator from 'validator';



//login user
const loginUser = async (req,res) =>{
    const email = req.body.email;
    const password = req.body.password;
    console.log(`email:${email} \n password:${password}`);
    try{
        if(!email || !password) return res.json({success:false, message: "Please enter a valid email and password."});
        const user = await userModel.findOne({email});
        if(!user){
            return res.json({success:false, message:"User doesn't exist!"});
        }
        const matched = await bcrypt.compare(password,user.password);

        if(!matched){
            return res.json({success:false, message:"Invalid credentials"});
        }

        const token = createToken(user._id);
        res.json({success:true,token});
    }catch(err){
        console.log(err);
        return res.json({success:false,message:"Error"});
    }
}


const createToken = (id) =>{
    return jwt.sign({id},process.env.JWT_SECRET);
}


const registerUser = async (req,res) =>{
    const {name,password,email} = req.body;
    try{
        //checking is user already exists
        const exists = await userModel.findOne({email});
        if(exists){
            return res.json({success:false, message:"User already exists"});
        }
        //validation email format and strong passward
        if(!validator.isEmail(email)){
            return res.json({success:false,message:"Please enter a valid email"});
        }

        //checking password strength
        if(password.length < 8){
            return res.json({success:false, message:"Passward must be 8 or more characters"});
        }

        // hashing user password 
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        //
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword,
            
        });

        const user = await newUser.save();
        const token = createToken(user._id);
        res.json({success:true,token});

    }catch(err){
        console.log(err);
        res.json({success:false,message:"Unexpected Error"});
    }

}


export{
    loginUser,
    registerUser
}

