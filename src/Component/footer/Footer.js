import React from "react";
import "./Footer.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
// Use free-brands-svg-icons
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";

function Footer() {
  return (
    <footer>
      {/* <hr /> */}
      <div className="footer-row">
        <div className="footer-image">
          <img src="/Photos/Asia Villa-1.png" alt="Logo" />
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-paragraph">
          <p>
            Experience our mastery in the dark arts of molecular mixology, where
            we become culinary demons in the kitchen, creating unforgettable
            flavors and experiences for your palate.
          </p>
          <p className="credit">Crafted with ♥️♥️ from MgPhone</p>
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-icons">
          <a
            href="https://www.facebook.com/asiavilla11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook color="#e5007e" />
          </a>
          <a
            href="https://www.instagram.com/asiavilla__/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram color="e5007e" />
          </a>
          <a
            href="https://www.tiktok.com/@asiavilla?_t=8gNNqR3NevR&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTiktok color="e5007e" />
          </a>
        </div>
      </div>
      {/* <p className="copyright">Copyright</p> */}
    </footer>
  );
}

export default Footer;
