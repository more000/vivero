import React, { useState, useEffect } from "react";
import ItemList from "../components/ItemList";
import ItemDetailContainer from "./ItemDetailContainer";
import ItemDetail from "../components/ItemDetail";

function getItems(){
    return require("../assets/data/itemsDB.json")
}


export default function ItemListContainer() {
    const [items, setItems] = useState([]);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [price, setPrice] = useState(0);
    const [pictureURL, setPictureURL] = useState('');
    const [stock, setStock] = useState(0);    
    const [modalOpen, setModalOpen] = useState(false);

    function onHandleClick(data) {
        setTitle(data.title);
        setDescription(data.description);
        setPrice(data.price);
        setPictureURL(data.pictureURL);
        setStock(data.stock) 
        setModalOpen(true);
      }

    useEffect(() => {
        const promesa = new Promise(() => {
            setTimeout(() => {
                setItems(getItems())
            }, 2000)
        })
        promesa.then(task => task)
    }, []);

     const content = (
        <ItemDetail 
            title={title}
            description={description}
            price={price}
            pictureURL={pictureURL}
            stock={stock}
        /> 
    )

    return (
        <div>
            <ItemList handleClick={onHandleClick} itemsInput={items} />
            <ItemDetailContainer close={() => setModalOpen(false)} open={modalOpen} content={content}/>
        </div>
  );
}
