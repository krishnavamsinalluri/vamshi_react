import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
function Score(){
    var [runs,setRuns]=React.useState(0)
    var[wikect,setWikect]=React.useState(0)
    return(
        <div className="box">
            <h1>Cricket Score Card</h1>
            <h1>{runs}/{wikect}</h1>
        
        
            <button type="button" class="btn btn-secondary"  onClick={()=>{setRuns(runs+1)}}>One run</button>
            <button  type="button" class="btn btn-secondary" onClick={()=>{setRuns(runs+1)}}>WideBall</button>
            <button  type="button" class="btn btn-secondary"onClick={()=>{setRuns(runs+2)}}>Tworuns</button><br></br>
            <button type="button" class="btn btn-secondary" onClick={()=>{setRuns(runs+4)}}>Four</button>
            <button type="button" class="btn btn-secondary" onClick={()=>{setRuns(runs+6)}}>Six</button>
             <button type="button" class="btn btn-secondary" onClick={()=>{setWikect(wikect+1)}}>Wicket</button>
            

            

    </div>
    )
   
}
export default Score