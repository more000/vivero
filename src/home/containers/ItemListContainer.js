import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList";


function getItems(){
    return require("../assets/data/itemsDB.json")
}


export default function ItemListContainer() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const promesa = new Promise(() => {
            setTimeout(() => {
                setItems(getItems())
            }, 2000)
        })
        promesa.then(task => task)
    }, []);

    return (
        <div>
            <ItemList itemsInput={items} />
        </div>
  );
}
