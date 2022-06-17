import React,{useState} from "react";
import Header from "./header";
const Layout = () =>{
    const[data,setData]=useState({
name:'raviteja',
age:'25years',
fullname:"boddapati"
    });
const{name,age}= data;
    return(
        <div>
            <h1>hello react</h1>
            {/* <h2>welcome:{data.name} and {data.age}</h2> */}
            <Header name={name}age={age}/>
        </div>
    )

    }
export default Layout;
