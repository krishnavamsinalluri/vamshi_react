import React from "react";
function Canner(){
   var [course,setCoure]=React.useState(
    [
       "react.js","angular","html",'css'
    ]
   )
    


    return(
        <div>
            {
                course.map((a)=>{
                    return <li>{a}</li>
                })
            }
        </div>
    )

    

}
export default Canner