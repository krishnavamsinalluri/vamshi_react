import { useGetAllCountriesByNameQuery } from "../severs/country"

function Details(){
    useGetAllCountriesByNameQuery

    return (
        <div className="card">
        </div>
    )
}
export default Details