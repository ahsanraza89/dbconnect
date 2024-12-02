import { User } from "@/models/user";
import { NextResponse } from "next/server";


export async function POST(req) {
    
    let data = await req.json()
    console.log(data);
    
    let newUser = new User;

    newUser.businessEmailAddress = data.businessEmailAddress
    newUser.companyName =  data.companyName 
    newUser.fullName  =  data.fullName 
    newUser.password = data.password 
    newUser.email = data.email;

    await newUser.save();

    console.log("User Saved");

    return NextResponse.json({})

    
    
}