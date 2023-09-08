import React from "react";
import bootstrap from "bootstrap/dist/css/bootstrap.min.css"
function Sweet(){
    var[items,setItems]=React.useState(
        [

            {
                Image:"https://pipingpotcurry.com/wp-content/uploads/2022/03/35-Easy-Indian-Sweets-Dessert-Recipes-1.webp",
                Type:"Home with milke",
                Qulity:"1kg",
                price:500
            },
            {
                Image:"https://i.pinimg.com/originals/4f/55/8c/4f558caa1a3a27e19a11bfaef2d8b812.jpg",
                Type:"milke",
                Qulity:"1kg",
                price:500
            },            {
                Image:"https://i.pinimg.com/originals/4f/55/8c/4f558caa1a3a27e19a11bfaef2d8b812.jpg",
                Type:"milke",
                Qulity:"1kg",
                price:500
            },            {
                Image:"https://i.pinimg.com/originals/4f/55/8c/4f558caa1a3a27e19a11bfaef2d8b812.jpg",
                Type:"milke",
                Qulity:"1kg",
                price:500
            },            {
                Image:"https://i.pinimg.com/originals/4f/55/8c/4f558caa1a3a27e19a11bfaef2d8b812.jpg",
                Type:"milke",
                Qulity:"1kg",
                price:500
            },            {
                Image:"https://i.pinimg.com/originals/4f/55/8c/4f558caa1a3a27e19a11bfaef2d8b812.jpg",
                Type:"milke",
                Qulity:"1kg",
                price:500
            },            {
                Image:"https://i.pinimg.com/originals/4f/55/8c/4f558caa1a3a27e19a11bfaef2d8b812.jpg",
                Type:"milke",
                Qulity:"1kg",
                price:500
            }
        ]
    )
    return(
        <div className="d-flex flex-wrap">
        {
            items.map((a)=>{
                return(
                    <div className="card m-3 p-2 w-25"> 
                 <img src={a.Image}></img>
                    <div className="card-body bg-secondary">
                    <h1>{a.Type} </h1>
                    <b> Qulity:{a.Qulity}</b> <br />
                    <b>price:{a.price}</b>

                    </div>
                    </div>
  

                )
            })
        }
        </div>
    )

}
export default Sweet