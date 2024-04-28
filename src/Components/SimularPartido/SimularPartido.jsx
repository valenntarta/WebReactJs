import React, { useEffect, useContext, useState } from "react";
import Context from "../../Context/Context";
import "./SimularPartido.css";

export default function Nosotros() {
  const { obtenerEquipos, clubes } = useContext(Context);
  const [equipoSeleccionado1, setEquipoSeleccionado1] = useState(null);
  const [equipoSeleccionado2, setEquipoSeleccionado2] = useState(null);
  const [empate, setEmpate] = useState("Empate");
  const [ganador, setGanador] = useState(null)
  const [resultado, setResultado] = useState(null);

  useEffect(() => {
    obtenerEquipos();
  }, []);

  const seleccionarEquipo = (equipo) => {
    if (equipoSeleccionado1 === null) {
      setEquipoSeleccionado1(equipo);
    } else if (equipoSeleccionado2 === null) {
      setEquipoSeleccionado2(equipo);
    }
  };

  const reelegirEquipos = () => {
    setEquipoSeleccionado1(null)
    setEquipoSeleccionado2(null)
    setResultado(null)
  }

  const simularPartido = () => {
    const resultadoEquipo1 = Math.floor(Math.random() * 5) + 1;
    const resultadoEquipo2 = Math.floor(Math.random() * 5) + 1;


    let ganador;
    if (resultadoEquipo1 > resultadoEquipo2) {
      ganador = equipoSeleccionado1.team_name;
    } else if (resultadoEquipo1 < resultadoEquipo2) {
      ganador = equipoSeleccionado2.team_name;
    } else {
      ganador = empate;
    }
    
    setResultado({
      equipo1: { ...equipoSeleccionado1, resultado: resultadoEquipo1 },
      equipo2: { ...equipoSeleccionado2, resultado: resultadoEquipo2 },
      ganador: ganador
    });
  };

  return (
    <div className="fNosotros">
      {clubes.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        <div className="contenedor-cajas">
          {equipoSeleccionado1 === null || equipoSeleccionado2 === null ? (
            <>
              <div className="seleccionados-container">
                {equipoSeleccionado1 && (
                  <div className="equipo-seleccionado">
                    <h2 className="texto-color-equipos">{equipoSeleccionado1.team_name}</h2>
                    <img src={equipoSeleccionado1.team_logo} alt="" />
                  </div>
                )}
                {equipoSeleccionado2 && (
                  <div className="equipo-seleccionado">
                    <h2 className="texto-color-equipos">{equipoSeleccionado2.team_name}</h2>
                    <img src={equipoSeleccionado2.team_logo} alt="" />
                  </div>
                )}
                {equipoSeleccionado1 && equipoSeleccionado2 && (
                  <>
                    <p className="vs-text">VS</p>
                    <button onClick={simularPartido}>Simular Partido</button>
                  </>
                )}
              </div>
              <div className="equipos-disponibles">
                {clubes.map((equipo, index) => (
                  <button
                    key={index}
                    onClick={() => seleccionarEquipo(equipo)}
                    className={`team-button ${equipoSeleccionado1 === equipo || equipoSeleccionado2 === equipo ? "seleccionado" : ""}`}
                  >
                    <div className="equipo-caja">
                      <h2 className="texto-color-equipos">{equipo.team_name}</h2>
                      <img src={equipo.team_logo} alt="" />
                    </div>
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div className="resultado-container">
              <div className="equipos-seleccionados">
                <div className="equipo-seleccionado">
                  <h2 className="texto-color-equipos">{equipoSeleccionado1.team_name}</h2>
                  <img src={equipoSeleccionado1.team_logo} alt="" />
                </div>
                <div className="vs-text">VS</div>
                <div className="equipo-seleccionado">
                  <h2 className="texto-color-equipos">{equipoSeleccionado2.team_name}</h2>
                  <img src={equipoSeleccionado2.team_logo} alt="" />
                </div>
              </div>
              <button onClick={simularPartido}>Simular Partido</button>
              <br />
              <button onClick={reelegirEquipos}>Volver a elegir equipos</button>
              {resultado && (
                <div className="resultado">
                  <p className="texto-color-equipos" style={{ fontSize: "50px" }}>{resultado.equipo1.nombre} {resultado.equipo1.resultado}</p>
                  <p className="texto-color-equipos" style={{ fontSize: "50px" }}>{resultado.equipo2.nombre} {resultado.equipo2.resultado}</p>
                  <p className="texto-color-equipos" style={{ fontSize: "50px" }} >Resultado: {resultado.ganador}</p>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}