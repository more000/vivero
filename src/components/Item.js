import React from "react";


export default function Item({item}) {
  return (
    <li>Producto: {item.title} // Precio: {item.price} </li>
  );
}