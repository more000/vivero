import React from 'react';
import './Login.css'

export default function Login(props) {
    return(
        <form className="container-form">
            <input className="container-form__input" onChange={props.inputChange} name="emailInput" type="text" placeholder="Ingrese e-mail"/>
            <input className="container-form__input" onChange={props.inputChange} name="passwordInput" type="password" placeholder="Ingrese password"/>
            <button className="container-form__button">Ingresar</button>
        </form>
        )
}