import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { Button, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme)=>({
    media : {

    },
    text : {

    }

}))

function Products() {
    const classes = useStyles()
    const [products, setProducts] = useState(Array)
    
    useEffect(async ()=>{

       const res = await axios.get('http://localhost:8080/pages')
       const result = await res.data[0].body.content[0].items
       setProducts([...result])

       //console.log(res.data[0].body.content[0].items);
             

    },[])
    console.log(products);

    
    return (
        <div>
            <h1>PRODUCTS</h1>
            {
                products.map(product => {
                    return (
                    <div  key={product.albumId}>
                    <Avatar className={classes.media} alt={product.id} src={product.url} />
                    <Typography className={classes.text}>{product.title}</Typography>
                    <Button
                    variant="contained"
                    color="secondary">Add to Cart</Button>
                    </div>
                    )
                    
                })
            }
            
        </div>
    )
}

export default Products
