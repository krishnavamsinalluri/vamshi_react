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
                            <img  style={{width:"900px", height:"600px"}} src="https://www.mapsofindia.com/images2/india-map.jpg" class="d-block w-100" alt="1st" />
                                <div class="carousel-caption d-none d-md-block">
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img style={{width:"900px",height:"600px"}} src="https://www.mapsofindia.com/maps/andhrapradesh/andhrapradesh-district-map.jpg" class="d-block w-100" alt="2nd" />
                                <div class="carousel-caption d-none d-md-block">
                                </div>
                        </div>
                        <div class="carousel-item">
                            <img  style={{width:"900px",height:"600px"}} src="https://www.onefivenine.com/images/StateMaps/Telangana.jpg" class="d-block w-100" alt="3rd" />
                                <div class="carousel-caption d-none d-md-block">
                                </div>

                                <div class="carousel-item">
                            <img  style={{width:"900px",height:"600px"}} src="https://www.onefivenine.com/images/StateMaps/Telangana.jpg" class="d-block w-100" alt="4th" />
                                <div class="carousel-caption d-none d-md-block">
                                </div>
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
        
                     <div id="carouselExampleIndicators" class="carousel slide">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img  style={{width:"800px",height:"600px"}} src="https://i.pinimg.com/originals/e7/0c/54/e70c54245da2846ff941e6cf6e68bd52.png" class="d-block w-100" alt="1"/>
                        </div>
                        <div class="carousel-item">
                        <img style={{width:"800px",height:"600px"}}  src="https://indiamap.wiki/wp-content/uploads/2023/08/bihar-district-map-hd.jpg" class="d-block w-100" alt="2"/>
                        </div>
                        <div class="carousel-item">
                        <img style={{width:"800px",height:"600px"}}  src="https://www.burningcompass.com/countries/india/maps/gujarat-district-map.jpg" class="d-block w-100" alt="3"/>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                    </div>
                    </div>
                            
    )
}
export default Canner;