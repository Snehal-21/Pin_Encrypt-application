import User from '../modals/user.js';
import encrypt from "encryptjs";
export const register=async(req,res)=>{
    try{
        const { name,email,password,confirmpassword,pin}=req.body;
        if(!name) return res.send("Name is required!");
        if(!email) return res.send("Email is required!");
        if(!password) return res.send("Password is required!");
        if(!pin) return res.send("Pin is required!");
        if(password<=3 && confirmpassword<=3) return res.send("Password shoild be more than 8 digits!")
        if(password!=confirmpassword) return res.send("Password and COnfirmPassword is not matched!")
        const user=await User.find({email}).exec()
        if(user.length) return res.send("Email is already taken or you are already registered");


        let secretKey_Pass='modify';
        let encryc_Pass=encrypt.encrypt(password,secretKey_Pass,256);
       let secretkey_pin="modifypin";
       
        let encryc_pin=encrypt.encrypt(pin,secretkey_pin,256);
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
        if(!email) return res.send("Email is required!");
        if(!password) return res.send("Password is required!");
        if(!pin) return res.send("Pin is required!");

    }
    catch(error){
        return res.send(error);
    }
}