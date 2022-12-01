import React from 'react'
import Navbar from '../../navbar/Navbar'
import classes from "./CargoEstimate.module.css"

const CargoEstimate = () => {
    return (
        <>
        <Navbar/>
        <div className={classes.container}>
            <h1>Calculate Your Cargo Cost</h1>
            <div className={classes.innerContainer}>
                <form className={classes.signupForm}>
                    <div className={classes.inputContainer}>
                        <div>
                            <span>Quantity*</span>
                            <input type="text"
                                placeholder='Enter your quantity'
                            />
                        </div>

                        <div>
                            <span>Unit Weight*</span>
                            <input type="text"
                                placeholder='Enter unit weight'
                            />
                        </div>
                        <div>
                            <span>Total Weight*</span>
                            <input type="text"
                                placeholder='Enter total weight'
                            />
                        </div>
                    </div>
                    <div className={classes.inputContainer}>
                        <div>
                            <span>Width*</span>
                            <input type="text"
                                placeholder='Sm'
                            />
                        </div>

                        <div>
                            <span>Height*</span>
                            <input type="text"
                                placeholder='10m'
                            />
                        </div>
                        <div>
                            <span>Length*</span>
                            <input type="text"
                                placeholder='3m'
                            />
                        </div>
                    </div>
                    <div className={classes.inputContainer}>
                        <div>
                            <span>Estimated Distance*</span>
                            <input type="text"
                                placeholder='6500 km'
                            />
                        </div>

                        <div>
                            <span>Email*</span>
                            <input type="text"
                                placeholder='Your Email'
                            />
                        </div>
                        <div>
                            <span>Your Name*</span>
                            <input type="text"
                                placeholder='Enter your Name'
                            />
                        </div>
                    </div>
                    <div className={classes.checkboxContainer}>
                        <div className={classes.check1}>
                            <input type="checkbox" />
                            <span>require crew for unloading</span>
                        </div>
                        <div className={classes.check2}>
                            <input type="checkbox" />
                            <span>require crew for loading</span>
                        </div>
                    </div>
                    <div className={classes.btn}>
                        <button>CALCULATE</button>
                    </div>
                </form>
                <h2>Your Total Cost will be: <span style={{ fontWeight: "bold", color: "orangered", fontSize: "25px" }}>$2200</span></h2>
            </div>
        </div>
        </>
    )
}

export default CargoEstimate