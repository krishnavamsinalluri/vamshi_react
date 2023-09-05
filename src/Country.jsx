import React, { useEffect } from "react";
import axios from "axios"
import { Link,Outlet } from "react-router-dom";
import bootstarp from 'bootstrap/dist/css/bootstrap-grid.min.css'
function Api(){
    var[Countrys,setCountrys]=React.useState([])
    useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then((res)=>{
        console.log(res.data)
        setCountrys([...res.data])
        })
    },[])
    return(
        <div className="display"> 
    <div className="box">

        {
            Countrys.length>0 && Countrys.map((a)=>{
                return <li>
                    <Link to={"details/"+a.name.common}>{a.name.common}</Link>
                </li>
            })
        }
    </div>
        <div>
        <Outlet></Outlet>

            
            </div>        
        </div>
    )


}
export default Api