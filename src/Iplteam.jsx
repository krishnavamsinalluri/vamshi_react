import React from "react";
import Ipl from "./Team"
function Team(){
    var[team ,setTeam]=React.useState([
        {
        teamname:'Mumbai Indians',
      players:[
        'Rohit',
        'surya',
        'kishan',
        'bhumra',
        'david'
      ]
    },
    {
      teamname:'Royal Challengers Bengaluru',
      players:[
        'Faf',
        'Virat',
        'DK',
        'Maxi',
        'Siraj'
      ]
    },
    {
      teamname:'Sunrisers Hyderabad',
      players:[
        'Kane Williamson',
        'Manish',
        'Bhuvi',
        'Warner',
        'Karan'
      ]
    },
    {
      teamname:'Chennai Super Kings',
      players:[
        'Dhoni',
        'Raina',
        'Jadeja',
        'Rayudu',
        'Ben Stokes'
      ]
    }
  ])


    return(
        <div>
            {
                team.map((play)=>{
                    
                    return(
                        
                        <Ipl players= {play.players}  teamname={play.teamname}></Ipl>
                    )
                })
            }
        </div>
    )
}
  export  default Team;