import React from 'react'
import { AppBar } from '@material-ui/core';
import theme from '../themeConfig';
import { ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/styles";

import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';





const drawerWidth = 240;
 //estilos   
 const useStyle = makeStyles(theme => ({

    offset: theme.mixins.toolbar,
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none"
      }
    },
    title: {
  
      flexGrow: 1
    }, 
    
    appBar: {
      [theme.breakpoints.up("sm")]: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
        
 
      }
    }
  
  }))
const Navbar = (props) => {
const classes = useStyle();

return (
        <ThemeProvider theme={theme} className={classes.root}>
          <AppBar position="fixed"  className={classes.appBar}>
              <Toolbar>

              <IconButton edge="start" className={classes.menuButton} 
              color="inherit" aria-label="menu" onClick={() => props.accionAbrir()} >
              <MenuIcon />
              </IconButton>
                <Typography variant="h6" className={classes.title}>
               
                </Typography>

                <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
          
                color="inherit"
              >
                <AccountCircleIcon />
              </IconButton>
              </Toolbar>
            </AppBar>


            
        </ThemeProvider>
    )
}

export default Navbar
