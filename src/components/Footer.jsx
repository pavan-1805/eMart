import React from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme)=>({
    footer : {
        backgroundColor: "#D3D3D3"
    }
}))

function Footer() {
    const classes = useStyles();
    return (
        <footer>
            <Box className={classes.footer}>
                <Container maxWidth="lg">
                    <Typography align="center" color="">
                       Copyright &copy;{new Date().getFullYear()} e-MART INDIA, Inc. All rights reserved
                    </Typography>

                </Container>
            </Box>
            
        </footer>
    )
}

export default Footer
