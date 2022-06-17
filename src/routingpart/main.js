import React from "react";
import {Routes, Route, BrowserRouter } from "react-router-dom";
import HomeC from "./home";
import Foo from "./footer";
import Cricketers from "./cricketers";
import Pagenotfound from "./pagenotfound";
import Schedule from "./schedule";




const Mainfile=()=>{
    return(
<BrowserRouter>
    <Routes>
        <Route path="/" element={<HomeC/>}/>
        <Route path="/crickters" element={<Cricketers/>}/>
        <Route path="/schedule" element={<Schedule/>}/>
        <Route path="*" element={<Pagenotfound/>}/>
        <Route path="/footer" element={<Foo/>}/>
    </Routes>
</BrowserRouter>

   


    )

}
export default Mainfile;