import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
function Score(){
    var [runs,setRuns]=React.useState(0)
    var[wikect,setWikect]=React.useState(0)
    return(
        <div className="box">
            <h1>Cricket Score Card</h1>
            <h1>{runs}/{wikect}</h1>
        
        
            <button type="button" class="btn btn-secondary"  onClick={()=>{setRuns(runs+1)}}>NO run</button>
            <button  type="button" class="btn btn-secondary" onClick={()=>{setRuns(runs+1)}}>wideBall</button>
            <button  type="button" class="btn btn-secondary"onClick={()=>{setRuns(runs+2)}}>Tworuns</button><br></br>
            <button type="button" class="btn btn-secondary" onClick={()=>{setRuns(runs+4)}}>four</button>
            <button type="button" class="btn btn-secondary" onClick={()=>{setRuns(runs+6)}}>six</button>
             <button type="button" class="btn btn-secondary" onClick={()=>{setWikect(wikect+1)}}>wikect</button>
            

            

    </div>
    )
   
}
export default Score