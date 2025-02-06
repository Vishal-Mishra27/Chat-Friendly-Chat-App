// import { genSalt } from "bcryptjs";
import pkg from 'bcryptjs'
const{genSalt}=pkg
import mongoose from "mongoose";
// import bcrypt from "bcrypt";
// import bcrypt from "bcryptjs";
import bcrypt from "bcryptjs";


const userSchema=new mongoose.Schema({
    email:{
        type:String,
        required:[true,"Email  is required"]
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    firstName:{
        type:String,
        required:false
    },
    lastName:{
        type:String,
        required:false
    },
    image:{
        type:String,
        required:false
    },
    color:{
        type:String,
        required:false
    },
    profileSetup:{
        type:Boolean,
        default:false
    }
})

userSchema.pre("save",async  function (next) {
    const salt=await genSalt()
    this.password=await bcrypt.hash(this.password,salt)
    next()
})

const User=mongoose.model("Users",userSchema)

export default User