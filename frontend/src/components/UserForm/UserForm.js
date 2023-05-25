import React, { useState } from 'react';
import axios from 'axios';


export default function UserForm() {
      const {loginInput, setLogin} = useState()
      const [users, setUsers] = useState([]);
      const [loggedInUser, setLoggedInUser] = useState(null);
    
      const handleFormSubmit = async (event) => {
        event.preventDefault();
        const passwordInput = event.target.elements.password.value;
        const confirmPasswordInput = event.target.elements.confirmPassword.value;
    
        if (passwordInput !== confirmPasswordInput) {
          document.getElementById('err_message_span').textContent =
            'Hasła nie są zgodne.';
          return;
        }
    
        try {
          const response = await axios.post('./uzytk', {
            username: loginInput,
            password: passwordInput,
          });
    
          if (response.data.success) {
            // Pobieranie zaktualizowanej listy użytkowników
            const updatedUsersResponse = await axios.get('./uzytk',);
            setUsers(updatedUsersResponse.data);
    
            // Ustawienie zalogowanego użytkownika
            setLoggedInUser(response.data.user);
            event.target.reset();
          } else {
            console.error('Błąd podczas dodawania użytkownika:', response.data.msg);
          }
        } catch (error) {
          console.error('Błąd podczas dodawania użytkownika:', error);
        }
      };

  return (
    <div className="login-wrapper2">
      <h1>Utwórz użytkownika</h1>
      <form onSubmit={handleFormSubmit}>
        <label>
          <p>Login:</p>
          <input type="text" name="login" placeholder="Ustaw login" onChange={((e)=>setLogin(e.target.value))} required />
        </label>
        <label>
          <p>Hasło:</p>
          <input
            type="password"
            name="password"
            placeholder="Ustaw hasło"
            required
          />
        </label>
        <label>
          <p>Powtórz hasło:</p>
          <input
            type="password"
            name="confirmPassword"
            placeholder="Powtórz hasło"
            required
          />
        </label>
        <div>
          <button type="submit" onClick={handleFormSubmit}>Dodaj</button>
        </div>
        <span id="err_message_span"> </span>
      </form>

      {/* Wyświetlanie listy użytkowników */}
      <div>
        <p>Lista użytkowników:</p>
        {users.map((user) => (
          <p key={user._id}>{user.login}</p>
        ))}
      </div>

      {/* Wyświetlanie zalogowanego użytkownika */}
      <div>
        <p>Zalogowany użytkownik:</p>
        {loggedInUser ? (
          <p>{loggedInUser.login}</p>
        ) : (
          <p>Nikt nie jest zalogowany.</p>
        )}
      </div>
    </div>
  );
}