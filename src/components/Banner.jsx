import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Graph from './Graph'
import {Grid, Paper} from '@material-ui/core';
const useStyles = makeStyles({

    // .section-header {
    //     width: 100%;
    //     padding: 200px 0;
    //     background: #0F2027;
    //     background: -webkit-linear-gradient(to right, hsla(197, 38%, 28%, 0.544), #203a4379, hsla(198, 43%, 11%, 0.673));
    //     background: linear-gradient(to right, hsla(197, 38%, 28%, 0.578), hsla(195, 35%, 19%, 0.564), hsla(198, 44%, 11%, 0.639)), url(../images/banner-min.jpg);
    
    //     background-size: cover;
    //     background-position: center;
    //     color: #132743;
    //     font-family: 'Dosis', sans-serif;
    
    // }

    sectionHeader: {
        width: '100%',
            padding: '200px 0',
            background: '#2196f3',


    }
    

})
const Banner = () => {

    const classes = useStyles();
    return (
        
        <>
        {/* <div className={classes.sectionHeader}>

             <Grid container>
            <Grid item xs={4}>
             <Paper className={classes.conteMap}>
                 <Graph/>
             </Paper>
             </Grid>
            </Grid>
        </div> */}
        </>
    )
 }

export default Banner
