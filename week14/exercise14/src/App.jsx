import { HashRouter, Routes, Route } from 'react-router-dom';
import "./css/app.css";
import About from "./pages/About.jsx";
import Home from "./pages/Home.jsx";
import Footer from "./components/Footer.jsx";
import Navbar from "./components/NavBar.jsx";

function App() {
  return (
    <div>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Home />
        <Footer />
      </HashRouter>
    </div>
  );
}

export default App;

