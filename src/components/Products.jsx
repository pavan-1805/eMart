import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Button, Container, makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import ProductCard from './ProductCard'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme)=>({
    media : {

    },
    text : {

    },
    GridItem : {
        marginTop : 50,
        marginBottom : 30,
        
    }

}))

function Products() {
    const classes = useStyles()
    const [products, setProducts] = useState(Array)
    
    useEffect(async ()=>{
       const res = await axios.get('http://localhost:8000/pages')
       const result = await res.data[0].body.content[0].items
       setProducts([...result])
       console.log(res.data[0].body.content[0].items);
             

    },[])
    console.log(products);

    
    return (
        <Container>
            <div>
            <Typography gutterBottom variant="h4" component="h2">
            PRODUCTS
          </Typography>
          </div>
          <ShoppingCartIcon /> 
          <Typography gutterBottom variant="h6" component="h2">
            Items
          </Typography>

            <Grid container>            
            {
                products.map(product => {
                    return (
                    <Grid item  key={product.albumId} xs={12} md={6} lg={4} className={classes.GridItem}>
                       <ProductCard product={product}/>
                    </Grid>
                    
                    )
                    
                })
            }
            </Grid>
            
        </Container>
    )
}

export default Products
