import React, { useEffect } from "react";
import axios from "axios"
import "bootstrap/dist/css/bootstrap.min.css"
function Products(){
    var [products,setProducts]=React.useState([])
    useEffect(function(){
    axios.get("https://fakestoreapi.com/products").then(function(res){
            console.log(res.data)
            setProducts([...res.data])
    })

},[]

)
    function add(){

    }
    return(
    
            <div  className="d-flex flex-wrap">
                {
                    products.length>0&&products.map(function(a){
                        return(
                            <div className="box" >
                        <div className="card" style={{width:"12rem"}}>
                        <img src={a.image} className="card-img-top" alt="" />
                        <div className="card-body">
                          <h5 >{a.category}</h5>
                          <p>{a.price}</p>
                          <button onClick={()=>{add()}}>add to card</button>
                           </div>
                           </div>
                      </div>)
                    })
                
                    
                
                    

                }
                </div>
        
        

        
        
                
        
    )
    
}
export default Products