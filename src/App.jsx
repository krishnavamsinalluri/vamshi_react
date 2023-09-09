import React from "react";
import { Link, Outlet } from "react-router-dom";



function App() {
  return (

    <div className="box">
      <img style={{ width: "10rem" }} src="https://www.ammammapodi.com/assets/frontend/images/ammaicon.png" alt="" />
      <div className="items">
       <button>  <Link to="/aboutus">About us</Link>
            </button>       &nbsp;&nbsp;&nbsp;
        <button><Link to="/contactus">Contact us</Link>
        </button>
        &nbsp;&nbsp;&nbsp;
        <button> <Link to="/sweetitems">Sweeat iteams</Link>
              </button>
        &nbsp;&nbsp;&nbsp;
            <button> <Link to="/hotitems">Hot iteams</Link>
           </button>

      </div>
      <iframe width="1230" height="300" src="https://www.youtube.com/embed/odCMxmQv6WA" title="Eggless Flour Sweets Snacks | Fried Flour Sweet Snacks | Easy Sweet Snacks | N&#39;Oven" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      <div className="card">
        <Outlet>

        </Outlet>
        

          </div>
      </div>
      );
}

      export default App;
