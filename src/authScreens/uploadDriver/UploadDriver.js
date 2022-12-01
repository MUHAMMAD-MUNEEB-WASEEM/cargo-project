import React from 'react'
import Navbar from '../../navbar/Navbar'
import classes from "./UploadDriver.module.css"
import { useNavigate } from "react-router-dom";


const UploadDriver = () => {
    const navigate = useNavigate();
    const handleTerm=()=>{
   navigate("/driverdetail")
    }
    return (
        <>
        <Navbar/>
        <div className={classes.container}>
           <div className={classes.heading1}>Upload Profile Picture</div>
           <div className={classes.wrap}>
           <div className={classes.left}>
            <div className={classes.pic}>
                <div></div>
            </div>
            <div className={classes.btn1} onClick={()=>handleTerm()}>Submit</div>
            <div className={classes.btn2}>Change Photo</div>
           </div>
           <div className={classes.right}>
            <div className={classes.btn3}>Upload</div>
            <div className={classes.heading2}>Add Bio</div>
            <div className={classes.para1}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur</div>
           </div>
           </div>
           <div className={classes.heading3}>Identity Verification</div>
           <div className={classes.wrap}>
           <div className={classes.left}>
            <div className={classes.btn3}>Upload</div>
            <div className={classes.para2}>Upload Passport or ID card or licence for verification</div>
           </div>
           <div className={classes.right}>
           <div className={classes.para3}>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur
 </div>
           </div>
           </div>
        </div>
        </>
    )
}

export default UploadDriver