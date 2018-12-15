import "./style.css";
// Most recent attempt at code
import React, { Component } from 'react';


import { withGoogleMap ,
    GoogleMap, Marker, InfoWindow,
    } from "react-google-maps";


const GettingStartedGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 44.969399, lng: -93.257955 }}
    >

    <Marker name="cabooze"
        position= {{ lat: 44.963540, lng: -93.246800 }}
    />

    <Marker name="honey"
        position= {{ lat: 44.987549, lng: -93.257729 }} 
    />

    <Marker name="dakota"
        position= {{ lat: 44.973730, lng: -93.275240 }} 
    />

    <Marker name="icehouse"
        position= {{ lat: 44.956190, lng: -93.278400 }} 
    />

    <Marker name="kitty"
        position= {{ lat: 44.980068, lng: -93.236481 }} 
    />

    <Marker name="nomad"
        position= {{ lat: 44.968790, lng: -93.246910 }} 
    />

    <Marker name="palmers"
        position= {{ lat: 44.968810, lng: -93.247540 }} 
    />

    <Marker name="hexagon"
        position= {{ lat: 44.955390, lng: -93.233540 }} 
    />

    </GoogleMap>
));



class GoogleMaps extends Component {

    render() {

    return (


        <div style={{height: `100%`}}>
            <GettingStartedGoogleMap
                containerElement={ <div style={{ height: "100%", width: 1250, paddingBottom: 100, marginLeft: 10, paddingTop: 10 }} /> }
                mapElement={ <div style={{ height: 500 }} /> }
            />
        </div>


    );
  }
}


export default GoogleMaps;



<<<<<<< HEAD
// DIFFERENT CODE ATTEMPT BELOW

// import React, { Component } from 'react';
// import { withGoogleMap, GoogleMap } from 'react-google-maps';
// class Map extends Component {
//    render() {
//    const GoogleMapExample = withGoogleMap(props => (
//       <GoogleMap
//         defaultCenter = { { lat: 44.969399, lng: -93.257955 } }
//         defaultZoom = { 13 }
//       >
//       </GoogleMap>
//    ));
//    return(
//       <div>
//         <GoogleMapExample
//           containerElement={ <div style={{ height: 500, width: 500 }} /> }
//           mapElement={ <div style={{ height: 100% }} /> }
//         />
//       </div>
//    );
//    }
// };
// export default Map;


// FROM GOOGLE API THAT WORKED ON STANDARD HTML - DIDN'T WORK WITH REACT

// function Google() {
//     function initMap() {
//         var map = new google.maps.Map(document.getElementById("map"), {
//           zoom: 13.5,
//           center: {lat: 44.969399, lng: -93.257955}
//         });

//         // Array creation with Alphabet markers
//         var labels = "ABCDEFGHIJ";
        
//         // Adds 10 marker to map
//         var markers = locations.map(function(location, i) {
//           return new google.maps.Marker({
//             position: location,
//             label: labels[i % labels.length]
//           });
//         });

//         // Marker cluster to handle the numerous markers
//         var markerCluster = new MarkerClusterer(map, markers,
//             {imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"});
//       }

//       var locations = [
//         firstAve = {lat: 44.962580, lng: -93.287819},
//         mortimer = {lat: 44.978421, lng: -93.276057},
//         icehouse = {lat: 44.956247, lng: -93.278050},
//         pimento = {lat: 44.956430, lng: -93.278050},
//         nomad = {lat: 44.968702, lng: -93.247056},
//         palmer = {lat: 44.968746, lng: -93.247472},
//         kittyKatClub = {lat: 44.980053, lng: -93.236451},
//         memoryLanes = {lat: 44.956546, lng: -93.234898},
//         dakotaJazz = {lat: 44.973644, lng: -93.275296},
//         hexagon = {lat: 44.955451, lng: -93.233428}
//       ]


// }

// export default Google;
=======
>>>>>>> a213a25db64b697892db1a77a2fc1c6c95c8e348






