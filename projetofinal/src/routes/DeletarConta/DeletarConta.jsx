import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './DeletarConta.css'

function DeletarConta() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleDeleteAccount = async () => {
    try {
      const token = localStorage.getItem('token');
      const user = {
        nome: username,
        senha: password,
      };

      const response = await fetch('http://localhost:8080/usuarios', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        console.log('Conta excluída com sucesso!');
        navigate('/login'); // Redireciona para a tela de login
      } else {
        console.log('Falha ao excluir a conta.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };

  return (
    <div>
      <h2>Deletar Conta</h2>
      <label>
        Nome:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Senha:
        <input type="password" value={password} onChange={handlePasswordChange} />
      </label>
      <button onClick={handleDeleteAccount}>Deletar Conta</button>
      <div id="rota">
        <Link to="/home">Voltar para a Página Inicial</Link>
      </div>
    </div>
  );
}

export default DeletarConta;
