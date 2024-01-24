import axios from "axios"
import React, {useState,useEffect} from "react"
import { useParams } from "react-router-dom"
import { Outlet } from "react-router-dom"
function Countrydeatils(){

   var x= useParams()
    var[details,setDetails]=useState({})
    useEffect(()=>{
        axios.get("https://restcountries.com/v3/name/"+x.cname).then((res)=>{
          ///  console.log(res.data)
            setDetails([...res.data])
        })
    },[x.cname])
    return(
        <div>
            {console.log(details)}
            {
                details.length>0 && details.map((b)=>{
                    return (
                        <div>
                            <h1>{b.capital}</h1>
                            <h1>{b.population}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Countrydeatils