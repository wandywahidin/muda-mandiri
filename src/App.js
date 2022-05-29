import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import { Routes, Route } from "react-router-dom";
import Struktur from "./pages/Struktur";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/struktur-organisasi" element={<Struktur/>} />
      </Routes>
    </div>
  );
}

export default App;
