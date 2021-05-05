import React from "react";
import GridListTile from '@material-ui/core/GridListTile';


export default function Item({item, handleClick}) {

    return (
    <div>
        <GridListTile onClick={() => handleClick(item)} key={item.id}>
            <img src={item.pictureURL} alt={item.title}/>
        </GridListTile>
    </div>
  );
}