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


function MainMap({ universities, onSelectUniversity }) {

    console.log(universities)
    const bounds = [
        [-85, -190],
        [85, 190] 
      ];
    return (
        <div>
            <MapContainer 
            className="map-container" 
            center={[15.45, 18.73]} 
            zoom={2.3} 
            maxBounds={bounds}
            maxBoundsViscosity={0.7} 
            scrollWheelZoom={true}
            maxZoom={18}
            style={{ height: "100vh", width: "100%" }}>               
                <TileLayer
                    url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/rastertiles/voyager/{z}/{x}/{y}{r}.png"
                    attribution='&copy; <a href="https://carto.com/attributions">CARTO</a>'
                />

                
                {universities.map((university, index) => {
                    const [latitude, longitude] = university.location.coordinates;
                    if (latitude && longitude) {
                        return (
                            <Marker 
                            key={index}
                            position={[latitude, longitude]}
                            eventHandlers={{
                                click: () => onSelectUniversity(university.name)
                              }}
                            >
                            <Popup>
                                <strong>{university.name}</strong>
                                <p>{`${university.location.city}, ${university.location.country}`}</p>
                            </Popup>
                            </Marker>
                        )   
                    } else {
                        console.error(`Invalid coords for ${university.name}`)
                        return null;
                    }
                })}


            </MapContainer>
        </div>
    )
}

export default MainMap
