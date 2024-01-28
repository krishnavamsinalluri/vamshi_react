import { useParams } from "react-router-dom"
import { useGetCountriesDetailsQuery } from "../severs/country"

function Details(){
      var{cname}=  useParams()
      var {data}=  useGetCountriesDetailsQuery(cname)
      console.log(data)

    return (
        <div className="box">
            {
                data && data.map((c)=>{
                    return (
                        <div>

                            <b> countire name:</b><h3>{c.name.common}</h3>
                            <img  style={{width:"100px"}} src={c.flags[0]} alt="" />
                            <br />
                            <b> capital:</b><h3> {c.capital}</h3>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Details