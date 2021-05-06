import React, {useState, useEffect} from 'react';
import ItemDetail from '../components/ItemDetail';
import {useParams} from 'react-router-dom';


function getItem(itemId){
    let listItem = require("../assets/data/itemsDB.json");
    let res = {};

    for (let i=0; i<listItem.length; i++) {
        if (listItem[i].itemId === itemId) {
            res = listItem[i]
        } 
    } 
    return res//require("../assets/data/itemsDB posta.json")[itemId-1]//new_item
}

 export default function ItemDetailContainer() {

    const [item, setItem] = useState({});

    const {itemId} = useParams();

     useEffect(() => {
        const promesa = new Promise(() => {
            setTimeout(() => {
                setItem(getItem(itemId));
            }, 2000)
        })
        promesa.then(task => task)
    }, [itemId]);

    return (
             <ItemDetail 
                title={item.itemName}
                description={item.description}
                price={item.price}
                pictureURL={item.pictureURL}
                stock={item.stock}
            />
            )
}
