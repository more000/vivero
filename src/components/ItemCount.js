import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { IconButton, OutlinedInput } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    container: {
      width: 300,
      display: 'flex',
      alignItems: 'center',
    },

    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
  }));


export default function ItemCount({maxStock, onAdd}){

    const classes = useStyles();

    var [count, setCount] = useState(0);    
    
    const incrementCount = () => {
        setCount(Math.max(count + 1,0))
        if (count === maxStock) {
            alert(`El stock disponible es de ${maxStock} unidades`)
            setCount(maxStock)
        }
    } 

    const decrementCount = () => {
        setCount(Math.max(count - 1,0))
    }

/*     const onConfirm = () => {
    setQuantity(count);
    onAdd(quantity);
} */


    return(
        <Grid className={classes.container} container spacing={3}>
        <Grid item xs={4}>
          <IconButton
            aria-label="Icono menos"
            aria-controls="Quitar un post"
            aria-haspopup="true"
            color="inherit"
           
          />
          <RemoveIcon onClick={decrementCount} />
        </Grid>
        <Grid item xs={4}>
        <OutlinedInput 
          value={count}
          readOnly
        />
        </Grid>
        <Grid item xs={4}>
          <IconButton
            aria-label="Icono mas"
            aria-controls="Agregar un post"
            aria-haspopup="true"
            color="inherit"
            
          />
          <AddIcon onClick={incrementCount} />
        </Grid>
        <div>Stock disponible: {maxStock} unidades</div>
        <hr/>
        <button className={classes.container} onClick={onAdd(count)}>Agregar al carrito</button>
      </Grid>
    )
}