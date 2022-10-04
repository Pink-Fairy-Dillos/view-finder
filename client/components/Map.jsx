import React, { useState, useEffect } from 'react'
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';

// This component imports the React Google Maps library and implements it.
// Data is passed down to the GoogleMap component as props.

const mapStyle = {
    height: '100vh',
    width: '100%',
  }

  // This constant sets the center point of the map, currently Los Angeles
const center = {
  lat: 34.052,
  lng: -118.244
};

function MyComponent(props) {

  const savedLocations = props.savedLocations;


  const [selected, setSelected] = useState({});

  const onSelect = item => {
    setSelected(item);
  }

  // useEffect(() => {
  //   fetch('api/locations')
  //     .then(res => res.json())
  //     .then((locations) => {
  //       if (!Array.isArray(locations)) locations = [];
  //       setSavedLocations(locations);
  //     })
  // })

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
                <p>{selected.street_address}</p>
                <p>{selected.city}</p>
                <p>{selected.state}</p>
                <p>{selected.zip_code}</p>
                <p>{selected.caption}</p>
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