import './App.css';
import React, {useState, useEffect} from 'react';
import LoginForm from './LoginForm';


function App() {

    const[token, setToken] = useState(false);

    //return login form
    if(!token) {
        return <LoginForm setToken={setToken} />
    }

    //return basic website if logged in
    return (
            <div className="app">
            {/* STRONA G£ÓWNA */}
            <center> <h1>  Strona g³ówna  </h1> </center>
            </div>
        )
}

export default App;