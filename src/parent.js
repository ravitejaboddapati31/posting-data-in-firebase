import React from 'react';
import Child from './child';
export default class Parent extends React.Component{
    handleClick(){
        this.ChildRef.myFun(" parent data here! ")
    }
    render(){
        console.log('render from the parent!')
        return(
            <div>
                <h1>IM PARENT</h1>
                <Child ref={(input)=>{this.ChildRef=input}}/>
                <buttton onClick={this.handleClick.bind(this)} className="btn btn-primary" >PASSING THE DATA TO CHILD</buttton>
            </div>
        )
    }
}