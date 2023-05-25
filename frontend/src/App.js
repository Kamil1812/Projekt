import './App.css';
import React, {useState} from 'react';
import LoginForm from './components/LoginForm/LoginForm';
import Lewy from './components/Lewy/Lewy'
import Prawy from './components/Prawy/Prawy'
import Srodkowy from './components/Srodkowy/Srodkowy'
import UserForm from './components/UserForm/UserForm.js';




function App() {

    const [token, setToken] = useState();
    const [display, setDisplay] = useState(false);

    if (!token) {
        return <LoginForm setToken={setToken}/>
    }
    function logOut() {
        <LoginForm setToken={
            setToken(false)
        }/>
    }
    
    if (display) {
            return( <UserForm/>)
        
    } 
    
  
    return (
        <div className="app">

            <div className='buttonDiv'>
                <button className='LogOutBtn'
                    onClick={logOut}
                    data-tooltip="Wyloguj sie"></button>
            </div>

            <Lewy/>

            <Srodkowy/>

            <Prawy/>
            

            <div className='buttonDiv'>
                <button className='NewUserBtn' data-tooltip="Dodaj nowego uzytkownika" onClick={()=>{setDisplay(!display)}} ></button>
            </div>

        </div>
    )
}

export default App;
