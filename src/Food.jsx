import React, { useEffect } from "react";
import axios from"axios";

function Food(){
    var[items,setItems]=React.useState([])
  React.useEffect(function(){
        axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then(function(res){
        console.log(res.data.meal)
        setItems([...res.data.meal])
    })
    },[])
    



    return(
        <div>
            {
                items.map((s)=>{
                    return(
                        <li></li>
                    )
                })
            }

        </div>
    )

}
export default Food