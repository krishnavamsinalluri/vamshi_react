import axios from "axios";
import React, { useEffect } from "react"
function Counties(){

    var[country,setCountry]=React.useState([])
    React.useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then(function(res){
            console.log(res.data)
            setCountry([...res.data])
        })

    },[])
    return(
        <div>
            {
               country.length>0  && country.map((a)=>{
                    return <li>{a.name.common}</li>
                })
            }
        </div>
    );
}
export  default Counties