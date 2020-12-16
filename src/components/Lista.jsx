import React from 'react'
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider,
  } from "@material-ui/core";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";


const Lista = () => {
    return (
        <div>
       <List component='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Listado 1
                    </ListItemText>
                </ListItem>

                <ListItem button>
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Listado 2 
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Listado 3 
                    </ListItemText>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Listado 4 
                    </ListItemText>
                </ListItem>
  
            </List>
        </div>
    )
}

export default Lista
