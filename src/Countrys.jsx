import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
function Data(){
var [rest,setRest]=React.useState([])
    React.useEffect(function(){
        axios.get("https://restcountries.com/v3/all").then(function(res){
            console.log(res.data)
            setRest([...res.data])

        })
    },[])

    return(
        <div className="box">
            {
             rest.length>0 && rest.map((a,i)=>{
                    return(<div className="main">
                        <li>{a.name.common}</li>
                        <img style={{width:"100px"}} src={a.flags[0]} alt="" />
                        <p>{a.population}</p>
                    </div>)
                })
            }
        </div>
    )
}


export default  Data