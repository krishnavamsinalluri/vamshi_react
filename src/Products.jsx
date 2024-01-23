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
                        <h1>{}</h1>
                    )
                })
            }
            </div>
    )
}
export default Product