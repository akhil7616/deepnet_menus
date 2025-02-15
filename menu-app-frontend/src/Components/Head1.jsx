import React from 'react';
import '../styles/head1.css';
import bgImage from '../assets/bg1.jpg'; // Import image

const Head1 = () => {
  return (
    <div className="head1" style={{ backgroundImage: `url(${bgImage})` }}>
      <h1 className="headmenu">MENU</h1>
      <p className="headertext">
        Please take a look at our menu featuring food, drinks, and brunch. If you'd like to
        place an order, use the "Order Online" button located below the menu.
      </p>
    </div>
  );
};

export default Head1;
