import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import mongoose from 'mongoose';

import {holdings,positions} from '../dashboard/src/data/data.js';
import HoldingsModel from './model/HoldingsModel.js';
import PositionsModel from './model/PositionsModel.js';
// // // configuration

const PORT= process.env.PORT || 3000;
const url= process.env.MONGO_URL;




// // // configuration 
const app=express();
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

// adding dummy Data to the database

// app.get('/addholdings', async(req,res)=>{  
//     holdings.forEach(async(holding)=>{
//         console.log(holding);
//         let newHolding=new HoldingsModel(holding);
//         await newHolding.save();
//     })
//     res.send("Holdings added successfully");
// });

// app.get('/addpos',async(req,res)=>{
//     positions.forEach(async(position)=>{
//         console.log(position);
//         let newpos=new PositionsModel(position);
//         await newpos.save();
//     })
// })
// app.get('/addorder',async(req,res)=>{
//     positions.forEach(async(position)=>{
//         console.log(position);
//         let newpos=new PositionsModel(position);
//         await newpos.save();
//     })
// })
app.get('/',(req,res)=>{
    res.send("Hello World");
});















app.listen(PORT,()=>{
    console.log("Server is running on port 3000");
});