import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Struktur from "./pages/Struktur";
import Acara from "./pages/Acara";
import Download from "./pages/Download";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/struktur-organisasi" element={<Struktur/>} />
        <Route path="/acara" element={<Acara/>} />
        <Route path="/download" element={<Download/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </div>
  );
}

export default App;
