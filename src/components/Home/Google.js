import "./style.css";
// Most recent attempt at code
import React from 'react';

// import { withGoogleMap ,
//     GoogleMap,
//     } from "react-google-maps";
import Map from "./map/Map";

class Google extends React.Component {

    render() {

    return (

        <div style={{height: `100px`}}>
            <Map
                googleMapURL={`https://maps.googleapis.com/maps/api/js?key=
                APIKEY=AIzaSyBxm4_uzFSE-MSwjAFJM-Hiz9doJYBlmVE=3.exp&libraries=geometry,drawing,places`}
                loadingElement={<div style={{height: '100%'}}/>}
                containerElement={
                  <div style={{    position: 'absolute',
                  height: '600px',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      justifyContent: 'flex-end',
                      alignItems: 'center',}} />
              }
              mapElement={
                  <div style={{    position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                 }} />
              }
            />
      </div>
    );
  }
}

export default Google;


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






