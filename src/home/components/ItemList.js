import React from "react";
import Item from "./Item";
import GridList from '@material-ui/core/GridList';

export default function ItemList({itemsInput, handleClick}) {
  return (
    <GridList cellHeight={320} cols={3} container spacing={5}>
        {itemsInput.map((item) => {
            return (
                <Item key={item.id} item={item} handleClick={handleClick}/>
            )
        })}
    </GridList>
);
}
