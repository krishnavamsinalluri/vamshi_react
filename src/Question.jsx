import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from 'bootstrap/dist/css/bootstrap.min.css';
var Answer=({title,info})=>{
var[showdata,setShowdata]=React.useState(false)
    return(
        <div>
            <h1>{title}</h1>
           < button className='btn' onClick={() => setShowdata(!showdata)}>
          {showdata ?<AiOutlineMinus/>:<AiOutlineMinus/> }
        </button>
        {showdata &&<p>{info}</p> }

        </div>
    )

}
export default Answer
