import React from "react";
import axios from"axios";

function Food(){
    axios.get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood").then(function(res){
        console.log()
    })



    return(
        <div>

        </div>
    )

}
export default Food