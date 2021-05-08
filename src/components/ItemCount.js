import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import { Button, IconButton, OutlinedInput } from '@material-ui/core';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router';
import CustomButton from '../components/CustomButton'; 



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


export default function ItemCount({maxStock, handleAdd}){

    const classes = useStyles();

    const history = useHistory();

    var [count, setCount] = useState(0);

    const [quantity, setQuantity] = useState(0);
    
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

    const onAdd = () => {
      handleAdd(count);
      setQuantity(count);
      alert(`Seleccionaste ${count} unidades del producto`);
    }

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
        <CustomButton quantity={quantity} history={history} onAdd={onAdd}  />
      </Grid>
    )
}