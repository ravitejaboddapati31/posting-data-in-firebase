import React from "react";
import Routing from "./header";
const Cricketers=()=>{
    return(
        <>
        <Routing/>
        <div className="container">
<div className="row">
    <div className="col-lg-2 mt-3">
        <img src ="rohit.jfif" className="img-fluid img-responsive shadow"/>
        <b className="text-primary text-center">Rohit Sharma<strong className="text-danger">(C)</strong></b>
    </div>
    <div className="col-lg-2 mt-3">
        <img src ="klrahul.jfif" className="img-fluid img-responsive shadow"/>
        <b className="text-primary text-center ">KL Rahul <strong className="text-danger">(VC)</strong></b>
    </div>
    <div className="col-lg-2 mt-3">
        <img src ="avk.jfif" className="img-fluid img-responsive shadow "/>
        <b className="text-primary text-center ">Virat Kohli</b>
    </div>
    <div className="col-lg-2 mt-3">
        <img src ="msky.jfif" className="img-fluid img-responsive shadow"/>
        <b className="text-primary text-center ">Surya Kumar</b>
        </div>
        <div className="col-lg-2 mt-3">
        <img src ="dpant.jfif" className="img-fluid img-responsive shadow"/>
        <b className="text-primary text-center ">Pant<strong className="text-danger">(WK)</strong></b>
        </div>
        <div className="col-lg-2 mt-3">
        <img src ="hp.jfif" className="img-fluid img-responsive shadow"/>
        <b className="text-primary ">Hardik</b>
    </div>


</div>
<div className ="row mt-3">
  
    <div className="col-lg-2">
        <img src ="c1jaddu.jfif" className="img-fluid img-responsive shadow"/>
        <b className="text-primary text-center ">jadeja</b>
    </div>
    <div className="col-lg-2">
        <img src ="cha.jfif" className="img-fluid img-responsive shadow"/>
        <b className="text-primary text-center ">jadeja</b>
    </div>
    <div className="col-lg-2 ">
        <img src ="mshami.jfif" className="img-fluid img-responsive shadow"/>
        <b className="text-primary text-center ">shami</b>
    </div>
    <div className="col-lg-2">
        <img src ="bhuvi.jfif" className="img-fluid img-responsive shadow"/>
        <b className="text-primary text-center ">Bhuvneshwar Kumar</b>
    </div>
    <div className="col-lg-2">
        <img src ="boomboom.jfif" className="img-fluid img-responsive shadow"/>
        <b className="text-primary text-center ">Bumrah</b>
    </div>
    
</div>
        </div>
        </>
    )
}
export default Cricketers;