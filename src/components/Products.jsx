import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Typography from '@material-ui/core/Typography';
import { Box, Container, makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid'
import ProductCard from './ProductCard'
import Icon from '@material-ui/core/Icon'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles((theme)=>({
    GridItem : {
        marginTop : 50,
        marginBottom : 30,
        
    },
    title:{
        color : "#000000",   
    },
    text : {
        padding : 5
    },
    icon : {
        padding : 5
    }

}))
let val=0;
function Products() {
    const classes = useStyles()
    const [products, setProducts] = useState(Array)
    const [productCount, setProductCount] = useState(0)
    
    
    useEffect(async ()=>{
       const res = await axios.get('http://localhost:8080/pages')
       const result = await res.data[0].body.content[0].items
       setProducts([...result])
    },[])

    const getCount = (count) => {
        if(count && count>0){      
            console.log("bef"+val);
            val = val+1;
            console.log("af"+val);
            setProductCount(val)
        } 
    }
 
    return (
        <>
        <Container>
        <Typography className={classes.title} variant="h4" display="inline">
            PRODUCTS
        </Typography>
        
        <div className="product-cont">
        <Icon className={classes.icon}
            display="inline"
        >
            <ShoppingCartIcon/>
        </Icon>
        <Typography display="inline" className={classes.text}
        variant="h5">
            {productCount}
        </Typography>        
        <Typography display="inline" className={classes.text}
        variant="h5">
            Item
        </Typography>
        </div>
        </Container>
       
        <Container>
            <Grid container>            
            {
                products.map(product => {
                    return (
                    <Grid item  key={product.albumId} xs={12} md={6} lg={4} className={classes.GridItem}>
                       <ProductCard sendCount={getCount} product={product}/>
                    </Grid>
                    
                    )
                    
                })
            }
            </Grid>
            
        </Container>
        </>
    )
}

export default Products
