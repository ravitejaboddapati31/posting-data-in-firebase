import React from "react";
class Lifecycle extends React.Component{

    constructor(props){
    super(props)
    this.state={
        show:true,
        count:0,
        red:100

    };
    }
    delHeader=()=>{
        this.setState({show:false});
    }
    
    componentDidMount(){ //for getting an api calls
        console.log('component is here')
    }
    componentDidUpdate(){//statevalue r updated it will undate 
 console.log("component upated means state value changing")
    }

    render(){
        let myheader;
        if(this.state.show){
            myheader=<Child/>;
        }
        return(
<>
    <center>
        {myheader}
        <button type ="button" className ="btn btn-danger" onClick={this.delHeader}>Delete</button>
        <hr/>
        <h3>count:{this.state.count}</h3>
        
        <button type="button" className ="btn btn-warning" onClick={()=>this.setState({count:this.state.count+1})}>Increment</button>
        
         <h3>red:{this.state.red}</h3>
        <button type="button" className ="btn btn-warning" onClick={()=>this.setState({red:this.state.red-10})}>decrement</button> 
    </center>

</>
        )
    }
}
class Child extends React.Component{
    componentWillUnmount(){
        console.log("component deleted succesfully!");
    }
    render(){
        return(
            <h1>HELLO RAVITEJA</h1>
        )
    }
}
export default Lifecycle;