import React from 'react'
import {makeStyles, Drawer, Divider, Typography} from '@material-ui/core';
import Lista from './Lista';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import Icon from '@material-ui/core/Icon';

const drawerWidth = 240;

const useStyle = makeStyles(theme => ({
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
     drawerPaper: {
      width: drawerWidth,
      background: 'white',
      boxShadow: '1px 1px 25px 1px #888888',
      border: 'none'
 


    },

    fondo: {
     
        background: '#2196f3'

    },

    toolbar: theme.mixins.toolbar,
    titulo: {

        marginTop: "13px"
    }
}))

const Drawerr = (props) => {
const classes = useStyle();

    return (
        <Drawer className={classes.drawer}
        variant={props.variant}
         classes={{paper: classes.drawerPaper}}
         anchor="left"
         open={props.open}
         onClose={props.onClose ? props.onClose : null}
         color="inherit"
        
        >
        <div className={classes.toolbar} 
             >
            <Typography variant="h4" color="initial" align="center" className={classes.titulo}>
             Dashboard
            </Typography> </div>
        <Divider/>
        <Lista/>
        
</Drawer>
    )
}

export default Drawerr
