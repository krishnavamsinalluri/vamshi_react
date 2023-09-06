import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
function Counytrydetails(){
    var {cname}=useParams
    var[countrysdetails,setCountrysdetails]=React.useState(null)
    useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/name/"+cname).then((res)=>{
            setCountrysdetails({...res.data[0]})
        })
    },[cname])
    return(
        <div className="box">
            {
                countrysdetails && ( 
                    <div>  
                  <h1>{countrysdetails.name.common}</h1>
            
                    </div>
  
                )
            }

        </div>
    )

}
export default Counytrydetails