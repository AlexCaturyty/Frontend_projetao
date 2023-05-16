import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.css'

function Apostas() {
    const [apostas, setApostas] = useState([]);
    const [jogo, setJogo] = useState('futebol');
    const [tipo, setTipo] = useState('vencedor');
    const [valor, setValor] = useState('');
    const [time, setTime] = useState('');

    const timesBrasileirao = ['América-MG', 'Athletico-PR', 'Atlético-GO', 'Atlético-MG', 'Avaí', 'Botafogo', 'Ceará', 'Chapecoense', 'Corinthians', 'Coritiba', 'Criciúma', 'Cruzeiro', 'CSA', 'Figueirense', 'Flamengo', 'Fluminense', 'Fortaleza', 'Goiás', 'Grêmio', 'Internacional', 'Juventude', 'Náutico', 'Palmeiras', 'Ponte Preta', 'Portuguesa', 'Red Bull Bragantino', 'Santa Cruz', 'Santos', 'São Paulo', 'Sport', 'Vasco da Gama', 'Vitória'];

    const handleNovaAposta = (event) => {
        event.preventDefault();
        const novaAposta = {
            id: new Date().getTime(),
            jogo: jogo,
            tipo: tipo,
            valor: valor,
            time: time,
        };
        setApostas([...apostas, novaAposta]);
        setValor('');
        setTime('');

        // Salvando as apostas no localStorage
        const storedApostas = localStorage.getItem('apostas');
        if (storedApostas) {
            const parsedApostas = JSON.parse(storedApostas);
            localStorage.setItem('apostas', JSON.stringify([...parsedApostas, novaAposta]));
        } else {
            localStorage.setItem('apostas', JSON.stringify([novaAposta]));
        }
    };

    return (
        <div>
            <form onSubmit={handleNovaAposta}>
                <label>
                    Selecione o jogo:
                    <select value={jogo} onChange={(e) => setJogo(e.target.value)}>
                        <option value="futebol">Futebol</option>
                    </select>
                </label>
                <label>
                    Selecione o tipo de aposta:
                    <select value={tipo} onChange={(e) => setTipo(e.target.value)}>
                        <option value="vencedor">Vencedor</option>
                        <option value="placar">Placar</option>
                        <option value="total">Total</option>
                    </select>
                </label>
                <label>
                    Valor da aposta:
                    <input type="number" value={valor} onChange={(e) => setValor(e.target.value)} />
                </label>

                <label>
                    Selecione o time:
                    <select value={time} onChange={(e) => setTime(e.target.value)}>
                        <option value="">Selecione o time</option>
                        {timesBrasileirao.map((time) => (
                            <option key={time} value={time}>
                                {time}
                            </option>
                        ))}
                    </select>
                </label>

                <button type="submit">Adicionar Aposta</button>
                <Link to={"/historico"}>Ver Histórico de Apostas</Link>
            </form>
        </div>
    );
}

export default Apostas;

