function Cart(props){
    console.log("a:"+props)
    return (
        <div className="border" >
            <h1>Add to Cart</h1>
            {
                props.price.map((b)=>{
                    return (
                        <div >
                            <h1>{b.category}</h1>
                            <img style={{width:"100px"}} src={b.image} alt="" />
                            <button onClick={()=>{}}>remove</button>
                        </div>
                    )
                })
            }
      </div>
    )
}
export default Cart