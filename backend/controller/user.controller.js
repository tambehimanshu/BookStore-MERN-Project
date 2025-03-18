const User = require("../model/user.model.js")
const bcryptjs =require("bcryptjs")

const signup=async (req,res)=>{
    try {
        const {fullname,email,password}=req.body;
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message:"user already exists"})
        }
        const hashPassword = await bcryptjs.hash(password,10)
        const createdUser =  new User({
            fullname:fullname,
            email:email,
            password:hashPassword
        })
        await createdUser.save();
        res.status(201).json({message:"User created Successfully ",user:{
            _id:createdUser._id,
            fullname:createdUser.fullname,
            email:createdUser.email,
        }});
    } catch (error) {
       
        console.log("error: "+error.message)
        res.status(500).json({message:"Internal server error"})
        
    }

}

const login  =async (req,res)=>{
    try {
        const{email,password}= req.body;
        const user = await User.findOne({email});
        const isMatch = await bcryptjs.compare(password,user.password);
        if(!user || !isMatch){
            return res.status(400).json({message:"invalid user or password"});
        }else {
            res.status(200).json({message:"login successfully :) ",user:{
                id:user._id,
                fullname:user.fullname,
                email:user.email
            }})
        }

    } catch (error) {
        console.log("Error :"+ error.message)
        res.status(500).json({message:"internal server error"})
        
    }
}



module.exports = {signup , login} ;