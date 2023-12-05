import React from 'react';


const Cart = (props)=>{
    var temp = props;

    // function dele(b){
    //      var tem=temp.splice(b,1)
    //         setCards([...tem])
    //         console.log(b)
    //      }

console.log( "id",temp.id)
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