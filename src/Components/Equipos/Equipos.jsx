import "./Equipos.css";
import React, { useEffect, useContext, useState } from "react";
import Context from "../../Context/Context";

export default function Equipos() {
  const { obtenerEquipos, clubes } = useContext(Context);
  const [equipoSeleccionado, setEquipoSeleccionado] = useState(null);
  
  useEffect(() => {
    obtenerEquipos();
  }, []);

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
    <div className="fEquipos">
      {clubes.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        <div className="contenedor-cajas">
          {equipoSeleccionado === null ? (
            clubes.map((equipo, index) => (
              <button
                onClick={() => setEquipoSeleccionado(equipo)}
                className="team-button"
              >
                <div key={index} className="equipo-caja">
                  <h2 className="texto-color-equipos">{equipo.team_name}</h2>
                  <img src={equipo.team_logo} alt="" />
                </div>
              </button>
            ))
          ) : (
            <div>
              <button
                onClick={() => setEquipoSeleccionado(null)}
                className="back-button">
                Volver a equipos
              </button>
              <div className="equipo-container">
                <img src={equipoSeleccionado?.team_logo} alt="logo"></img>
                <h3 className="texto-color-equipos">{equipoSeleccionado?.team_name}</h3>
                <h5 className="texto-color-equipos">
                  Entrenador: {equipoSeleccionado?.coaches[0]?.coach_name}
                </h5>
                <div className="players-list">
                  {equipoSeleccionado?.players.map((player, index) => (
                    <div className="listando-jugadores">
                      <div className="jugadores-textos">
                        <span className="texto-color-equipos">
                          {player?.player_name} &nbsp;
                          {player?.player_age} años &nbsp;
                          {traducirPosicion(player?.player_type)}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
