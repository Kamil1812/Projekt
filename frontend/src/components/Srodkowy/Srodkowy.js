import React from "react";
import './Srodkowy.css'

export default class Srodkowy extends React.Component {
    render() {
        return (

            <div className="Srodkowy">
               
                    <div className="textarea-container">
                        <textarea name="fiszka1" className="Fiszka"id="fiszka1" cols="30" rows="5" placeholder="Fiszka" readOnly/>
                        <textarea name="fiszka1" className="Fiszka"id="fiszka1" cols="30" rows="5" placeholder="Fiszka" readOnly/>
                        <textarea name="fiszka1" className="Fiszka"id="fiszka1" cols="30" rows="5" placeholder="Fiszka" readOnly/>
                        <textarea name="fiszka1" className="Fiszka"id="fiszka1" cols="30" rows="5" placeholder="Fiszka" readOnly/>
                        <textarea name="fiszka1" className="Fiszka"id="fiszka1" cols="30" rows="5" placeholder="Fiszka" readOnly/>
                        
                    </div>


                    <div className="button">

                        <button type="submit">
                            Edytuj
                        </button>


                        <button type="submit">
                            Usuń
                        </button>

                    </div>
                
            </div>
            
        )
    }
}
