import React from 'react';
import styles from './Historico.css'

function HistoricoApostas() {
  
  const [apostas, setApostas] = React.useState([]);

  // Função para carregar as apostas do localStorage ao iniciar a tela
  React.useEffect(() => {
    const storedApostas = localStorage.getItem('apostas');
    if (storedApostas) {
      setApostas(JSON.parse(storedApostas));
    }
  }, []);

  // Função para deletar uma aposta
  const handleDeleteAposta = (id) => {
    const updatedApostas = apostas.filter((aposta) => aposta.id !== id);
    setApostas(updatedApostas);
    localStorage.setItem('apostas', JSON.stringify(updatedApostas));
  };

  return (
    <div>
      <h2>Histórico de Apostas</h2>
      {apostas.length > 0 ? (
        <ul>
          {apostas.map((aposta) => (
            <li key={aposta.id}>
              Jogo: {aposta.jogo} | Tipo: {aposta.tipo} | Valor: {aposta.valor} | Time: {aposta.time}
              <button onClick={() => handleDeleteAposta(aposta.id)}>Deletar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhuma aposta encontrada.</p>
      )}
    </div>
  );
}

export default HistoricoApostas;
