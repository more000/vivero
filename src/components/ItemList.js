import React from "react";
import Item from "./Item";

export default function ItemList({ itemsInput }) {
  return (
        <ul>
            {itemsInput.map((item) => {
                return (
                    <Item key={item.id} item={item} />
                )
            })}
        </ul>
  );
}