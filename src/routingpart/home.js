import React from "react";

import Routing from "./header";
const HomeC=()=>{
    return(
        <>
            <Routing/>
            <h1 className="text-center text-warning mt-5">cricketers page!</h1>
            <div className="text-center">
            <img src ="india1.jfif" className="img-fluid img-responsive shadow" width="600px" height="300px"/>
        </div>
        </>
    )

}
export default HomeC;