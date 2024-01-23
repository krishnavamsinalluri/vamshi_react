import axios, { Axios } from "axios";
import React, { useEffect } from "react";
function Product(){
    var [data,setData]=React.useState()
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            setData([...res.data])
            console.log(res)
        })
        
    },[])
    return (
            <div>

            </div>
    )
}
export default Product