import React from "react";
import classes from "./Footer.module.css"
import twitterIcon from "./../images/twitterIcon.png"
import youtubeIcon from "./../images/youtubeIcon.png"
import discordIcon from "./../images/discordIcon.png"

const Footer =()=>{
    return(
        <div className={classes.cont}>
        <div className={classes.top}>
          <div className={classes.line}>
          <div>Subscription</div>
          <div>Services</div>
          <div>Job post</div>
          <div>Account balance</div>
          <div>Contracts</div>
          </div>
          <div className={classes.line}>
          <div>Earnings</div>
          <div>Details</div>
          <div>Truck Details</div>
          <div>Proposals</div>
          <div>Drivers details</div>
          </div>
          <div className={classes.line}>
          <div>Terms and Conditions</div>
          <div>FAQ</div>
          <div>Contact us</div>
          <div>Careers</div>
          <div>Help and Support</div>
          </div>
        </div>
        <div className={classes.bottom}>
          <div className={classes.heading}>Follow Us</div>
          <div className={classes.icons}>
          <img src={twitterIcon} alt=""/>
          <img src={youtubeIcon} alt=""/>
          <img src={discordIcon} alt=""/>
          </div>
        </div>
        </div>
    )
}

export default Footer