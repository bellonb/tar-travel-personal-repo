import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useState, useEffect } from 'react';
import 'leaflet/dist/leaflet.css';
import '../index.css'

import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});


function MainMap() {
    return (
        <div>
            <MapContainer 
            className="map-container" 
            center={[51.505, -0.09]} 
            zoom={13} 
            scrollWheelZoom={true}>
            <TileLayer
  url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}{r}.png"
  attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
/>
            <Marker position={[51.505, -0.09]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
            </MapContainer>
        </div>
    )
}

export default MainMap
