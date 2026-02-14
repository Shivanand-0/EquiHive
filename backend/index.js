import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';

import HoldingsModel from './model/HoldingsModel.js';
import PositionsModel from './model/PositionsModel.js';
import OrdersModel from './model/OrdersModel.js';



// // // configuration

const PORT= process.env.PORT || 3000;
const url= process.env.MONGO_URL;




// // // configuration 
const app=express();
app.use(cors());
app.use(bodyParser.json());

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
    console.log("Server is running on port 3000");
});