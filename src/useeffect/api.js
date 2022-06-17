import React ,{useState,useEffect}from'react';
const UsingApi=()=>{
    const [data,setData]=useState(null);
    useEffect(()=>{
fetch("https://jsonplaceholder.typicode.com/photos")
.then(response=>response.json())
.then((data)=>setData(data));
    }, []);
return(
    <>
        {
           data.map((info)=>{
    
                <p key ={info.id}>
                <h1>{info.title}</h1>
                <h1> data=data+<img src =""></img></h1>
                </p>

               
            
            })
        }
        
    </>
)
    }

export default UsingApi;
    

