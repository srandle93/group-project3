
// Most recent attempt at code
import React from 'react';

import { withGoogleMap ,
    GoogleMap, withScriptjs
    } from "react-google-maps";


const Map = withScriptjs(withGoogleMap((props => {
    return(
        <GoogleMap
            defaultZoom={3}
            defaultCenter={{ lat: -25.363882, lng: 131.044922 }}
        >
        </GoogleMap>
    )
})))

export default Map;