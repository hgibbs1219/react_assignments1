import './css/app.css';
import Navbar from './components/NavBar.jsx';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content-wrapper">
        <Home />
      </div>
    </div>
  );
}
export default App;