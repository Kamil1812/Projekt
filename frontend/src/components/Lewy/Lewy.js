import React from "react";
import './Lewy.css'

export default class Lewy extends React.Component { 
    render(){
        return (
            <div className="Lewy">
                <h1> Stwórz fiszkę: </h1>
                <label>
                    <p> Nazwa: </p>
                    <input type="text" />
                </label>
                <label>
                    <p> Sala: </p>
                    <select>
                        <option> Sala 1 </option>
                        <option> Sala 2 </option>
                        <option> Sala 3 </option>
                    </select>
                </label>
                <label>
                    <p> Wykonawca: </p>
                        <input type="checkbox" id ="MK" name="MK"/> Michał Kucko
                        <input type="checkbox" id ="XX" name="XX"/> Pan X
                </label>
                <label>
                    <p> Deadline: </p>
                    <input type="date" id="deadline" name="deadline" min="2022-06-02" />
                </label>
                <label>
                    <p> Opis (opcjonalnie): </p>
                    <input type="text" placeholder="" />
                </label>
                <div>
                    <button type="submit"> Dodaj </button> <button type="submit"> Wyczyść </button>
                </div>
            </div>
        )
    }
 }