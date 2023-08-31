import React from "react";
import axios from "axios";
function Planner(){
    var[toures,setToures]=React.useState([])

    React.useEffect(
        function(){
            axios.get('https://course-api.com/react-tours-project').then(function(res){
                console.log(res.data)
                setToures([...res.data])
            })},[] 
    )
    function abc(i){
        var tem=[...toures]
        tem.splice(i,1)
        setToures([...tem,...toures])
    }

    return(
        <div >
            {
                toures.map((a,i)=>{
                    return(
                
                       <div className="box">
                        <img src={a.image} style={{width:"400px"}} className="inbox"/>
                         <h2>{a.name} </h2>
                        <p>{a.info}</p>
                        <span> ${a.price}</span><br />
                        <button className="content" onClick={()=>{abc(i)}}>Not interstent</button>
                    
                                                
                        </div>
                        


                    )
                })
            }
        </div>
    )

    
}
export default Planner