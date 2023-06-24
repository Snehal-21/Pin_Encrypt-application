import mongoose from "mongoose";
import { Schema } from "mongoose";

const seller=new Schema({
    s_name:String,
    s_email:String,
    s_password:String,
    s_brand:String,
    s_pin:String


});

export default mongoose.model("Seller",seller);