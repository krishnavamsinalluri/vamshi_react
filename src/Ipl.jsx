
function Ipl(props){
    return(
        <div className="box">
            <h1>{ props.name}</h1>
            {
                props.team.map((a)=>{
                    return(
                        <li>{a}</li>
                    )
                })
            }
        </div>
    )

}
export default Ipl