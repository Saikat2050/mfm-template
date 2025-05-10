import "./footer.css";
import { Link } from "react-router-dom";
import image from './mfm_logo.png';

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-logo-section">
          <img 
            src={image}
            alt="MFM Logo" 
            className="footer-logo-img"
          />
          <p className="tagline">Modern Fragrant Merchants</p>
        </div>
        
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li>
              <div className="icon-wrapper">
                <svg className="flower-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 8C12 8 16 5.5 16 12C16 18.5 12 16 12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 8C12 8 8 5.5 8 12C8 18.5 12 16 12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 2V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <Link to="/">Home</Link>
            </li>
            <li>
              <div className="icon-wrapper">
                <svg className="flower-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M12 8C12 8 16 5.5 16 12C16 18.5 12 16 12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 8C12 8 8 5.5 8 12C8 18.5 12 16 12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <div className="icon-wrapper">
                <svg className="flower-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M6 12H18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M12 6V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </div>
              <Link to="/offerings">Our Offerings</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section contact-info">
          <h3>Contact Us</h3>
          <div className="contact-item">
            <div className="contact-icon">📍</div>
            <p>Head Office: Delhi, India</p>
          </div>
          <div className="contact-item">
            <div className="contact-icon">✉️</div>
            <a href="mailto:mfmdelhi24@gmail.com">Email: mfmdelhi24@gmail.com</a>
          </div>
          <div className="contact-item">
            <div className="contact-icon">📞</div>
            <p>Phone: 8595964802</p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Modern Fragrant Merchants. All rights reserved.</p>
      </div>
    </div>
  );
}

export default Footer;