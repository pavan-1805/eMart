import React,{ useState} from 'react'
import GoogleLogin from 'react-google-login'
import Grid from '@material-ui/core/Grid'
import { Button, makeStyles, Typography } from '@material-ui/core';
import { Redirect, useHistory} from 'react-router-dom'
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme)=>({
    link: {
        color : "#FFFFFF",
        textDecoration : "none"
    },
    media : {
        display: 'flex',
        direction:"column",
        alignItems: 'center',
        justifyContent: 'center',
        height: 150,
        width: '10%'
    },
    button : {
        direction:"column",
        alignItems: 'center',
        justifyContent: 'center',
    }
}))

function Login(props) {
    const classes = useStyles();

    const [isLoggedin, setIsLoggedin] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [email, setEmail] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [move, setMove] = useState(false)
    const history = useHistory()


    const responseGoogle = (response) => {        
        console.log("response",response);
        console.log(response.profileObj);
        setIsLoggedin(true)
        setFirstName(response.profileObj.givenName)
        setMiddleName(response.profileObj.familyName)
        setEmail(response.profileObj.email)
        setImageUrl(response.profileObj.imageUrl)
        props.send(response.profileObj.givenName)
           
        let data = JSON.stringify(response.profileObj.email)
        localStorage.setItem("user",data)
           
    }
    const moveTo =() => {
        setMove(true)
    }
    if(move){
        return <Redirect to="/products" />
    }
 
    return (
        <div>
            {
                !isLoggedin ? 
                <Grid container
            
            justify="center"
            alignItems="center"
            style={{}}
            >
                <Grid item>
                <GoogleLogin 
                clientId="95947302818-5qj19uundaho1n9srce7jc7bgohjm55r.apps.googleusercontent.com"
                buttonText="login with Google"                
                onSuccess={responseGoogle}
                onFailure={responseGoogle}

                cookiePolicy={'single_host_origin'}
                
            />

                </Grid>
            

            </Grid>
            : 
            <div>
                <Grid>
                <Avatar className={classes.media} alt={firstName} src={imageUrl} />
                <Typography
                    variant="h4"
                   
                    >
                        First Name: {firstName}
                </Typography>
                <Typography
                    variant="h4"
                    
                    >
                        Middle Name: {middleName}
                </Typography>
                <Typography
                    variant="h4"
                    
                    >
                        Email: {email}
                </Typography>
                
                
                <Button
                    className={classes.button}
                    onClick={moveTo}
                    variant = "contained"
                    color = "primary"
                >Next</Button>
                </Grid>
                
                
            </div>
            }
            
                
                    
              
        </div>
    )
}


export default Login
