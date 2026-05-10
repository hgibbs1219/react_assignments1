import { HashRouter, Routes, Route } from "react-router-dom";
import "./css/app.css";

import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";

import Navbar from "./components/NavBar.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <HashRouter>
      <Header />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </HashRouter>
  );
}

export default App;