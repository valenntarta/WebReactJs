import React, { useState } from 'react';
import axios from 'axios';
import './Jugadores.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export default function Jugadores() {
  const [busqueda, setBusqueda] = useState('');
  const [resultados, setResultados] = useState([]);
  const [error, setError] = useState(null);
  const [mostrarRecuadro, setMostrarRecuadro] = useState(true);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
  };

  const handleEnter = async (e) => {
    if (e && e.key !== 'Enter') {
      return; 
    }

    try {
      const apiKey = "fb864cbb8403590acc291950304c5b4a84ae40c020b14c16ff3fcf0146bea8c8";
      const url = `https://apiv2.allsportsapi.com/football/?&met=Players&playerName=${busqueda}&APIkey=${apiKey}`;
      const response = await axios.get(url);

      setResultados([response.data.result[0]]);
      setError(null);

      setMostrarRecuadro(false);
    } catch (error) {
      setError('Error al realizar la solicitud');
      setResultados([]);
      console.error('Error al realizar la solicitud:', error);
    }
  };

  const handleClick = async (e) => {
    await handleEnter(e);
  };


  const traducirPosicion = (posicionEnIngles) => {
    switch (posicionEnIngles) {
      case 'Goalkeepers':
        return 'Arquero';
      case 'Defender':
        return 'Defensores';
      case 'Midfielders':
        return 'Mediocampista';
      case 'Forwards':
        return 'Delantero';
      default:
        return posicionEnIngles;
    }
  };

  return (
    <div className='fJugadores'>
      {mostrarRecuadro && (
        <div className='recuadro1'>
          <input
            className="buscarJugador"
            value={busqueda}
            placeholder="Buscar jugador"
            onChange={handleChange}
            onKeyPress={handleEnter}
          />
          <button className="btn btn-success" onClick={() => { handleEnter(); handleClick(); }}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>
      )}

      {error && <p>{error}</p>}

      {resultados.length > 0 && (
        <div>
          <button
            onClick={() => {
              setResultados([]);
              setMostrarRecuadro(true);
              setBusqueda('');
            }}
            className="back-button1"
          >
            Volver al buscador
          </button>
          <div className="resultados">
            {resultados?.map((jugador) => (
              <div key={jugador?.player_key}>
                <img src={jugador?.player_image} alt="player" />
                <h3 className="texto-color-equipos">{jugador?.player_name}</h3>
                <p className="texto-color-equipos"> Edad: {jugador?.player_age}</p>
                <p className="texto-color-equipos"> Posición: {traducirPosicion(jugador?.player_type)}</p>
                <p className="texto-color-equipos"> Goles: {jugador?.player_goals}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
