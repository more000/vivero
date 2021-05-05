import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import {useParams} from 'react-router-dom';


function getItems(categoryId){
    let itemlist = require("../assets/data/itemsDB.json");
    let res = [];    
    if (typeof categoryId == "undefined") {res = itemlist}
    else {
        for (let i=0; i<itemlist.length; i++) {
            if (itemlist[i].categoryId == categoryId) {res.push(itemlist[i])} 
        }    
    }
    return res
}


export default function ItemListContainer() {
    const [items, setItems] = useState([]);

    const {categoryId} = useParams();

    useEffect(() => {
        const promesa = new Promise(() => {
            setTimeout(() => {
                setItems(getItems(categoryId))
            }, 2000)
        })
        promesa.then(task => task)
    }, [categoryId]);

    return (
        <div>
            <ItemList itemsInput={items} />
        </div>
  );
}
