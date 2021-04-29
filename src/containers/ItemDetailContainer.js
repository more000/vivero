import React, {useState, useEffect} from 'react';
import ItemDetail from '../components/ItemDetail';


function getItem(){
    return require("../assets/data/itemsDB.json")[0]
}

 export default function ItemDetailContainer() {

    const [item, setItem] = useState({});
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [pictureURL, setPictureURL] = useState('');
    const [stock, setStock] = useState(0);    


    useEffect(() => {
        const promesa = new Promise(() => {
            setTimeout(() => {
                setItem(getItem());
                setTitle(item.title);
                setDescription(item.description);
                setPrice(item.price);
                setPictureURL(item.pictureURL);
                setStock(item.stock)
            }, 2000)
        })
        promesa.then(task => task)
    }, []);

    return (
            <ItemDetail 
                title={title}
                description={description}
                price={price}
                pictureURL={pictureURL}
                stock={stock}
            />
            )
}
