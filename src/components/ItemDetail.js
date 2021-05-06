import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
//import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ItemCount from './ItemCount';

const useStyles = makeStyles({
    root: {
      maxWidth: 130,
    },
    media: {
      height: 130,
    },
  });

export default function ItemDetail({title, description, price, pictureURL, stock}) {
    const classes = useStyles();
    
    function onAdd(count) {
        console.log(`${count} products added`)
    }

    return (
        <Card>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={pictureURL}
                    title={pictureURL}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        {title}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {description}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Price: ${price}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <ItemCount maxStock={stock} onAdd={onAdd}/>
            </CardActions>
      </Card>
      )
}
