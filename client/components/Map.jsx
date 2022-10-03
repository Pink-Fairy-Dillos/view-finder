import React, { useState, useEffect } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

const mapStyle = {
    height: '100vh',
    width: '100%',
  }

const center = {

  // El Paso lat/lng
  // lat: 31.772,
  // lng: -106.461

  // Galveston lat/lng
  // lat: 29.301,
  // lng: -94.798

  // Los Angeles lat/lng
  lat: 34.052,
  lng: -118.244

  // Palm Springs lat/lng
  // lat: 33.722,
  // lng: -116.374
  
  // Seattle lat/lng
  // lat: 47.608,
  // lng: -122.335

  // lat: -3.745,
  // lng: -38.523
};

function MyComponent() {

  const [savedLocations, setSavedLocations] = useState([]);
  const [selected, setSelected] = useState({});

  const onSelect = item => {
    setSelected(item);
  }

  useEffect(() => {
    fetch('api/locations')
      .then(res => res.json())
      .then((locations) => {
        if (!Array.isArray(locations)) locations = [];
        setSavedLocations(locations);
      })
  })

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyBRacG1Uw6S2XcqqqA50dnaTRUSwiJ2Gg4"
    >
      <GoogleMap
        center={center}
        zoom={10}
        mapContainerStyle={mapStyle}
      >
        {
          savedLocations.map(item => {
            return (
              <Marker key={item.name} position={item.location} onClick={() => onSelect(item)} />
            )
          })
        }
        {
          selected.location && 
          (
            <InfoWindow position={selected.location} clickable={true} onCloseClick={() => setSelected({})}>
              <p>
                <p>{selected.name}</p>
                <p>{selected.address}</p>
              </p>
            </InfoWindow>
          )
        }
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)