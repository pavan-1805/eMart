import React,{ useState} from 'react'
import {BrowserRouter as Router , Switch, Link, Route } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { IconButton, makeStyles } from '@material-ui/core'
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import Login from './Login'
import Products from './Products'
import GoogleLogout from 'react-google-login'

const useStyles = makeStyles((theme)=>({
    title: {
        flexGrow: 1,
      },

    menuButton: {
        marginRight: theme.spacing(2),
      },
    link : {
        color : "#FFFFFF",
        textDecoration:"none"
    },
    user:{
        flexGrow: 0,
        marginRight: 20

    },
    button:{
        marginRight:20
    }
}));

function Header() {
    const classes = useStyles();
    const [loggedIn, setLoggedIn] = useState(false)
    const [userName, setUserName] = useState("")
    const [userData, setUserData] = useState(null)

    const get=(userdata,username,logVal)=>{
        if(logVal){
        setLoggedIn(true)
        setUserName(username)
        }
        console.log(userdata,logVal);
        setUserData(userdata)
    }

    console.log(userData);
    const logout = () => {
        console.log("pavan");
        console.log(userData);
        setLoggedIn(false)
        setUserData(null)   

    }
    
    return (
        <Router>
            
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
                        aria-label="logo" 
                    >
                        <StoreMallDirectoryIcon/>
                    </IconButton>
                    <Typography 
                        variant="h6" 
                        className={classes.title}
                    >
                        e-MART
                    </Typography>
                    {
                        ! loggedIn ? 
                        <Button 
                        color="inherit" 
                        variant="outlined" 
                                                
                    >
                       <Link to="/login" className={classes.link}>Login</Link> 
                    </Button>
                    :
                    <>
                        <Typography 
                        variant="h6" 
                        className={classes.user}
                    >
                        Welcome {userName}
                    </Typography>
                    <Button 
                        color="inherit" 
                        variant="outlined" 
                        className={classes.button}
                                                
                    >
                       <Link to="/myprofile" className={classes.link}>My Profile</Link> 
                    </Button>
                    
                    
                        <GoogleLogout
                            clientId="95947302818-jn3rhg9dshps5lpc2ih63k069tjcr6jf.apps.googleusercontent.com"
                            render = {(renderProps) => (
                                <Button
                                    onClick={renderProps.onClick}
                                    className = {classes.button}
                                    color="inherit" 
                                    variant="outlined"
                                >Logout</Button>
                            )}
                            onLogoutSuccess={logout}
                            >
                            </GoogleLogout>
                       
                    
                    </>
    
                    }
                </Toolbar>
                
            </AppBar> 

            <Switch>
                <Route exact path="/login" children={<Login send={get}/>}></Route>
                
                <Route exact path="/products" children={<Products/>}></Route>
            </Switch>
                      
        </Router>

    )
}

export default Header
