import axios, { Axios } from "axios";
import React, { useEffect } from "react";
function Product(){
    var [datas,setDatas]=React.useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            console.log(res.data)

            setDatas([...res.data])
        })
        
    },[])
    return (
            <div>
            {
                datas.map((a)=>{
                    return (
                        <div className="box">
                            <div className="content">
                       <h1>{a.category}</h1>
                        <img style={{width:"100px"}} src={a.image} alt="" />
                        </div>
                        </div>
                    )
                })
            }
            </div>
    )
}
export default Product