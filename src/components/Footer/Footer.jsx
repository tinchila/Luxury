import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/*left side*/}
        <div className="flexColStart f-left">
        <a href="#home"><img src="./logo2.png" alt="" width={120} /></a>
          <span className="secondaryText">
            Our vision is to make all people <br />
            the best place to live for them.
          </span>
        </div>
        {/*right side*/}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            Lisandro de la Torre, Córdoba, Argentina
          </span>
          <div className="flexCenter f-menu">
            <a href="#residencies">Residencies</a>
            <a href="#our-value">Our Value</a>
            <a href="#contact-us">Contact Us</a>
            <a href="#get-started">Get Started</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
