import React, {useState} from 'react'
import Markers from './Markers'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {places} from '../assets/data.json'
const MapView = () => {

const [state, setstate] = useState({
currentLocation: {
    lat: '18.91618892569212', lng: '-70.24342857864362' 
},

zoom: 8

})

    return (
        <>
    
<MapContainer center={state.currentLocation} zoom={state.zoom} >
  <TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />

<Markers places={places} />

</MapContainer>   
        </>
    )
}

export default MapView
