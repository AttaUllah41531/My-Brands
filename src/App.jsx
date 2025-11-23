import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./components/nav/nav";
import Home from "./components/Home/home";
import Hp from "./pages/Hp";
import Dell from "./pages/Dell";
import Simple from "./pages/Simple";
import Contact from "./components/contact";
import About from "./components/About/about";

function App() {
  return (
  <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hp" element={<Hp />} />
        <Route path="/dell" element={<Dell />} />
        <Route path="/simple" element={<Simple />} />
        <Route path ="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
