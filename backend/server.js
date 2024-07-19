import express from 'express';
import cors from 'cors';

import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';

import 'dotenv/config'
import orderRouter from './routes/orderRoute.js';


const app = express();

const PORT = prcess.env.PORT || 8000;

app.use(express.json());
app.use(cors());

//connecting DB 
connectDB();

// api endpoints
app.use("/api/food",foodRouter);
app.use("/images",express.static('uploads'));
app.use("/api/user",userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order", orderRouter);


app.get('/',(req,res)=>{
    console.log('user is on home page');
    res.status(200).send('welcome to server');
    
});

app.listen(PORT,()=>{
    console.log(`server has started successfully! \n listening on http://localhost:${PORT}`);
});
