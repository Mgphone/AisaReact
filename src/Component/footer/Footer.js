import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons"; // Use free-brands-svg-icons
import { FaFacebook, FaInstagram } from "react-icons/fa";

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
        </div>
      </div>
      <div className="footer-row">
        <div className="footer-icons">
          <a
            href="https://www.facebook.com/asiavilla11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.instagram.com/asiavilla__/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
      {/* <p className="copyright">Copyright</p> */}
    </footer>
  );
}

export default Footer;
