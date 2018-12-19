import React from 'react';
import { withAuthorization } from '../Session';
import Jumbotron from "./Jumbotron";
import "./style.css";
import Results from '../Results/Results';
import GoogleMaps from './Google';
import Navigation from '../Navigation';


// function Home() {
//     return (
//         <div className="container">
//             <nav>
//                 <div className="nav-wrapper">
//                     <a href="#" className="brand-logo">Logo</a>
//                     <ul id="nav-mobile" className="right hide-on-med-and-down">
//                     <li><a href="sass.html">Sass</a></li>
//                     <li><a href="badges.html">Components</a></li>
//                     <li><a href="collapsible.html">JavaScript</a></li>
//                     </ul>
//                 </div>
//             </nav>
//             <div class="card large">
//                 {/* <Jumbotron /> */}
//             </div>
//             <div class="card large">
//                 {/* <Google /> */}
//             </div>
//             {/* This is a carousel of event images. */}
//             <div className="carousel">
//                 <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1" /></a>
//                 <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2" /></a>
//                 <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3" /></a>
//                 <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"/></a>
//                 <a className="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"/></a>
//             </div>
//         </div>
//     );
  
// }

const HomePage = () => (
  <div>
    <div className="homeBackground">
      <Navigation />
      <Jumbotron />
    </div>
    {/* <div className="googlePlacement"></div> */}
    <GoogleMaps />
    <Results />
  </div>
);

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
