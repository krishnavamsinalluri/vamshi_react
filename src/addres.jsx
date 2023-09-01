import React from "react";
var Addres =React.forwardRef(function(props,ref1){
    var counnRef=React.useRef()
    function focusCounn(e){
        if(e.key==="Enter"){
            counnRef.current.focus()
        }
    }
    return(
        <div className="box">
            <h1>addrres</h1>
            
               Details :<input type="text" ref={ref1}  onKeyUp={(e)=>{focusCounn(e)}}/>
                <br />
               Address: <input type="text"  ref={counnRef}/>

        
        </div>
    )
})




export default Addres