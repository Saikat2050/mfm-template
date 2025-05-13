// import logo from './logo.svg';
import "./App.css";
import Navbar from "./navbar";
import Footer from "./footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./home";
import About from "./about";
import Offerings from "./offerings";
import Contact from "./contact";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <Router>
      <Toaster position="top-right" reverseOrder={false} />
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/offerings" element={<Offerings />} />
            <Route path="/contact-us" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
