import React, { useEffect } from "react";
import axios from "axios"
function Api(){
    var[Countrys,setCountrys]=React.useState([])
    useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then((res)=>{
        console.log(res.data)
        setCountrys([...res.data])
        })
    },[])
    return(
        <div> 
          <ul className="box">
        {
            Countrys.length>0 && Countrys.map((a)=>{
                return <li>{a.name.common}</li>
            })
        }
        </ul>
        </div>
    )

}
export default Api