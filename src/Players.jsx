import React from "react";
function Player(){
    var[players,setPlayers]=React.useState([])
    function abc(){
        var x=document.getElementById("dd").value
        setPlayers([...players,x])
    }
    function ab(i){
        var tem=players
    tem.splice(i,1)
    setPlayers([...players])
    }

    return(
        <div className="box"> 
        <h1>Players</h1>
            <input type="text" id="dd" />
            <button onClick={abc}>add players</button>
            {
                players.map((a,i)=>{
                    return(
                        <li>{a}
                        <button onClick={()=>{ab(i)}}>out</button>
                        </li>
                    )

                    
                })
            }
        </div>
    )

}
export default Player