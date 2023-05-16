import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Registro.css'

function Registro() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleUsernameChange = (event) => {
      setUsername(event.target.value);
    };
  
    const handleEmailChange = (event) => {
      setEmail(event.target.value);
    };
  
    const handlePasswordChange = (event) => {
      setPassword(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // lógica para registrar o usuário com o servidor de backend
    };
  
    return (
      <div className="container">
        <form onSubmit={handleSubmit}>
          <label>
            Nome:
            <input type="text" value={username} onChange={handleUsernameChange} />
          </label>
          <label>
            Email:
            <input type="email" value={email} onChange={handleEmailChange} />
          </label>
          <label>
            Senha:
            <input type="password" value={password} onChange={handlePasswordChange} />
          </label>
          <div id='rota'><Link to='/home'>Registro</Link></div>
        </form>
      </div>
    );
  }
  
  export default Registro;