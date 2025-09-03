import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Mapa from "./pages/Mapa";
import CrearAlerta from "./pages/CrearAlerta";
import ListaAlertas from "./pages/ListaAlertas";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Mapa />} />
        <Route path="/crear" element={<CrearAlerta />} />
        <Route path="/lista" element={<ListaAlertas />} />
      </Routes>
    </Router>
  );
}

export default App;
