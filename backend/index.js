import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from "cookie-parser";
import authRoute from "./Routes/AuthRoute.js";

import HoldingsModel from './model/HoldingsModel.js';
import PositionsModel from './model/PositionsModel.js';
import OrdersModel from './model/OrdersModel.js';


// // // configuration

const PORT= process.env.PORT || 3000;
const url= process.env.MONGO_URL;




// // // configuration 
const app=express();
app.use(
  cors({
    origin: [
      "http://localhost:3000", 
      "http://127.0.0.1:5173",
      "http://localhost:5173", 
      "http://localhost:5174",
      "http://127.0.0.1:5174"
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
// app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.json());


// mongoDB connection 
async function main(){
    await mongoose.connect(url)
}
main()
.then(()=>{
    console.log("Connected to MongoDB");
})
.catch((err)=>{
    console.log("Error connecting to MongoDB",err);
});

//  ------------------------------

app.use("/", authRoute);
// // // routes
app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.get('/allHoldings',async(req,res)=>{
    let allHoldings= await HoldingsModel.find({});
    res.json(allHoldings);
});

app.get('/allPositions',async(req,res)=>{
    let allPositions=await PositionsModel.find({});
    res.json(allPositions);
});
app.post('/newOrder', async(req,res)=>{
    const order=req.body;
    let newOrderItem =new OrdersModel({
        name: order.name,
        qty: order.qty,
        price: order.price,
        mode: order.mode,
    });
    newOrderItem.save();
    res.send("Order placed successfully");
})














app.listen(PORT,()=>{
    console.log("Server is running on port "+PORT);
});