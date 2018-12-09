import React, { Component } from "react";

function Google() {
    function initMap() {
        var map = new google.maps.Map(document.getElementById("map"), {
          zoom: 13.5,
          center: {lat: 44.969399, lng: -93.257955}
        });

        // Array creation with Alphabet markers
        var labels = "ABCDEFGHIJ";
        
        // Adds 10 marker to map
        var markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        // Marker cluster to handle the numerous markers
        var markerCluster = new MarkerClusterer(map, markers,
            {imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"});
      }

      var locations = [
        firstAve = {lat: 44.962580, lng: -93.287819},
        mortimer = {lat: 44.978421, lng: -93.276057},
        icehouse = {lat: 44.956247, lng: -93.278050},
        pimento = {lat: 44.956430, lng: -93.278050},
        nomad = {lat: 44.968702, lng: -93.247056},
        palmer = {lat: 44.968746, lng: -93.247472},
        kittyKatClub = {lat: 44.980053, lng: -93.236451},
        memoryLanes = {lat: 44.956546, lng: -93.234898},
        dakotaJazz = {lat: 44.973644, lng: -93.275296},
        hexagon = {lat: 44.955451, lng: -93.233428}
      ]

    return(
        <div>
            =========================
        </div>
    )
}

export default Google;




// *********IMPORTANT NOTE********* (don't forget)

// This div needs to be added to initalize the map
// <div id="map">
// </div>

// THESE TWO SCRIPTS MUST BE ADDED TO HTML HOMEPAGE TO LOAD MARKERS AND MAP CORRECTLY
// this loads the marker clustering--
// </script>
//   <script src="https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/markerclusterer.js">
// </script>

// this loads the actual map with our API KEY--
// <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyALzk02sMuXa2V4KmThAyLc4A1PW0_F9WA&callback=initMap"async defer>
// </script>


