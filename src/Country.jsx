import React, { useEffect } from "react";
import axios from "axios"
import { Link,Outlet } from "react-router-dom";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
function Api(){
    var[Countrys,setCountrys]=React.useState([])
    useEffect(()=>{
        axios.get("https://restcountries.com/v3/all").then((res)=>{
        console.log(res.data)
        setCountrys([...res.data])
        })
    },[])

        function abc(){
            var sea=document.getElementById('se').value
            var co=Countrys.filter((a)=>{
                return(a.name.common.toLowerCase().startsWith(sea))
            })
            console.log(co)
            setCountrys(co)  
        }

    return(
        <div className="display"> 
    <div className="box">
        <input type="text" onChange={abc} id="se" placeholder="search countrys" />

        {
            Countrys.length>0 && Countrys.map((a)=>{
                return <li>
                    <Link to={"details/"+a.name.common}>{a.name.common}</Link>
                </li>
            })
        }
    </div>
        <div>
        <Outlet>
            
        </Outlet>
            </div>        
        </div>
    )


}
export default Api