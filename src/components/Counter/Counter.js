import React from 'react';

export default function Counter({increment, decrement}){
    return(
        <div>
            <button onClick={decrement}>Decrementar</button>
            <button onClick={increment}>Incrementar</button>
        </div>
    )
}