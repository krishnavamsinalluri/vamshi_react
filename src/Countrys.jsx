import axios from "axios"
import { Link, Outlet } from "react-router-dom"
import React, { useEffect, useState } from "react"
function Country(){
    var[data,setData]=useState([])
    useEffect(()=>{
        axios.get('https://restcountries.com/v3/all').then((res)=>{
         /// console.log(res.data)
            setData([...res.data])
        })
    },[])
    return(
        <div>
            <div className="d-flex flex-wrap ">
            {
                data.map((a)=>{
                    return(
                    <div className="card p-2 m-3" style={{width:"50%"}}>
                        <h3>{a.name.common}</h3>
                        <img  width={"180px"} src={a.flags[0]} alt="" />
                        <Link to={"/countrys/countrysdeatils/"+a.name.common}>Read more </Link>
                    </div>
                    )
                })
            }
 
            </div>
            <div style={{width:"50px"}}>
                <h1>detais</h1>
                <Outlet></Outlet>
            </div>
      </div>
    )

}
export default Country