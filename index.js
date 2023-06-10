import express from "express";
import mongoose from "mongoose";
import morgan from "morgan";
import router from "./routes/userRoutes.js";
const app=express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/v1',router)

mongoose.connect('mongodb+srv://Snehal:Snehal1234@mern-todo.va7rcii.mongodb.net/Pin_Encrypt_DB?retryWrites=true&w=majority')
.then(()=>console.log("DB connected"))
.catch((err)=>console.log(err,"DB error"));

app.listen(8000,()=>console.log("working on PORT 8000"));