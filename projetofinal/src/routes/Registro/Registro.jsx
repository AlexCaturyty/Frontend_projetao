import React, { useState } from 'react';
import styles from './Registro.css'

function Registro() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const handleChangeNome = (event) => {
    const valor = event.target.value;
    setNome(valor);
    console.log("Nome:", valor);
  };

  const handleChangeEmail = (event) => {
    const valor = event.target.value;
    setEmail(valor);
    console.log("Email:", valor);
  };

  const handleChangeSenha = (event) => {
    const valor = event.target.value;
    setSenha(valor);
    console.log("Senha:", valor);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = {
      nome: nome,
      email: email,
      senha: senha
    };

    try {
      const response = await fetch("http://localhost:8080/usuarios", {
        method: "POST",
        headers: {
          "Accept" : "application/json",
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Dados enviados com sucesso!', data);
        limparCampos();
        // Faça o tratamento necessário após o envio dos dados
      } else {
        console.log('Ocorreu um erro ao enviar os dados.');
        // Trate o erro adequadamente
      }
    } catch (error) {
      console.log('Ocorreu um erro na requisição:', error);
      // Trate o erro adequadamente
    }
  };

  const limparCampos = () => {
    setNome('');
    setEmail('');
    setSenha('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={nome} onChange={handleChangeNome} />
      </label>
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={handleChangeEmail} />
      </label>
      <br />
      <label>
        Senha:
        <input type="password" value={senha} onChange={handleChangeSenha} />
      </label>
      <br />
      <button type="submit">Enviar</button>
    </form>

   
  );

  
}

export default Registro;
