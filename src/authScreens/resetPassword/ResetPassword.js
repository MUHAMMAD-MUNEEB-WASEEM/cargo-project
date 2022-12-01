import React from 'react'
import Navbar from '../../navbar/Navbar'
import classes from "./ResetPassword.module.css"


const ResetPassword = () => {

    return (
        <>
        <Navbar/>
        <div className={classes.container}>
            <form className={classes.innerContainer}>
                <h1>Reset Password</h1>
                <span>Enter 6 digit code that you recieve in your email</span>

                <div className={classes.inputContainer}>
                    <span>New Password*</span>
                    <input type="text"
                        placeholder='New Password'
                    />
                </div>
                <div className={classes.inputContainer}>
                    <span>Confirm Password*</span>
                    <input type="text"
                        placeholder='Confirm Password'
                    />
                </div>
                <button>Submit</button>
            </form>
        </div>
        </>
    )
}

export default ResetPassword