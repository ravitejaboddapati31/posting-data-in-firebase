import React,{useState} from "react";
const PostData=()=>{
        const[data,setData]=useState({
                name:"  ",
                branch:"  ",
                college:"   ",
                Regno:"   "

        })
        const changeHandler=e=>{
                setData({...data,[e.target.name]:e.target.value});

        }
        const submitHandler= e=>{
          e.preventDefalut();
          fetch('https://ravi-api-70963-default-rtdb.firebaseio.com/data.json',
          {
                  method:'POST',
                  body:JSON.stringify(data),
                  headers:
                  {
                          "context-type":"application/json; Charset=UTF-8",
                  }
                }
                  

          ).then(res=>alert("data has been posted succesfully!")).catch(err=>console.log(err));
                }
    return(
        
            <div className="container ">
            <div className= "row">
            <div className ="col-lg-6 text-center">
           <form onSubmit={submitHandler}>
    <label >NAME:</label>
    <input type="text" className="form-control" name="name" onChange={changeHandler}/>
    <label>Branch:</label>
    <input type="text" className="form-control" branch="branch" onChange={changeHandler}/>
    <label >college:</label>
    <input type="text" className="form-control" college="college" onChange={changeHandler}/>
    <label>regno:</label>
    <input type="number" className="form-control" regno="Regno " onChange={changeHandler}/>
<input type="submit" value="postData" className="btn btn-primary mt-3"/>
</form>
  </div>

            </div>
            </div>
            
        
    )
}
export default PostData;