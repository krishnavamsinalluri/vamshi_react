import React, { useState } from 'react';


const Cart = (props)=>{
    // console.log(props.price);
    var [cart, setCart] = useState(props.price)
    var temp = cart.id;

    function dele(b){
         var tem=cart.splice(b,1)
            setCart([...tem])
            console.log(b)
         }

    
    return(
        <div className='border'>
            <h1>ADD TO CART</h1>
            {<div className="card">          
                          {
                        props.price.map((b,i)=>{
                            return(
                                <div className='card '>
                            <img  src={b.image}  style={{width:"100px"}}className="card-img-top" alt="" />
                             <h5 >{b.category}</h5>
                                <b> $ {b.price}</b>
                                <button onClick={(b)=>dele(b.id)}>Remove from cart</button>

                                </div>

                            )
                        })
                    
                    }
                    </div>  }
        </div>
    )
};

export default Cart;