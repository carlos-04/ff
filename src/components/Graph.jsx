import { makeStyles } from '@material-ui/styles';
import React from 'react'
import {
    ComposableMap,
    Geographies,
    Geography,
    Graticule
  } from "react-simple-maps";

  import {geoAlbersUsa} from "d3-geo";
  
  const useStyles = makeStyles({


  })
  
const geoUrl =  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Graph = () => {

    const classes = useStyles();
    return (
    
    <>
    <ComposableMap projectionConfig={{ scale: 147 }} stroke="#2196f3" >
      <Graticule stroke="#2196f3" color="primary" />
      <Geographies geography={geoUrl}  stroke="#2196f3">
        {({ geographies }) =>
          geographies.map(geo => <Geography key={geo.rsmKey} geography={geo} />)
        }
      </Geographies>
    </ComposableMap >
  

    </>
    )
}

export default Graph
