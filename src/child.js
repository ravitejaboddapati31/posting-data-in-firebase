import React from 'react';
export default class Child extends React.Component{
    render(){
        console.log("rendering of the child ");
        return(
        
            <div className='container'>
                <h1>child component</h1>

            </div>
        )
    }
    myFun(data){
        console.log("hello I'm from child component"+data);
    }
}