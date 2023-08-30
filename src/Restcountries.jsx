import React from "react";
import axios from "axios"
function Country(){
     var[Countries,setCountries]=React.useState([]) 
    React.useEffect(
        function(){
        axios.get("https://restcountries.com/v3/all").then(function(res){
            console.log(res.data)
            setCountries([...res.data])
         })},[])
         function ass(){
            Countries.sort(function(a,b){
                var card1=a.name.common
                var card2=b.name.common
                if(card1<card2){
                    return -1
                }
                if(card1>card2){
                    return 1
                }
                return 0


            })
            setCountries([...Countries])

         }
         function dec(){
            Countries.sort(function(a,b){
                var card1=a.name.common
                var card2=b.name.common
                if(card1<card2){
                    return 1
                }
                if(card1>card2){
                    return -1
                }
                return 0

            })
            setCountries([...Countries])

         }
         function se(){
            var inp=document.getElementById("in").value
             var u=Countries.filter((c)=>{
                return (c.name.common.startsWith(inp))
            })
            console.log(u)
            setCountries([...Countries])
         }
 
         
     
   return(
        <div className="box">
            
             <input  type="text" onKeyUp={se} placeholder="search" id="in"></input><br /><br />

            <button onClick={ass}>assending order</button>
            <button onClick={dec}>dessing order</button>
            {
                
                Countries.length>0 && Countries.map((a)=>{
                    return <li>{a.name.common}
                                                       </li>
                
                })
                
            }
        
        </div>
     )

}
export default Country