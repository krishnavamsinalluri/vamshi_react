import React from 'react';


const Cart = (props)=>{

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
                                <button onClick={()=>props.removeItem(b)}>Remove from cart</button>

                                </div>

                            )
                        })
                    
                    }
                    </div>  }
        </div>
    )
};

export default Cart;