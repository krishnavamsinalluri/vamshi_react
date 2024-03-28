import React from "react";
function Inceriment(){
    var[incer,setIncer]=React.useState(0)
  var[decris,setDecris] = React.useState(0)

    function ab(){
        setIncer(incer+1)
    }

    return (
        <div className="box">
            <button onClick={ab}><h1>{incer}</h1>
</button>
            <button onClick={()=>{setDecris(decris-1)}}>deceriment</button>
            <h1>{decris}</h1>
        </div>
    )

}
export default Inceriment