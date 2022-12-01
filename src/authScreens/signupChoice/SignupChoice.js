import React from "react";
import Navbar from "../../navbar/Navbar";
import classes from "./SignupChoice.module.css"
import gIcon from "./../../images/gIcon.png"
import { useNavigate } from "react-router-dom";


const SignupChoice =({val})=>{
    const navigate = useNavigate();
    const handleSignup=()=>{
        navigate("/login")
    }
    const handleClient=()=>{
        navigate("/uploadclient")
    }
    return(
        <div>
          <Navbar/>
          <div className={classes.cont}>
            <div className={classes.loginWrap}>
              <div className={classes.heading}>Signup as a Client</div>
              <div className={classes.inputWrap}>
              <div>First Name*</div>
              <input placeholder="Type Your First Name"/>
              </div>
              <div className={classes.inputWrap}>
              <div>Last Name*</div>
              <input placeholder="Type Your Last Name"/>
              </div>
              <div className={classes.inputWrap}>
              <div>Your Email Address*</div>
              <input placeholder="Type Your Email Address"/>
              </div>
              <div className={classes.inputWrap}>
              <div>Password*</div>
              <input placeholder="Type Your Password"/>
              </div>
              <div className={classes.loginBtn} onClick={()=>handleClient()}>
                 Create Account
              </div>
              <div className={classes.loginGoogleBtn}>
                <img src={gIcon} alt=""/>
                 <div>Login with Google</div>
              </div>
             
              <div className={classes.rememberWrap}>
                <div className={classes.checkboxWrap}>
                    <input type="checkbox"/>
                    <div>Remember me</div>
                </div>
                <div className={classes.forgot}>Forgot Password?</div>
              </div>
              <div className={classes.question}>Already have an Account? <span onClick={()=>handleSignup()}>Login</span></div>
             
            </div>
          </div>
        </div>
    )
}

export default SignupChoice