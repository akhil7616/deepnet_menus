import React from "react";
import FooterBox from "./FooterBox";
import FooterLogo from "./FooterLogo";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <FooterBox 
          title="CONNECT WITH US" 
          icon="📞" 
          content1="+91 9567843340" 
          content2="info@deepnetsoft.com" 
        />
        <FooterLogo />
        <FooterBox 
          title="FIND US" 
          icon="📍" 
          content1="First Floor, Geo Infopark" 
          content2="Infopark EXPY, Kakkanad" 
        />
      </div>
      <div className="footer-bottom">
        <p>© 2024 Deepnetsoft Solutions. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Terms & Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
