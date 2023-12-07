import React from "react";

function Canner() {
    var [course, setCoure] = React.useState(
        [
            "A.p", "Goa", "Bihar", 'Gujarat', "Telegana"
        ]
    )



    return (
        <div>
            <div>
                {
                    course.map((a) => {
                        return <li>{a}</li>

                    })
                }
            </div>
            <div>
                <div id="carouselExample" class="carousel slide">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img  src="https://www.whereig.com/india/states/map/andhra-pradesh-district-map.jpg" class="d-block w-100" alt="1st" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://www.toptourguide.com/indialarge.gif" class="d-block w-100" alt="2nd" />
                        </div>
                        <div class="carousel-item">
                            <img src="https://telangana.gov.in/PublishingImages/Pages/Home/Telangana%20Map-HomePage-33districts.png" class="d-block w-100" alt="3rd" />
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )



}
export default Canner