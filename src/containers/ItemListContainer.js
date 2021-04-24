
import React, { useState, useEffect } from "react";
import ItemCount from "../components/ItemCount";
import ItemList from "../components/ItemList";
const itemsDB = require("../assets/data/itemsDB.json"); 



export default function ItemListContainer() {
    const [items, setItems] = useState([]);

    /*     useEffect(() => {
        setTimeout(() => {
            setItems(itemsDB)
            }, 2000)
    }, []); */

    useEffect(() => {
        const promesa = new Promise(() => {
            setTimeout(() => {
                setItems(itemsDB)
            }, 2000)
        })
        promesa.then(task => task)
    }, []);

    return (
        <div>
            <ItemCount maxStock={5}/>
            <br/>
            <br/>
            <br/>
            <br/>
            <ItemList itemsInput={items} />
        </div>
  );
}
