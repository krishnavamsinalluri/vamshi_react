import React from "react";
function Hot(){
    var[items,setItems]=React.useState([

        
        {
            Image:"https://qph.cf2.quoracdn.net/main-qimg-aa1bba36f65f7d8b9cf99f93b0c8f017.webp",
            Type:"Home with milke",
            Qulity:"1kg",
            price:500
        },
        
        {
            Image:"https://english.cdn.zeenews.com/sites/default/files/2023/05/24/1206707-south-indian-namkeen.png",
            Type:"Home with milke",
            Qulity:"1kg",
            price:500
        },
        
        {
            Image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROm_d3Kqs2FPR2Vh8szfTy5QjxuOttrajUPA&usqp=CAU",
            Type:"Home with milke",
            Qulity:"1kg",
            price:500
        },
        
        {
            Image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/10/thattai-recipe.jpg",
            Type:"Home with milke",
            Qulity:"1kg",
            price:500
        },
        
        {
            Image:"https://www.mapsofindia.com/ci-moi-images/my-india/Murukku-Twisted-Snack-from-South-India.jpg",
            Type:"Home with milke",
            Qulity:"1kg",
            price:500
        },
        
        {
            Image:"https://pipingpotcurry.com/wp-content/uploads/2022/03/35-Easy-Indian-Sweets-Dessert-Recipes-1.webp",
            Type:"Home with milke",
            Qulity:"1kg",
            price:500
        },
    ])
    return(
        <div className="d-flex flex-wrap">
            {
                items.map((s)=>{
                    return(
                        <div className="card m-3 p-2 w-25"> 
                        <img src={s.Image}></img>
                           <div className="card-body bg-secondary">
                           <h1>{s.Type} </h1>
                           <b> Qulity:{s.Qulity}</b> <br />
                           <b>price:{s.price}</b>
       
                           </div>
                           </div>
         
                    )
                })
            }
        </div>
    )

}
export default Hot