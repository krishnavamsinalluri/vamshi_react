import React from "react";
function Ipl(props){
    return(
        <div className="inbox">
        <h1 >{props.teamname}</h1>
        {props.players.map((play)=>{return(<li>{play}</li>)})}
        </div>
    )
}
export default Ipl;