import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import SimularPartido from "./Components/SimularPartido/SimularPartido";
import Equipos from "./Components/Equipos/Equipos";
import Jugadores from "./Components/Jugadores/Jugadores";
import TeamContext from "./Context/TeamContext";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <TeamContext>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/jugadores" element={<Jugadores />} />
              <Route path="/equipos" element={<Equipos />} />
              <Route path="/simularPartido" element={<SimularPartido />} />
            </Routes>
          </Layout>
        </TeamContext>
      </BrowserRouter>
    </div>
  );
}

export default App;
