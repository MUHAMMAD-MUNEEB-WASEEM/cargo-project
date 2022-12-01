import React from 'react'
import classes from "./ForgotPassword.module.css"
import Navbar from '../../navbar/Navbar'
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
    const navigate = useNavigate();
    const handleReset=()=>{
        navigate("/reset")
    }
    return (
        <>
        <Navbar/>
        <div className={classes.container}>
            <form className={classes.innerContainer}>
               <h1>Forget Password</h1>
               <span>Your Email Address*</span>
               <div className={classes.inputContainer}>
                   
                   <input type="text"
                   placeholder='Type Your Email Address'
                   />
               </div>
               <button onClick={()=>handleReset()}>Continue</button>
            </form>
        </div>
        </>
    )
}

export default ForgotPassword