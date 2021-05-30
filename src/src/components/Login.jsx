import React, { useState } from 'react'
import GoogleLogin from 'react-google-login'
import Grid from '@material-ui/core/Grid'
import { Button, Container, makeStyles, Typography } from '@material-ui/core';
import { Redirect, useHistory } from 'react-router-dom'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  link: {
    color: "#FFFFFF",
    textDecoration: "none"
  },
  root: {
    marginTop: 40,
    marginBottum: 40,
    marginLeft: 500,
    marginRight: 100,
    maxWidth: 400
  },
  media: {
    marginTop: 40,
    marginBottum: 50,
    marginLeft: 100,
    marginRight: 100,
    height: 200,

  },
  button: {
    marginLeft: 150,
  }
}))

function Login(props) {
  const classes = useStyles();

  const [isLoggedin, setIsLoggedin] = useState(false)
  const [userData, setUserData] = useState(null)
  const [firstName, setFirstName] = useState("")
  const [middleName, setMiddleName] = useState("")
  const [email, setEmail] = useState("")
  const [imageUrl, setImageUrl] = useState("")
  const [move, setMove] = useState(false)
  const responseGoogle = (response) => {
    console.log("response", response);
    console.log(response.profileObj);
    setUserData(response.profileObj)
    if (response.profileObj) {
      setIsLoggedin(true)
    }
    setFirstName(response.profileObj.givenName)
    setMiddleName(response.profileObj.familyName)
    setEmail(response.profileObj.email)
    setImageUrl(response.profileObj.imageUrl)


    console.log(response.profileObj.givenName, isLoggedin);


  }
  props.send(userData, firstName, isLoggedin);
  const moveTo = () => {
    setMove(true)
  }
  if (move) {
    return <Redirect to="/products" />
  }

  return (
    <div>
      {
        isLoggedin === false ?
          <Grid container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Grid item>
              <GoogleLogin
                clientId="1038234527811-uj84t5ajmga5p38t1a3qs4t12sgfeinv.apps.googleusercontent.com"
                buttonText="login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
              />
            </Grid>
          </Grid>
          :
          <div>
            <Card className={classes.root}
              direction="column"
              justify="center"
              alignItems="center">
              <CardActionArea>
                <Typography
                  variant="h4"
                  align="center"
                >User Details</Typography>
                <CardMedia

                  className={classes.media}
                  image={imageUrl}
                  title={firstName}
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
                <Button size="small" color="primary" variant="outlined" onClick={moveTo} className={classes.button}>
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