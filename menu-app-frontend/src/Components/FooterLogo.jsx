import React from "react";
import "../styles/Footer.css";

const FooterLogo = () => {
  return (
    <div className="footer-box">
      <img src="/deeplogo.png" alt="Deep Net Soft" className="footer-logo" />
      <h2 className="footer-brand">DEEP <span>NET</span> SOFT</h2>
      <div className="footer-socials">
        <i className="fab fa-facebook"></i>
        <i className="fab fa-twitter"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-youtube"></i>
      </div>
    </div>
  );
};

export default FooterLogo;
