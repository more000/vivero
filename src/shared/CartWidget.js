import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

export default function CartWidget() {
    return(
        <IconButton>
          <ShoppingCart/>
        </IconButton>
        )
}