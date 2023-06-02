import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Login.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate(); // Hook useNavigate para redirecionamento

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Construa o objeto de dados para enviar ao servidor
    const data = {
      nome: username,
      senha: password,
    };

    try {
      // Realize a requisição para o endpoint de login no back-end
      const response = await fetch("http://localhost:8080/usuarios/login", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      // Verifique se a resposta foi bem-sucedida (código de status 2xx)
      if (response.ok) {
        // Autenticação bem-sucedida, redirecione para a página inicial
        navigate("/home");
      } else {
        // Autenticação falhou, exiba uma mensagem de erro ou faça alguma ação adequada
        console.log("Falha no login. Verifique suas credenciais.");
      }
    } catch (error) {
      // Ocorreu um erro na requisição, lide com o erro de acordo com a necessidade do seu aplicativo
      console.error("Erro na requisição:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nome:
        <input type="text" value={username} onChange={handleUsernameChange} />
      </label>
      <label>
        Senha:
        <div style={{ position: "relative" }}>
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
      </label>
      <button type="submit">Login</button>
      <div id="rota">
        <Link to="/registro">Registro</Link>
      </div>
    </form>
  );
}

export default Login;
