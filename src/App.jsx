import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
function App(){
    
    
    return(
        
        <div className="input-group input-group-lg">

    <form onSubmit={"event.preventDefault()"}>
        <h1>from vadilation</h1>
    User name:  <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg"/>

       <br />
       password:<input type="text" id="d2" class="form-control" placeholder="Enter Password" name="password" required pattern="^(?=.*[0-9])(?=.*[- ?!@#$%^&*\/\\])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9- ?!@#$%^&*\/\\]{8,30}$"/>



         <br />
             <button class="btn btn-primary" >save</button> 


    </form>
    </div>)

}
export default App