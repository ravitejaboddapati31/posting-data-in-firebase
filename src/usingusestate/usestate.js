import React,{useState} from "react";
const Hold =()=>{
    const[data,setData]=useState({
        ProductName:'Dell',
        ProductType:"inspirion 5502",
        ProductCore:"i5",
        ProductGenaration:"11thgen",
        productReviews:"good",
        rap:"rapo1",
        rap2:1
        

    });
    const{ProductName,ProductType,ProductCore,ProductGenaration,productReviews,rap,rap2}= data;
    return(
<div>
    <div className="container">
        <table className="table table-hover tasble-stripped table-borderd">
            <tr>
                <th className="bg-warning text-center">ProductName</th>
                <th className="bg-warning text-center">ProductType</th>
                <th className="bg-warning text-center">ProductCore</th>
                <th className="bg-warning text-center">ProductGenaration</th>
                <th className="bg-warning text-center">productReviews</th>
                <th className="bg-warning text-center">rapo</th>
                <th className="bg-warning text-center">robo</th>
            </tr>
            <tbody className="bg-primary text-white text-center">
                <tr>
                    <td>{ProductName}</td>
                    <td>{ProductType}</td>
                    <td>{ProductCore}</td>
                    <td>{ProductGenaration}</td>
                    <td>{productReviews}</td>
                    <td>{rap}</td>
                    <td>{rap2}</td>

                </tr>
            </tbody>
        </table>
    </div>
</div>

    )
}
export default Hold;