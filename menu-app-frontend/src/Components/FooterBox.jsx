import React from "react";
import "../styles/Footer.css";

const FooterBox = ({ title, icon, content1, content2 }) => {
  return (
    <div className="footer-box">
      <h3 className="footer-title">{title}</h3>
      {icon && <span className="footer-icon">{icon}</span>}
      <p>{content1}</p>
      <p>{content2}</p>
    </div>
  );
};

export default FooterBox;
