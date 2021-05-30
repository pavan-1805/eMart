import React, { useState,useEffect } from 'react'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import { IconButton, makeStyles } from '@material-ui/core'
import StoreMallDirectoryIcon from '@material-ui/icons/StoreMallDirectory';
import Login from './Login'
import MyProfile from './MyProfile'
import Products from './Products'
import GoogleLogout,{Components} from 'react-google-login'

const useStyles = makeStyles((theme) => ({
    title: {
        flexGrow: 1,
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },
    link: {
        color: "#FFFFFF",
        textDecoration: "none"
    },
    user: {
        flexGrow: 0,
        marginRight: 20

    },
    button: {
        marginRight: 20
    }
}));

function Header() {
    const classes = useStyles();
    const [loggedIn, setLoggedIn] = useState(false)
    const [userName, setUserName] = useState("")
    const [userData, setUserData] = useState(null)

    const get = (userdata, username, logVal) => {
        if (logVal) {
            setLoggedIn(true)
            setUserName(username)
        }
        // console.log(userdata,logVal);
        setUserData(userdata)
    }
    const signout=()=> {
        const auth2 = window.gapi.auth2.getAuthInstance()
        if (auth2 != null) {
          auth2.signOut().then(
            auth2.disconnect().then(this.onLogoutSuccess)
          )
        }
      }
    //   const forceMyOwnLogout = ((response) => {
    //     cookie.remove('MyGoogleID', { path: '/' })
    //     if (window.gapi) {
    //         const auth2 = window.gapi.auth2.getAuthInstance()
    //         if (auth2 != null) {
    //             auth2.signOut().then(
    //                 auth2.disconnect().then(this.props.onLogoutSuccess)
    //             )
    //         }
    //     }
    //     this.forceUpdate()
    // })
    
    // console.log(userData);
    const logout = () => {
        console.log("from logout");
        // console.log(userData);
        window.localStorage.clear(); 
        setLoggedIn(false)
        setUserData(null)
        setUserName("")
        console.log(loggedIn)
        console.log(userData);
        console.log(userName)
        // localStorage.clear();
    }
    useEffect(() => {
        console.log("preethi")
        console.log('logout', loggedIn);
        console.log('data',userData );
      }, [loggedIn])
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
                        <StoreMallDirectoryIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        className={classes.title}
                    >
                        e-MART
                    </Typography>
                    {
                        loggedIn ?
                            <>
                                <Typography
                                    variant="h6"
                                    className={classes.user}
                                >
                                    Welcome {userName}
                                </Typography>
                                {/* working */}
                                <Button
                                    // onClick={renderProps.onClick}
                                    // disabled={renderProps.disabled}
                                    className={classes.button}
                                    color="inherit"
                                    variant="outlined" onClick={() => logout()}
                                ><Link to="/login" className={classes.link}>Logout</Link>
                                </Button>
                                {/* google git */}
                                {/* <GoogleLogout>
                                <Button
                                    // onClick={renderProps.onClick}
                                    // disabled={renderProps.disabled}
                                    className={classes.button}
                                    color="inherit"
                                    variant="outlined" onClick={() => signout()}
                                ><Link to="/login" className={classes.link}>Signout</Link>
                                </Button>
                                </GoogleLogout> */}



                                {/* <button onClick={forceMyOwnLogout} /> */}


                            </>
                            :
                            <>
                                <Button
                                    color="inherit"
                                    variant="outlined"
                                >
                                    <Link to="/login" className={classes.link}>Login</Link>

                                </Button>

                            </>
                    }
                </Toolbar>
            </AppBar>
            <Switch>
                <Route exact path="/login" children={<Login send={get} />}></Route>
                {/* <Route exact path="/myprofile" children={<MyProfile send={get}/>}></Route> */}
                <Route exact path="/products" children={<Products />}></Route>
            </Switch>
        </Router>

    )
}

export default Header