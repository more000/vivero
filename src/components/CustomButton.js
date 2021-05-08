import React from 'react';
import Button from '@material-ui/core/Button';

export default function CustomButton({quantity, onAdd, history}) {
    return (
        quantity===0 ?
        <Button variant="contained" color="primary" onClick={onAdd}>
            Agregar al carrito
        </Button> :
        <Button variant="contained" color="primary" onClick={() => {history.push('/cart')}}>
            Terminar mi compra
        </Button>
    )
}