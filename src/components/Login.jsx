import React,{ useState} from 'react'
import GoogleLogin from 'react-google-login'
import Grid from '@material-ui/core/Grid'
import { Button, Container, makeStyles, Typography } from '@material-ui/core';
import { Redirect, useHistory} from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme)=>({
    link: {
        color : "#FFFFFF",
        textDecoration : "none"
    },
    root : {
      marginTop : 40,
      marginLeft : 300,
      marginRight : 300
    },
    media : {
        
        height: 200,
        width: '20%'
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
    const [userData, setUserData] = useState([])
    const [firstName, setFirstName] = useState("")
    const [middleName, setMiddleName] = useState("")
    const [email, setEmail] = useState("")
    const [imageUrl, setImageUrl] = useState("")
    const [move, setMove] = useState(false)
    const history = useHistory()


    const responseGoogle = (response) => {        
        console.log("response",response);
        console.log(response.profileObj);
        
        setUserData(response.profileObj)
        console.log(userData);

        setIsLoggedin(true)
        setFirstName(response.profileObj.givenName)
        setMiddleName(response.profileObj.familyName)
        setEmail(response.profileObj.email)
        setImageUrl(response.profileObj.imageUrl)

        props.send(response.profileObj.givenName,userData,isLoggedin)

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
                >
                    <Grid item>
                        <GoogleLogin 
                            clientId="95947302818-jn3rhg9dshps5lpc2ih63k069tjcr6jf.apps.googleusercontent.com"
                            buttonText="login with Google"                
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}                        
                        />
                    </Grid>
            </Grid>
            : 
            <div>
              <Card className={classes.root}>
                <CardActionArea>
                  <CardMedia
                   
                    className={classes.media}
                    image={imageUrl}
                    title="user-pic"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      First Name : {firstName}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      Middle Name : {middleName}
                    </Typography>
                    <Typography gutterBottom variant="h5" component="h2">
                      Email : {email}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary" variant="outlined" onClick={moveTo}>
                    Next
                  </Button>                  
                </CardActions>
              </Card>             
            </div>
            }
            
                
                    
              
        </div>
    )
}


export default Login
