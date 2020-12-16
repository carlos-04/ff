import React from 'react'
import {Marker} from 'react-leaflet'
import {IconLocation} from './IconLocation'

const Markers = (props) => {
   
const {places} = props;

 const maker =  places.map((place, i) => (

    <Marker  key={i} position={place.geometry} icon={IconLocation}></Marker>
   ))


    return (
        <>

     
          {maker}
   
   

        </>
    )
}

export default Markers
  