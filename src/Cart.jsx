import React, { useState } from 'react';


const Cart = (props)=>{
    // console.log(props.price);
    var [cart, setCart] = useState(props.price)

    function dele(i){
        //console.log(i)
         var tem=cart.splice(i,1)
            setCart([...tem])
            console.log(tem)
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
                                <button onClick={()=>dele(i)}>Remove from cart</button>

                                </div>

                            )
                        })
                    
                    }
                    </div>  }
        </div>
    )
};

export default Cart;