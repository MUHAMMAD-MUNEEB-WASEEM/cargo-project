import React from "react";
import classes from "./EstimateCargo.module.css"
import starIcon from "./../images/starIcon.png"
import image5 from "./../images/image5.png"
import image6 from "./../images/image6.png"
import { useNavigate } from "react-router-dom";

const EstimateCargo =()=>{
    const navigate = useNavigate();

    const handleEstimate=()=>{
        navigate("/estimate")
    }
    return(
        <div className={classes.cont}>
       <div className={classes.innerWrap}>
           
        <div className={classes.heading1}>Estimate Cargo Cost</div>
        <div className={classes.heading2}>Calculate Free Estimation of your cargo</div>
           <div className={classes.wrap}>
              <div className={classes.left}>
                <div>Pickup</div>
                <img alt="" src={image5}/>
              </div>
              <div className={classes.right}>
                <div>Desitnation</div>
                <img alt="" src={image6}/>
              </div>
           </div>
           <input placeholder="Type Your Email"/>
           <div className={classes.btn} onClick={()=>handleEstimate()}>Try Now</div>
       </div>
        </div>
    )
}

export default EstimateCargo