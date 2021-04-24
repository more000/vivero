import React, {useState} from 'react';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';



export default function ItemCount({maxStock}){

    var [count, setCount] = useState(0);    
    
    const incrementCount = () => {
        setCount(Math.max(count + 1,0))
        if (count === maxStock) {
            alert(`El stock disponible es de ${maxStock} unidades`)
            setCount(maxStock)
        }
    } 

    const decrementCount = () => {
        setCount(Math.max(count - 1,0))
    }

    const onAdd = () => {
        alert(`Seleccionaste ${count} unidades del producto`)
        setCount(0)
    }


    return(
        <div>
            <RemoveIcon onClick={decrementCount}/>
            <div>Count: {count} / Stock disponible: {maxStock} unidades</div>
            <AddIcon onClick={incrementCount}/>
            <button onClick={onAdd}>Agregar al carrito</button>
        </div>
    )
}