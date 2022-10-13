import React from 'react'
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = (props) => {


  return (
    <div className={`map ${props.className}`} style={{ height: '100vh', width: '100%' }}>
         <GoogleMapReact
        bootstrapURLKeys={{ key: "" }}
        defaultCenter={props.center}
        defaultZoom={props.zoom}
      >
        <AnyReactComponent
          lat={props.center.lat}
          lng={props.center.lng}
          text="My Marker"
        />
      </GoogleMapReact>
    </div>
  )
}

export default Map