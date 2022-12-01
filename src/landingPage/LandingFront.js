import React from "react";
import classes from "./LandingFront.module.css"
import image1 from "./../images/image1.png"

const LandingFront =()=>{
    return(
        <div className={classes.cont}>
        <div className={classes.left}>
            <div>
          <div className={classes.heading}>FIND THE BEST<br/> SUITABLE SERVICES</div>
          <div className={classes.subheading}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</div>
          <div className={classes.button}>Start Now</div>
          </div>
          </div>
          <div className={classes.right}>
            <img src={image1} alt="" />
          </div>
        </div>
    )
}

export default LandingFront