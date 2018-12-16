import "./style.css";
// Most recent attempt at code
import React, { Component } from 'react';
import { withGoogleMap ,
    GoogleMap, 
    Marker, 
    InfoWindow,
    } from "react-google-maps";

const GettingStartedGoogleMap = withGoogleMap(props => (
    <GoogleMap
        defaultZoom={13}
        defaultCenter={{ lat: 44.969399, lng: -93.257955 }}
    >

{/* CABOOZE MARKER/INFO */}   
    <Marker name="cabooze"
        position = {{ lat: 44.963540, lng: -93.246800 }}
        onClick={() => {
        }}
    >
      <InfoWindow title= "CABOOZE" onCloseClick={props.onToggleOpen}>
        <div style={{ backgroundColor: `white`, opacity: 0.75, padding: `12px` }}>
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
            <img src="https://cdn.ticketfly.com/wp-content/themes/cabooze/images/bg-header.jpg" alt="Cabooze Music Club Logo" width="200" height="100"></img>
            <p> <a href="https://www.cabooze.com/" target="_blank"  ><span>Cabooze</span></a></p>
          </div>
        </div>
      </InfoWindow>
      )}
    </Marker>

{/* HONEY MARKER/INFO */}  
    <Marker name="honey"
        position= {{ lat: 44.987549, lng: -93.257729 }}
        onClick={() => {
        }}
    >
      <InfoWindow title= "HONEY" onCloseClick={props.onToggleOpen}>
        <div style={{ backgroundColor: `white`, opacity: 0.75, padding: `12px` }}>
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
            <img src="http://honeympls.com/wp-content/uploads/2016/10/logo.png" alt="Honey MPLS Logo" width="100" height="100"></img>
            <p> <a href="http://honeympls.com/events/today/" target="_blank"  ><span>Honey Mpls Events</span></a></p>
          </div>
        </div>
      </InfoWindow>
      )}
    </Marker>

{/* DAKOTA MARKER/INFO */}   
    <Marker name="dakota"
        position= {{ lat: 44.973730, lng: -93.275240 }} 
        onClick={() => {
        }}
    >
      <InfoWindow title= "DAKOTA" onCloseClick={props.onToggleOpen}>
        <div style={{ backgroundColor: `white`, opacity: 0.75, padding: `12px` }}>
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
          <img src="https://www.dakotacooks.com/wp-content/uploads/2018/07/logo_blue.png" alt="Dakota Logo" width="200" height="100"></img>
            <p> <a href="https://www.dakotacooks.com/events/?view=list" target="_blank"  ><span>Dakota Jazz Club</span></a></p>
          </div>
        </div>
      </InfoWindow>
      )}
    </Marker>
    
{/* ICEHOUSE MARKER/INFO */}
    <Marker name="icehouse"
        position= {{ lat: 44.956190, lng: -93.278400 }} 
        onClick={() => {
        }}
    >
      <InfoWindow title= "ICEHOUSE" onCloseClick={props.onToggleOpen}>
        <div style={{ backgroundColor: `white`, opacity: 0.75, padding: `12px` }}>
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
            <img src="https://static1.squarespace.com/static/550dddbbe4b0ffd939b69799/t/5a2fcc71f9619a81671580aa/1543548017919/Cards.jpg?format=500w" alt="Icehouse Card" width="150" height="100"></img>
            <p> <a href="https://www.icehousempls.com/events/" target="_blank"  ><span>Icehouse Mpls</span></a></p>
          </div>
        </div>
      </InfoWindow>
      )}
    </Marker>

{/* KITTY CAT CLUB MARKER/INFO */}  
    <Marker name="kitty"
        position= {{ lat: 44.980068, lng: -93.236481 }} 
        onClick={() => {
        }}
    >
      <InfoWindow title= "KITTYCAT" onCloseClick={props.onToggleOpen}>
        <div style={{ backgroundColor: `white`, opacity: 0.75, padding: `12px` }}>
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
            <img src="https://static1.squarespace.com/static/58e669f615d5db0a8449fbd8/t/5955139d29687fe976c38899/1544537438250/?format=1500w" alt="Kitty Cat Club Logo" width="150" height="100"></img>
            <p> <a href="https://www.kittycatklub.net/music/" target="_blank"><span>Kitty Cat Klub</span></a></p>
          </div>
        </div>
      </InfoWindow>
      )}
    </Marker>

{/* NOMAD MARKER/INFO */}  
    <Marker name="nomad"
        position= {{ lat: 44.968790, lng: -93.246910 }} 
        onClick={() => {
        }}
    >
      <InfoWindow title= "NOMAD" onCloseClick={props.onToggleOpen}>
        <div style={{ backgroundColor: `white`, opacity: 0.75, padding: `12px` }}>
        <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
          <img src="http://www.nomadpub.com/wp-content/themes/nomad/images/nomad-logo.png" alt="Nomad Pub Logo" width="150" height="150"></img>
          <p> <a href="http://www.nomadpub.com/calendar" target="_blank"><span>The Nomad World Pub</span></a></p>
        </div>
        </div>
      </InfoWindow>
      )}
    </Marker>

{/* PALMERS MARKER/INFO */}  
    <Marker name="palmers"
        position= {{ lat: 44.968810, lng: -93.247540 }} 
        onClick={() => {
        }}
    >
      <InfoWindow title= "PALMERS" onCloseClick={props.onToggleOpen}>
        <div style={{ backgroundColor: `white`, opacity: 0.75, padding: `12px` }}>
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
            <img src="http://palmersbar.net/wp-content/themes/palmers/img/sm-brand-transp.gif" alt="Palmers Guy" width="100" height="150"></img>
            <p> <a href="http://palmersbar.net/events/today" target="_blank"  ><span>Palmers Bar</span></a></p>
          </div>
        </div>
      </InfoWindow>
      )}
    </Marker>

{/* HEXAGON MARKER/INFO */}  
    <Marker name="hexagon"
        position= {{ lat: 44.955390, lng: -93.233540 }} 
        onClick={() => {
        }}
    >
      <InfoWindow title= "HONEY" onCloseClick={props.onToggleOpen}>
        <div style={{ backgroundColor: `white`, opacity: 0.75, padding: `12px` }}>
          <div style={{ fontSize: `16px`, fontColor: `#08233B` }}>
            <h4>The Hexagon Bar</h4>
            <p> <a href="http://www.citypages.com/location/hexagon-bar-6667307" target="_blank"  ><span>The Hex</span></a></p>
          </div>
        </div>
      </InfoWindow>
      )}
    </Marker>

    </GoogleMap>
));

class GoogleMaps extends Component {

  render() {

    return (
<<<<<<< HEAD


        <div style={{height: `100%`}}>
            <GettingStartedGoogleMap
                containerElement={ <div style={{ height: "100%", width: 1250, paddingBottom: 100, marginLeft: 10, paddingTop: 10 }} /> }
                mapElement={ <div style={{ height: 500 }} /> }
            />
        </div>


=======
      <div style={{height: `100%`}}>
        <GettingStartedGoogleMap
          containerElement={ <div style={{ height: "100%", width: 1250, paddingBottom: 100, marginLeft: 10, paddingTop: 10 }} /> }
          mapElement={ <div style={{ height: 500 }} /> }
        />
      </div>
>>>>>>> 93c53b6391d02f5d6c7d1d184d186ab11dfe8193
    );
  }
}


export default GoogleMaps;









