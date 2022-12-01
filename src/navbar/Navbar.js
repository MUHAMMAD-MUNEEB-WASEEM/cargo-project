import React from "react";
import classes from "./Navbar.module.css"
import cargaLogo from "./../images/cargaLogo.png"
import { useNavigate } from "react-router-dom";


const Navbar =()=>{
    const navigate = useNavigate();

const handleLogin=()=>{
    navigate("/login")
}
const handleSignup=()=>{
    navigate("/signup")
}
const handleLogo=()=>{
    navigate("/")
}
    return(
        <div className={classes.cont}>
         <img src={cargaLogo} alt="" className={classes.logo} onClick={()=>handleLogo()}/>
         <div className={classes.navOptions}>
            <div>About</div>
            <div>Pricing</div>
            <div>Contact</div>
            <div>Benefits</div>
         </div>
         <div className={classes.navBtn}>
            <div className={classes.loginBtn} onClick={()=>handleLogin()}>Login</div>
            <div className={classes.signupBtn} onClick={()=>handleSignup()}>Signup</div>
         </div>
        </div>
    )
}

export default Navbar