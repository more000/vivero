import React from "react";
import Item from "./Item";
import GridList from '@material-ui/core/GridList';
//import ItemDetailContainer from '../containers/ItemDetailContainer';

export default function ItemList({itemsInput}) {
  return (
    <GridList cellHeight={320} cols={3} container spacing={5}>
        {itemsInput.map((item) => {
            return (
                <Item key={item.itemId} item={item}/>
            )
        })}
    </GridList>
);
}

