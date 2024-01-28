import { Link, Outlet } from "react-router-dom"
import { useGetAllCountriesByNameQuery } from "../severs/country"

function Countires(){

  var {isLoading,data}=  useGetAllCountriesByNameQuery()
  console.log(data)
    return(
        <div className="row" >
            <div className=" col">
            {
              isLoading  && <img src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" alt="" />
            }
            {
                data && data.map((a)=>{
                    return <div className="">
                        <Link to={`/countrys/countrysdetails/${a.name.common}`}>{a.name.common}</Link>
                    </div>
                
                })
            }
            </div>
            <div className="col">
                <h1>countries deatils </h1>
                <Outlet></Outlet>
            </div>
       </div>
    )

}
export  default Countires