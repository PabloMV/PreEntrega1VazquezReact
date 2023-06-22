import { Component } from "react";
import "./App.css";
import Header from "./components/Headers/Header";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

import Homepage from "./components/pages/Home/HomePage";
import Contacto from "./components/pages/Contacto/ContactoPage";
import Catalogo from "./components/pages/Catalogo/CatalogoPage";
import Detalle from "./components/pages/Detalle/Detallepage";
import Categoria from "./components/pages/Categoria/Categoria";


function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">
          <Header />
        </Link>
        <NavBar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/detalle/:id" element={<Detalle/>} />
          <Route path="/categoria/:category" element={<Categoria/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
