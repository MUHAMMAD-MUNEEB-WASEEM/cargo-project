import React from "react";
import Navbar from "../navbar/Navbar";
import LandingFront from "./LandingFront";
import LandingDriver from "./LandingDriver";
import LandingClient from "./LandingClient";
import LandingOpportunity from "./LandingOpportunity";
import TopDriver from "./TopDriver";
import TopClient from "./TopClient";
import EstimateCargo from "./EstimateCargo";
import Footer from "./Footer";


const LandingPage =()=>{
    return(
      
       <div>
         <Navbar/>
         <LandingFront/>
         <LandingClient/>
         <LandingDriver/>
         <LandingOpportunity/>
         <TopDriver/>
         <TopClient/>
         <EstimateCargo/>
         <Footer/>
       </div>
    )
}

export default LandingPage