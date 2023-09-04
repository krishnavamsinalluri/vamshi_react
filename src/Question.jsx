import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
var Answer=({title,info})=>{
var[showdata,setShowdata]=React.useState(false)
    return(
        <div>
            <h1>{title}</h1>
           < button className='btn' onClick={() => setShowdata(!showdata)}>
          {showdata ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
        {showdata &&<p>{info}</p> }

        </div>
    )

}
export default Answer
