import React, { useEffect } from "react";
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
function Products(){
    var [products,setProducts]=React.useState([])
    var [cards,setCards]=React.useState([])
    useEffect(function(){
    axios.get("https://fakestoreapi.com/products").then(function(res){
            console.log(res.data)
            setProducts([...res.data])
    })

},[]

)
    function add(){
        setCards([...cards,products])
    }
    return(
            <div className="w-100">
                
                <div  className="d-flex flex-wrap w-75">
                {
                    products.length>0&&products.map(function(a){
                        return(
                            <div className="box w-25" >
                        <div className="card " style={{width:"18rem"}}>
                        <img  src={a.image}  style={{width:"100px"}}className="card-img-top" alt="" />
                        <div className="card-body">
                          <h5 >{a.category}</h5>
                          <p>{a.price}</p>
                          </div>
                           </div>
                           <div className="card">
                           <button onClick={()=>{add()}}>add to card</button>

                             </div>

                      </div>
                        
                        
                        )
                    })
                
                }
                </div> 
                <div className="w-25">
                    <div className="card">          
                          {
                        cards.map((b)=>{
                            return(
                                <b>{b.category}</b>
                            )
                        })
                    }
                    </div> 
                    

                </div>
            </div>
             
                       
        
    )
                   
    
}
export default Products