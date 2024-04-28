import React, { useReducer, useEffect } from "react";
import axios from "axios";
import Context from "./Context";
import reducer from "./reducer";

export default function TeamContext({ children }) {
  const [state, dispatch] = useReducer(reducer, { clubes: [] });

  const obtenerEquipos = async () => {
    const equipos = [
      "real%20madrid",
      "Manchester%20City",
      "Barcelona",
      "Chelsea",
      "ac%20Milan",
      "Juventus",
      "Manchester%20United",
      "Bayern%20Munich",
      "Liverpool",
      "psg",
    ];

    const clubesArray = [];

    for (let index = 0; index < equipos.length; index++) {
      const apiKey =
        "fb864cbb8403590acc291950304c5b4a84ae40c020b14c16ff3fcf0146bea8c8";
      const pedido = `https://apiv2.allsportsapi.com/football/?&met=Teams&teamName=${equipos[index]}&APIkey=${apiKey}`;

      try {
        const res = await axios.get(pedido);
        const club = res.data.result[0];

        clubesArray.push(club);
      } catch (error) {
        console.error(error);
      }
    }


    dispatch({ type: "OBTENER_EQUIPOS", payload: clubesArray });
  };

  return (
    <Context.Provider value={{ clubes: state.clubes, obtenerEquipos }}>
      {children}
    </Context.Provider>
  );
}
