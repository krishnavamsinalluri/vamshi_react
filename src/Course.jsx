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
                <div id="carouselExampleCaptions" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img  className="  w-300px h-50px " src="https://www.mapsofindia.com/images2/india-map.jpg" class="d-block w-100" alt="1st" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5 class=".text-danger">India</h5>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img className="w-300px h-50px " src="https://www.mapsofindia.com/maps/andhrapradesh/andhrapradesh-district-map.jpg" class="d-block w-100" alt="2nd" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Andhra pradesh</h5>
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img className="  w-300px h-50px" src="https://www.onefivenine.com/images/StateMaps/Telangana.jpg" class="d-block w-100" alt="3rd" />
                                <div class="carousel-caption d-none d-md-block">
                                    <h5>Telangana</h5>
                                </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )



}
export default Canner;