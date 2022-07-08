import React from "react";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Struktur from "./pages/Struktur";
import Acara from "./pages/Acara";
import Download from "./pages/Download";
import Contact from "./pages/Contact";
import dataJson from "./utils";

function App() {
  const Data = dataJson
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home data={Data}/>} />
        <Route path="/struktur-organisasi" element={<Struktur/>} />
        <Route path="/acara" element={<Acara data ={Data}/>} />
        <Route path="/download" element={<Download/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
