import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Login.css'


function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // lógica para autenticar o usuário com o servidor de backend
  };

  const handleRegister = () => {
    // lógica para ir para a página de registro
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Senha:
        <div style={{ position: 'relative' }}>
          <input type='password' value={password} onChange={handlePasswordChange} />
        </div>
      </label>
      <button type="submit">Login</button>
      <div id='rota'><Link to='/registro'>Registro</Link></div>
    </form>
  );
}

export default Login;