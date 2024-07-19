import express from "express"
import authMiddleware from "../middlewares/auth.js"
import { getOrderList, placeOrder } from "../controllers/orderController.js"


const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware, placeOrder);
orderRouter.get("/",authMiddleware,getOrderList);

export default orderRouter;
