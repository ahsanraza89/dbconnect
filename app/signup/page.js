"use client"
import axios from "axios"
import { useForm } from "react-hook-form";

export default function Signup(){

  const saveUser = (user)=>{
    console.log(user);
    
    axios.post("/api/auth" , user).then((resp)=>{
        console.log(resp.data);
        
    })
  }


// const saveUser = async (user) => {
//     try {
//         console.log(user);

//         const response = await axios.post("/api/auth", user);
//         console.log(response.data);
//     } catch (error) {
//         console.error('Error saving user:', error);
//     }
// }


let {register , handleSubmit} = useForm();


    return <div>
        <form onSubmit={handleSubmit(saveUser)}>

        <label>Business Email Address</label>    <br/>
        <input {...register("businessEmailAddress")} placeholder="Enter your email" /> <br/>

        <label>Company Name</label>    <br/>
        <input {...register("companyName")} placeholder="Enter your company Name" /> <br/>

        <label>Full Name</label>    <br/>
        <input {...register("fullName")} placeholder="Enter your email" /> <br/>

            <label>Password</label>    <br/>
        <input {...register("password")} placeholder="Enter your email" /> <br/>

        <label>Email</label>    <br/>
        <input {...register("email")} placeholder="Enter your password" />

        <button >Signup</button>

        </form>

    </div>
}