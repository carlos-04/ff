import React,{ useState } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Navbar from './Navbar'
import Drawerr from './Drawerr'
import {Hidden} from '@material-ui/core'
import Graph from './Graph' 
import Map from './Map'
import Banner from './Banner'
import {Grid, Box, Typography, Paper } from '@material-ui/core';

const useStyles = makeStyles(theme => ({

    root: {
        display: 'flex'
    }, 
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        background: theme.palette.background.default
    
      },

      conteMap: {

        padding: '10px',
        margin: '50px 0',
        border: 'none'
      },

      space: {
 
            marginTop: '20px'

      }

}))

const Container = () => {

    const classes = useStyles();
    const [abrir, SetAbrir] = useState(false)
    const accionAbrir = () => {
        SetAbrir(!abrir)
    }
    return (

        <>


        <div className={classes.root}>
        <Navbar accionAbrir={accionAbrir}/>
         <Hidden xsDown>
         <Drawerr  variant="permanent"  
                 open= {true}/>
         </Hidden>
         <Hidden smUp>
         <Drawerr  variant="temporary"  
                 open= {abrir}
                  onClose={accionAbrir}
                  />
         </Hidden>
           <div className={classes.content}>
               <div className={classes.toolbar}></div>
               <Typography variant="h2" color="initial">
                    Mapas
            </Typography>
            <div className={classes.space}>
            <Banner/>
            </div>
            <Grid container>
            <Grid item xs={4}>
             <Paper className={classes.conteMap}>
                 <Graph/>
             </Paper>
             </Grid>
            </Grid>
           </div>
        </div>
        </>
    )
}

export default Container
