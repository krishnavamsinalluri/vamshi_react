import React from "react";
function Ipl(){
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
        <div className="box">
            {
                team.map((play)=>{
                    
                    return(
                        
                        <Li className="box"> playersname= {play.players}  teamnames={play.teamname}</Li>
                    )
                })
            }
        </div>
    )
}
  export  default Ipl;