import React from "react";
import Routing from "./header";

const Schedule=()=>{
    return(
        <>
        <Routing/>
        <div className='container'>
        <h1 className='text-center text-primary'>Match Schedule For ODI & T20</h1>
        
       {/* <p> <b className="text-danger bg-white">- INDIA </b><i className="fa fa-flag" style={{'color':'blue'}}></i><b className="text-black"> VS </b><b className="text-success">SOUTH AFRICA</b> <i className="fa fa-flag" style={{'color':'green'}}></i> </p> */}
       <table className="table table-responsive table-hover">
       <tr>
           <th className="text-center text-dark">S.No</th>
           <th  className="text-center text-dark">Team </th>
           <th  className="text-center text-dark">Format</th>
           <th className="text-center text-dark">Date</th>
           <th className="text-center text-dark">Stadium Name</th>
           <th className="text-center text-dark">Player Of The Match</th>
           <th  className="text-center text-dark">Result</th>
           
       </tr>
<tbody>
    <tr>
        <td className="text-center text-danger">1</td>
        <td className="text-center text-danger">IND VS SA</td>
        <td className="text-center text-danger">ODI</td>
<td className="text-center text-danger">05/23/2022</td>
<td className="text-center text-danger">@Eden Gardens</td>
<td className="text-center text-danger"><img src ="klrahul.jfif" className="img-fluid rounded img-responsive" style={{'width':'90px','height':'80px'}}></img>KL Rahul</td>
<td className="text-center text-primary"><b>India won by 4 wickets</b></td>

    </tr>
    <tr>
        <td className="text-center text-danger">2</td>
        <td className="text-center text-danger">IND VS SA</td>
        <td className="text-center text-danger">ODI</td>
<td className="text-center text-danger">05/26/2022</td>
<td className="text-center text-danger">@Brabourne</td>
<td className="text-center text-danger"><img src ="rabada.jfif" className="img-fluid rounded img-responsive" style={{'width':'90px','height':'80px'}}/>Rabada</td>
<td className="text-center text-success"><b>SA won by 22 RUNS</b></td>

    </tr>
    <tr>
        <td className="text-center text-danger">3</td>
        <td className="text-center text-danger">IND VS SA</td>
        <td className="text-center text-danger">ODI</td>
<td className="text-center text-danger">05/29/2022</td>
<td className="text-center text-danger">@Wankhede</td>
<td className="text-center text-danger"><img src ="hp.jfif" className="img-fluid rounded img-responsive" style={{'width':'90px','height':'80px'}}></img>Hardik Pandey</td>
<td className="text-center text-primary"><b>IND won by 76 RUNS</b></td>

    </tr>
    <tr>
        <td className="text-center text-danger">1</td>
        <td className="text-center text-danger">IND VS SA</td>
        <td className="text-center text-danger">T20</td>
<td className="text-center text-danger">06/3/2022</td>
<td className="text-center text-danger">@Eden-</td>
<td className="text-center text-danger"><b>----</b></td>
{/* <td className="text-center text-danger"><img src ="hp.jfif" className="img-fluid rounded img-responsive" style={{'width':'90px','height':'80px'}}></img>Hardik Pandey</td> */}
<td className="text-center text-warning"><b>pending!</b></td>

    </tr>
    <tr>
        <td className="text-center text-danger">2</td>
        <td className="text-center text-danger">IND VS SA</td>
        <td className="text-center text-danger">T20</td>
<td className="text-center text-danger">06/5/2022</td>
<td className="text-center text-danger">@Ahamadabad</td>
<td className="text-center text-danger"><b>----</b></td>
{/* <td className="text-center text-danger"><img src ="hp.jfif" className="img-fluid rounded img-responsive" style={{'width':'90px','height':'80px'}}></img>Hardik Pandey</td> */}
<td className="text-center text-warning"><b>pending!</b></td>

    </tr>
    <tr>
        <td className="text-center text-danger">3</td>
        <td className="text-center text-danger">IND VS SA</td>
        <td className="text-center text-danger">T20</td>
<td className="text-center text-danger">06/7/2022</td>
<td className="text-center text-danger">@Wankhede</td>
<td className="text-center text-danger"><b>----</b></td>
{/* <td className="text-center text-danger"><img src ="hp.jfif" className="img-fluid rounded img-responsive" style={{'width':'90px','height':'80px'}}></img>Hardik Pandey</td> */}
<td className="text-center text-warning"><b>pending!</b></td>

    </tr>

</tbody>

       </table>
            
            

       
    </div>
    </>
    )
}
export default Schedule;