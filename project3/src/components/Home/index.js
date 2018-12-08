import React from 'react';
// import Jumbotron from "Jumbotron";
// import Google from "Google";

function Home() {
    return (
        <div className="container">
            <nav>
                <div className="nav-wrapper">
                    <a href="#" className="brand-logo">Logo</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="sass.html">Sass</a></li>
                    <li><a href="badges.html">Components</a></li>
                    <li><a href="collapsible.html">JavaScript</a></li>
                    </ul>
                </div>
            </nav>
            <div class="card large">
                {/* <Jumbotron /> */}
            </div>
            <div class="card large">
                {/* <Google /> */}
            </div>
            {/* This is a carousel of event images. */}
            <div className="carousel">
                <a className="carousel-item" href="#one!"><img src="https://lorempixel.com/250/250/nature/1" /></a>
                <a className="carousel-item" href="#two!"><img src="https://lorempixel.com/250/250/nature/2" /></a>
                <a className="carousel-item" href="#three!"><img src="https://lorempixel.com/250/250/nature/3" /></a>
                <a className="carousel-item" href="#four!"><img src="https://lorempixel.com/250/250/nature/4"/></a>
                <a className="carousel-item" href="#five!"><img src="https://lorempixel.com/250/250/nature/5"/></a>
            </div>
        </div>
    );
  
}

export default Home;
