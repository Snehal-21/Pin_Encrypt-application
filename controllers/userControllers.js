import User from '../modals/user.js';
import encrypt from "encryptjs";
export const register=async(req,res)=>{
    try{
        const { name,email,password,confirmpassword,pin}=req.body;
        if(password<=3 && confirmpassword<=3) return res.send("Password shoild be more than 8 digits!")
        if(password!=confirmpassword) return res.send("Password and COnfirmPassword is not matched!")
        const user=await User.find({email}).exec()
        if(user.length) return res.send("Email is already taken or you are already registered");


        let secretKey_Pass='modify';
        let encryc_Pass=encrypt.encrypt(password,secretKey_Pass,256);
       let secretkey_pin="modifypin";
       const num_Pin=pin.toString();
        let encryc_pin=encrypt.encrypt(num_Pin,secretkey_pin,256);
        const register=new User({
            name,
            email,
            password:encryc_Pass,
            pin:encryc_pin
        });
        await register.save();
        return res.send("Registration Successful!");

    }
    catch(error){
        return res.send(error);
    }
}

export const login=async(req,res)=>{
    try{
        const { email,password,pin}=req.body;
        const response=await User.find({}).exec();
        if(!response.length) {
             res.send("User not found!");
        }else{
            return res.send("Login Successful!");
        }
    }
    catch(error){
        return res.send(error);
    }
}

export const updateUser=async(req,res)=>{
    try{
        const{ name,email,password}=req.body;
        const response=await User.find({email}).exec();
        if(!response.length) return res.send("User not Found");
        let secretkey="modify";
        const encrypt_update=encrypt.encrypt(password,secretkey,256);
        const update=await User.findOneAndUpdate({email},{name,password:encrypt_update}).exec();
        await update.save();
        return res.send("Updated")

    }catch(error){
        return res.send(error);
    }
}