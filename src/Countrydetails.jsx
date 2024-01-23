import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
function Counytrydetails(){
    var {cname}=useParams()
    var[countrysdetails,setCountrysdetails]=React.useState(null)
    useEffect(()=>{
        axios.get("https://restcountries.com/v3.1/name/"+cname).then((res)=>{
            setCountrysdetails({...res.data[0]})
        })
    },[cname])

    return(
        <div>
            {
                countrysdetails && ( 
                    <div className="card">    
                    <img src={countrysdetails.flags.png} alt="" />
                    <div className="card-body bg-primary">
                 <h1 >{countrysdetails.name.common}</h1>
                 <p><b>Capital:</b>{countrysdetails.capital}</p>
                 <p><b>Population:</b>{countrysdetails.population}</p>
                 <p><b>languages:</b>{countrysdetails.languages.eng}</p>
                  </div>
                  </div>
                )
            }

        </div>
    )
}
export default Counytrydetails