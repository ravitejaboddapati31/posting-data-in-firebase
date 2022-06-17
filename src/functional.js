import React from "react";
const Home = (props) =>{
    return(
        <div className="container">
        <center>
               <h1 className="text-center">HELLO:{props.name}</h1>
               {/* <h2 className="text-center">Hello:{props.text}</h2> */}
               
        </center>

        </div>
    )
}
export function Hellomsg(props){
    return(
        <div>
            <h1 className="text-danger">Welcome to {props.text}</h1>
            <h2 className="text-center">{props.children}</h2>
        </div>
    )

}
    


export default Home;