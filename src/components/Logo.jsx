import React from "react";
import Logod from "../assets/logo.png";

function Logo({width = "100px"}){

    return(
        <div> <img src={Logod}  width={40} className="rounded-full" alt="logo"  /></div>
    )
}

export default Logo