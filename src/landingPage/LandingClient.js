import React from "react";
import classes from "./LandingClient.module.css"
import image2 from "./../images/image2.png"
import icon1 from "./../images/icon1.png"
import icon2 from "./../images/icon2.png"
import icon3 from "./../images/icon3.png"

const LandingClient =()=>{
    return(
        <div className={classes.cont}>
        <div className={classes.innerWrap}>
          <div className={classes.innerLeft}>
           <img alt="" src={image2}/>
          </div>
          <div className={classes.innerRight}>
            <div className={classes.heading1}>Clients</div>
            <div className={classes.heading2}>POST A DELIVERY<br/>JOB FOR DRIVERS</div>
            <div className={classes.para}>Lorem Ipsum is simply dummy text of the printing and typesetting industry</div>
            <div className={classes.details}>
               <div className={classes.detailInner}>
                <img alt="" src={icon1}/>
                <div>Lorwm ipsumn dkk,ir si amey</div>
               </div>
               <div className={classes.detailInner}>
                <img alt="" src={icon2}/>
                <div>Lorwm ipsumn dkk,ir si amey</div>
               </div>
               <div className={classes.detailInner}>
                <img alt="" src={icon3}/>
                <div>Lorwm ipsumn dkk,ir si amey</div>
               </div>
            </div>
          </div>
        </div>
        </div>
    )
}

export default LandingClient