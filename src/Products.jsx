import axios, { Axios } from "axios";
import Cart from "./Cart";
import React, { useEffect } from "react";
function Product(){
    var [datas,setDatas]=React.useState([])
    var [cards,setCards]=React.useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            console.log(res.data)

            setDatas([...res.data])
        })
        
    },[])
    function add(a){
        setCards([...cards,a])
    }
    return (
            <div className="row">
                <div className="d-flex flex-wrap col-8">
                {
                datas.map((a)=>{
                    return (
                        <div className="card m-3">
                       <h1 className="card-titte" >{a.category}</h1>
                        <img style={{width:"100px"}} src={a.image} alt="" />
                        <button className="btn" onClick={()=>{add(a)}}>add to cart</button>
                        </div>
                    )
                })
            }

                </div>

                <div className="col">
                    <Cart price={cards}></Cart>
                </div>

           </div>
    )
}
export default Product