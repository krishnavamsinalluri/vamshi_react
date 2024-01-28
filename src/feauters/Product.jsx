import { useGetAllProductsByNameQuery } from "../severs/product"

function Products(){
   var {data} =useGetAllProductsByNameQuery()
   console.log(data)
    return(
        <div className="card">
        <ul className="d-flex flex-wrap">
        {
            data && data.map((b)=>{
                return (
                    <li className="card w-50px m-3 p-3">
                        {b.title}
                    <img style={{width:"100px"}} src={b.image} alt="" />
                    <br />
                    <b>{b.price}</b>
                    </li>
                )

                    
            
            })
        }
        </ul>
        </div>
    ) 
}
export default Products