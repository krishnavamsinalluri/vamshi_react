import React, { useEffect } from "react";
import axios from "axios";
import Cart from "./Cart";
import "bootstrap/dist/css/bootstrap.min.css"
function Products(){
    var [products,setProducts]=React.useState([])
    var [cards,setCards]=React.useState([])
    useEffect(function(){
    axios.get("https://fakestoreapi.com/products").then(function(res){
           // console.log(res.data)
            setProducts([...res.data])
        
    })

},[]

)
    const deleteCart = (data)=>{
        console.log(data);
    }

    function add(a){
        setCards([...cards,a])
       console.log(a)
    }
    // function dele(b){
    //     var tem=cards.splice(b,1)
    //     setCards([...tem])
    //     console.log(b)
    // }
     return(
            <div className="row">
      
                <div  className="d-flex flex-wrap col">
                {
                    products.length>0&&products.map(function(a,i){
                        return(
                            <div className="box" >
                        <div className="card p-2 mb-2 bg-primary-subtle text-emphasis-primary" style={{width:"15rem", height: '40vh'}}>
                        <img style={{width:"90px"}} src={a.image} className="card-img-top" alt="" />
                        <div className="card-body">
                          <h5 >{a.category}</h5>
                          <p> ${a.price}</p>
                          </div>
                           </div>
                           <div className="card text-bg-secondary">
                           <button className="btn" onClick={()=>{add(a)}}>add to card</button>
                             </div>
                      </div> 
                        )
                    })
                
                }
                
                </div> 
                <div className="col">
                    <Cart price={cards}></Cart>
                </div>
            </div>
             
                       
        
    )
                   
    
}
export default Products