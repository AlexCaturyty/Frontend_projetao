import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from './EditarConta.css';

function EditarConta() {
  const navigate = useNavigate();
  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleUsernameChange = (event) => {
    setNewUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setNewPassword(event.target.value);
  };

  const handleEditAccount = async () => {
    try {
      const token = localStorage.getItem('token');
      const user = {
        novoNome: newUsername,
        novaSenha: newPassword,
      };
  
      const response = await fetch('http://localhost:8080/usuarios', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(user),
      });
  
      if (response.ok) {
        console.log('Conta editada com sucesso!');
        navigate('/login'); // Redireciona para a tela de login
      } else {
        console.log('Falha ao editar a conta.');
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  };
  

  return (
    <div>
      <h2>Editar Conta</h2>
      <label>
        Novo Nome:
        <input type="text" value={newUsername} onChange={handleUsernameChange} />
      </label>
      <label>
        Nova Senha:
        <input type="password" value={newPassword} onChange={handlePasswordChange} />
      </label>
      <button onClick={handleEditAccount}>Editar Conta</button>
      <div className="rota">
        <Link to="/home">Voltar para a Página Inicial</Link>
      </div>
    </div>
  );
}

export default EditarConta;
