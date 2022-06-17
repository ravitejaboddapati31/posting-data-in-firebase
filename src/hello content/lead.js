import React, {createContext,useState} from "react";
import Numberdisplay from "./numberdispaly";
export const store =createContext();

const Lead =()=>{
    const [data,setData]=useState(100);
    return(
        <store.Provider  value ={[data,setData]}>

        <>

        
            <Numberdisplay/>
            <button onClick={()=>setData(data+1)}>clikme</button>
              </>  
            
        </store.Provider>
    )
}
export default Lead;