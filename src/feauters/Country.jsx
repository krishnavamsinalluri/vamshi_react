import { Link, Outlet } from "react-router-dom"
import { useGetAllCountriesByNameQuery } from "../severs/country"

function Countires(){

  var {isLoading,data}=  useGetAllCountriesByNameQuery()
  console.log(data)
    return(
        <div className="box row">
            <div className="d-flex flex-wrap col-4">
            {
              isLoading  && <img src="https://i.pinimg.com/originals/c7/e1/b7/c7e1b7b5753737039e1bdbda578132b8.gif" alt="" />
            }
            {
                data && data.map((a)=>{
                    return <div>
                        <Link to={`/countrys/countrysdetails/${a.name.common}`}>{a.name.common}</Link>
                    </div>
                
                })
            }
            <div className="col">
                <Outlet></Outlet>
            </div>
 

            </div>
       </div>
    )

}
export  default Countires