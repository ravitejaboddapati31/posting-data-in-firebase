import React from "react";
import Footer1 from "./footer1";
import Header1 from "./header1";
const Layout1=(state,props)=>{

    const  changeHeaderTitle=((newTitle)=>{
  
         this.setState({title:newTitle}); //
  
     })
  
      return(
  
          <div>
  
               <Header1 headerTitle={state.title} changeTitle={changeHeaderTitle.bind(this)}/>
  
               <div id='simpleDiv'>
  
                      This is my first react Training
  
                 </div>
  
              <Footer1 />
  
              </div>
  
      )
  
  }
  
  
  
  export default Layout1;