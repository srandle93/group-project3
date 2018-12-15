
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









