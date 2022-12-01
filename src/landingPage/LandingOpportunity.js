import React from "react";
import classes from "./LandingOpportunity.module.css"
import starIcon from "./../images/starIcon.png"


const LandingOpportunity =()=>{
    return(
        <div className={classes.cont}>
       <div className={classes.innerWrap}>
           <div className={classes.heading}>GROW YOUR BUSINESS AND FIND OPPORTUNITES</div>
           <div className={classes.box}>
            <div className={classes.boxInner}>
            <img alt="" src={starIcon}/>
            <div>PROOF OF QUALITY SERVICE</div>
            </div>
            <div className={classes.boxInner}>
            <img alt="" src={starIcon}/>
            <div>NO COST TILL PROCESS COMPLETES</div>
            </div>
            <div className={classes.boxInner}>
            <img alt="" src={starIcon}/>
            <div>EASY AND SECURE</div>
            </div>
            <div className={classes.btn}>Learn More</div>
           </div>
           
           
       </div>
        </div>
    )
}

export default LandingOpportunity