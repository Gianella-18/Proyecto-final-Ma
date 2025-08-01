import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Embarazo from "./pages/Embarazo";
import Maternidad from "./pages/Maternidad";
import Productos from "./pages/Productos";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import Registro from "./pages/Registro";

import "./styles/global.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/embarazo" element={<Embarazo />} />
        <Route path="/maternidad" element={<Maternidad />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
