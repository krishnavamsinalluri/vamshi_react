import React from "react";
function Todolist(){
    var[toli,setToli]=React.useState(["vamsi","sai","ganesh"])

    function de(i){
        var tem=[...toli]
        tem.splice(i,1)
        setToli([...tem])
    }
    return(
        <div className="box">
            <h1>Players</h1>
            
               <div>
                    {
                    
                    toli.map((lis,i)=>{
                        return(
                            <li className="inbox">{lis} <button onClick={()=>{de(i)}}>delte</button></li>
        
                        )
                    })
     
                    }



               </div> 
               
            

        </div>
    )
}
export default Todolist