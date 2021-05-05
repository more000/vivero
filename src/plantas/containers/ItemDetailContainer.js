import React, {useState, useEffect} from 'react';
import ItemDetail from '../components/ItemDetail';


function getItem(){
    return require("../assets/data/itemsDB.json")[0]
}

 export default function ItemDetailContainer() {

    const [item, setItem] = useState({});

    useEffect(() => {
        const promesa = new Promise(() => {
            setTimeout(() => {
                setItem(getItem());
            }, 2000)
        })
        promesa.then(task => task)
    }, []);

    return (
            <ItemDetail 
                title={item.title}
                description={item.description}
                price={item.price}
                pictureURL={item.pictureURL}
                stock={item.stock}
            />
            )
}
