import React from 'react'
function Todo(){
    var[players,setPlayers]=React.useState([])
    function ab(){
      
        var x=document.getElementById("dd").value
        setPlayers([...players,x])
    }
        function abc(i){
            var tem=players
            tem.splice(i,1)
            setPlayers([...players])

        }



    return (
        <div className='box'>
            <input type="text" id='dd' />
            <button onClick={ab}>add todo</button>
            {
            players.map((a,i)=>{
                return <li>{a}
                <button onClick={abc}>detele</button></li>
            })
            }
        </div>
    )
}
export default Todo