import Seller from '../modals/seller.js';
import encrypt from 'encryptjs';

export const register=async(req,res)=>{
    try{
        const {s_name,s_email,s_password,s_confirmpassword,s_brand,s_pin}=req.body;
        
    }catch(error){
        return res.send(error);
    }
}
