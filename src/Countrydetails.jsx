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
                        <div className="b-5">
                            <h1>{b.name.common}</h1>
                            <img width={"100px"} src={b.flags[0]} alt="" /><br/>
                            <b> capital:{b.capital}</b><br />
                            <b>population:{b.population}</b>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Countrydeatils