import React from "react";
import './Srodkowy.css'

export default class Srodkowy extends React.Component { 
    render() {
        return (
            <div className="Srodkowy">
                <h1> FISZKI </h1>
                <textarea name="fiszka1" id="fiszka1" cols="30" rows="5" placeholder="Fiszka1" readOnly/>
                <button type="submit"> Edytuj </button> <button type="submit"> Usuń </button>
            </div>
        )
    }
 }