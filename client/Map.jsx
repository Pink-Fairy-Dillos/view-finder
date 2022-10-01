import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const mapStyle = {
    width: '100vh',
    height: '100vh'
  }

const containerStyle = {
    position: "absolute",
    width: "100vh",
    height: "100vh",
    left: '0',
    top: '0'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

function MyComponent() {
  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBRacG1Uw6S2XcqqqA50dnaTRUSwiJ2Gg4"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
        style={mapStyle}
      >
        { /* Child components, such as markers, info windows, etc. */ }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)