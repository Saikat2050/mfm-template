import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="navbar-ss-v1">
        <div className="nav-item">
            <img src="https://img.icons8.com/?size=24&id=1iF9PyJ2Thzo&format=png&color=FFFFFF" className="icon" alt="Home" />
            <Link to="/"><span>Home</span></Link>
        </div>
        <div className="nav-item">
            <img src="https://img.icons8.com/?size=100&id=87001&format=png&color=FFFFFF" className="icon" alt="About" />
            <Link to="/about-us"><span>About Us</span></Link>
        </div>
        <div className="nav-item">
            <img src="https://img.icons8.com/?size=100&id=100949&format=png&color=FFFFFF" className="icon" alt="Our Offerings" />
            <Link to="/offerings"><span>Our Offerings</span></Link>
        </div>
        <div className="nav-item">
            <img src="https://img.icons8.com/?size=24&id=6H65NWsqha0Z&format=png&color=FFFFFF" className="icon" alt="Contact Us" />
          <Link to="/contact-us"><span>Contact Us</span></Link>
        </div>
    </div>
    </div>
  );
}

export default Navbar;
