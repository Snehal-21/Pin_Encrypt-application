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
