import React from "react";
import axios from "axios";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
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
            <div className="card">
            {
                toures.map((a,i)=>{
                    return(
                
                       <div className="card m-3" style={{width: "25rem"}}>
                        <img src={a.image} style={{width:"25rem"}} className="card-img-top"/>
                        <div className="card-body">          
                         <h2>{a.name}
                         <span className="badge bg-secondary"> ${a.price}</span><br />

                          </h2>
                        <p>{a.info}</p>
                        <button className="btn btn-outline-danger" align="center"     onClick={()=>{abc(i)}}>Not interstent</button>
                    
                                                
                        </div>
                        </div>

                        


                    )
                })
            }
 
            </div>
       </div>
    )

    
}
export default Planner