import React from "react";
function Inceriment(){
    var[incer,setIncer]=(0)
    function ab(){
        incer=++1
        setIncer()
    }

    return (
        <div>
            <button onClick={ab}>Inceriment</button>
        </div>
    )

}
export default Inceriment