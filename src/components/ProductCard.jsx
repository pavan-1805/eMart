import React,{ useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {    
    maxWidth: 350,
    minHeight : 400,
  },
  media: {
    marginLeft : 90,
    height: 200,
    width : 150
  },
  
});

function ProductCard(props) {
  const classes = useStyles();
  const [count, setCount] = useState(1)
 
  const IncreaseCount = () => {
    console.log(count);
    setCount(count+1)
    props.sendCount(count) 
     
  }

  return (
    <Card className={classes.root}>
      <CardActionArea className={classes.area}>
        <CardMedia
          className={classes.media}
          image={props.product.url}
          title="product"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
            {props.product.title}
          </Typography>
          </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" variant="outlined" onClick={()=>IncreaseCount()}>
          Add to Cart
        </Button>
        </CardActions>
    </Card>
  );
}

export default ProductCard
