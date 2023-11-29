import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Data(){
var [rest,setRest]=React.useState([])
    React.useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then(function(res){
            console.log(res)

        })
    },[])

    return(
        <div>
            {
                rest.map((a,i)=>{
                    return(<li>{a}</li>)
                })
            }
        </div>
    )
}


export default  Data