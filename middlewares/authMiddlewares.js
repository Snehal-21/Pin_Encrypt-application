import User from '../modals/user.js';
import encrypt from 'encryptjs';
export const checkname=(req,res,next)=>{
    try{
        const { name }=req.body;
        if(!name) return res.send("Name is required in middleware!");
        next();
    }catch(error){
        return res.send(error);
    }
}

export const checkemail=(req,res,next)=>{
    try{
        const { email }=req.body;
        if(!email) return res.send("Email is required in middleware!");
        next();
    }catch(error){
        return res.send(error);
    }
}

export const checkepassword=(req,res,next)=>{
    try{
        const { password }=req.body;
        if(!password) return res.send("Password is required in middleware!");
        next();
    }catch(error){
        return res.send(error);
    }
}

export const checkeCpassword=(req,res,next)=>{
    try{
        const { confirmpassword }=req.body;
        if(!confirmpassword) return res.send(" Confirm Password is required in middleware!");
        next();
    }catch(error){
        return res.send(error);
    }
}

export const checkepin=(req,res,next)=>{
    try{
        const { pin }=req.body;
        if(!pin) return res.send("Pin is required in middleware!");
        next();
    }catch(error){
        return res.send(error);
    }
}

export const pin=async(req,res,next)=>{
    try{
        const{pin,email}=req.body;
        if(!pin) return res.send("Pin is required!");
        if(!email) return res.send("Email is required!");

        const response=await User.find({email}).exec();
        if(!response.length) return res.send("User not Found");


        let Pin=response[0].pin;
        let secretkey="modifypin";
        let decrypt_code=encrypt.decrypt(Pin,secretkey,256);
        let new_pin=parseInt(decrypt_code);
        if(new_pin!=pin) {
             res.send("Incorrect pin");
        }else{
            next();
        }
    }
    
    catch(error){
        return res.send(error);
    }
}


export const checkUpdate=async(req,res,next)=>{
    try{
        const{ name,email,pin,password}=req.body;
        const response=await User.find({email}).exec();
        if(!response.length) return res.send("User not found.");

        let secretkey="modifypin";
        const decryptPin=encrypt.decrypt(response[0].pin,secretkey,256);
        let checkPin=parseInt(decryptPin);
        let flag=false;
        if(pin ===checkPin){
            flag=true;
        }
        if(flag){
            next();
        }else{
            return res.send("Incoreect PIN");
        }
    }
    catch(error){
        return res.send(error);
    }
}
