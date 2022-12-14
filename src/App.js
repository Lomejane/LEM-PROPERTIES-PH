import './App.css';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import Home from './pages/Home';
import Properties from './pages/Properties';
import About from './pages/About';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './pages/Login';
import OwnersAccount from './helpers/OwnersAccount';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Icons
import {
  FaFacebook,
  FaInstagram,
  FaYoutube
}
from "react-icons/fa";
import 'material-symbols';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />          
          <Route path="/signup" element={<Signup />} />          
          <Route path="/login" element={<Login />} />          
          <Route path="/modal" element={<Modal />} /> 
          <Route path="/OwnersAccount" element={<OwnersAccount />} />       
        </Routes>
        <Footer />

      </Router>
     
    </div>
  );
}

export default App;
