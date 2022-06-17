import React, {useContext} from "react";
import { store } from "./lead";

const Numberdisplay=()=>{
    const [data,setData]= useContext(store);
    return(
        <div>
            <h1> The number is {data}</h1>
            {/* <button onClick={()=>setData(data-10)}>decrement</button> */}
        </div>
    )
}
export default Numberdisplay;