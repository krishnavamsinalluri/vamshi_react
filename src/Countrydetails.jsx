import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
function Counytrydetails(){
    var {cname}=useParams();
    var[Countrysdetails,setCountrysdetails]=useState({})
    useEffect(()=>{
        axios.get("htpps://restcountries.com/v3.1/name"+cname).then((res)=>{
            setCountrysdetails({...res.data[0]})
        })
    },[cname])
    return(
        <div className="box">
            {
                Countrysdetails && ( 
                    <div>  
                  <h1>{Countrysdetails.name.common}</h1>
                    </div>
  
                )
            }

        </div>
    )

}
export default Counytrydetails