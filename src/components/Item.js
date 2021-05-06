import React from "react";
import GridListTile from '@material-ui/core/GridListTile';
import {useHistory} from 'react-router-dom';


export default function Item({item}) {

    const history = useHistory();

    return (
    <div>
        <GridListTile onClick={() => history.push('/item/' + item.itemId)} key={item.id}>
            <img src={item.pictureURL} alt={item.title}/>
        </GridListTile>
    </div>
  );
}