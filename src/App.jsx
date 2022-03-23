import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Tabla } from "./pages/Tabla";
import { Mapa } from "./pages/Mapa";
import { Layout } from "./layout/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="tabla-bicing" element={<Tabla />} />
          <Route path="mapa-bicing" element={<Mapa />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
