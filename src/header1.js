import React from "react";
const Header1=(setState)=>{

    const handleChange=((evt)=>{

       let newTitle = evt.target.value;

       this.setState.changeTitle(newTitle);

   })

   return(

        <div className='makeCenter'>

               <header >

            

                  <Title titleTitle={setState.headerTitle}/>

                  <input type='text' value={setState.headerTitle}

                   onChange={handleChange.bind(this)}/>

               </header>

          </div>

   )

}



export default Header1;