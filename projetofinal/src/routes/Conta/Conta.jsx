import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styles from "./conta.css"

function Conta() {
  

  return (
    <div>
      <h2>Conta</h2>
      <div className="rota">
        <Link to="/home">Inicio</Link>
      </div>
      <div className="rota">
      <Link to="/editarconta">Editar Conta</Link>

      </div>
      
      <div className="rota">
      <Link to="/deletarconta">Deletar Conta</Link>
      </div>
    </div>
  );
}

export default Conta;
