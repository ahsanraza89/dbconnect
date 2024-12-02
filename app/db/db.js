import mongoose, { connect } from "mongoose";

export function connectIt(){
    mongoose.connect("mongodb://localhost:27017/userAuthentication").then(()=>{
        console.log("db connected ho gai ha ");
   
      
        
    })
}