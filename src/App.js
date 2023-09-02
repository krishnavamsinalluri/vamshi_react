
import React from "react"
import './App.css';
import Ipl from "./Ipl"

function App() {
  
  const [iplteams, setIplteams] = React.useState([
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
  return (
    <div className='box'>
      <h1>Ipl Team</h1>
      {
        iplteams.map((team)=>{
          return <Ipl team={team.players} name={team.teamname}></Ipl>
        })
      }
    </div>
  );
}

export default App;