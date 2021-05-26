import React from 'react'
import {BrowserRouter as Router , Switch, Link, Route} from 'react-router-dom'
import Drawer from '@material-ui/core/Drawer'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { IconButton, makeStyles } from '@material-ui/core'
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';

const useStyles = makeStyles((theme)=>({
    title: {
        flexGrow: 1,
      },
      menuButton: {
        marginRight: theme.spacing(2),
      }
}));

function Header() {
    const classes = useStyles();
    const clickHandler = () => {
        alert("clicked")
    }
    
    return (
        <div>
            <AppBar 
                position="static" 
                color="primary"
                elevation={0}
            >   
                   
                <Toolbar>
                    <IconButton 
                        edge="start" 
                        className={classes.menuButton} 
                        color="inherit" 
                        aria-label="menu" 
                    >
                        <StoreMallDirectoryIcon/>
                    </IconButton>
                    <Typography 
                        variant="h6" 
                        className={classes.title}
                    >
                        e-MART
                    </Typography>
                    <Button 
                        color="inherit" 
                        variant="outlined" 
                        onClick={clickHandler}
                    >
                        Login
                    </Button>
                </Toolbar>
                
            </AppBar> 
            <Router>
                <Drawer>
                    
                </Drawer>
            </Router>           
        </div>

    )
}

export default Header
