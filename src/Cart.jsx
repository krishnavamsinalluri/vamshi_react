function Cart(props){
    console.log("a:"+props)
    return (
        <div >
            <h1>Add to Cart</h1>
            {
                props.pr.map((b)=>{
                    return (
                        <div>
                            <h1>{b.category}</h1>
                            <img style={{width:"100px"}} src={b.image} alt="" />
                        </div>
                    )
                })
            }
      </div>
    )
}
export default Cart