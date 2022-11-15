import React from "react";
import { useNavigate } from "react-router";
import { UserAuth } from "./Contexts/Authcontext";


const Account=()=>{
const{user,logout}=UserAuth()
const navigate=useNavigate()
const handlelogut=async()=>{
    try{
        await logout()
        navigate('/signup')

    }catch(e){
console.log(e.message)
    }
}

    return(
        <>
        <h2 className="text-center">Account</h2>
        <p>User Email : {user&&user.email}</p>
        <button onClick={handlelogut} className="border ">Logout</button>
        </>

    )
}
export default Account;