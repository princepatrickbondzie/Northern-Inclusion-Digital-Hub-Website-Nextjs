import React from "react";
import { RiCheckboxBlankFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_row">
        <div className="footer_col" id="footer_col_1">
          <h3>Northen Inclusion TechHub</h3>
          <hr />
          <p>
            We are a one-stop software development agency that merges
            exceptional design with state-of-art technology. Our team designs,
            and develops custom websites and web applications for start-ups,
            mid-sized businesses and large enterprises.
          </p>
        </div>
        <div className="footer_col">
          <h3>Useful Links</h3>
          <hr />
          <div>
            <span>
              <RiCheckboxBlankFill color="green" size={12} /> Services
            </span>
            <span>
              <RiCheckboxBlankFill color="green" size={12} /> About Us
            </span>
            <span>
              <RiCheckboxBlankFill color="green" size={12} /> Careers
            </span>
            <span>
              <RiCheckboxBlankFill color="green" size={12} /> Portfolio
            </span>
          </div>
        </div>
        <div className="footer_col">
          <h3>Other Services</h3>
          <hr />
          <div>
            <span>
              <RiCheckboxBlankFill color="green" size={12} /> Acceleration
              Program
            </span>
            <span>
              <RiCheckboxBlankFill color="green" size={12} /> Branding and
              Design
            </span>
            <span>
              <RiCheckboxBlankFill color="green" size={12} /> Website Redesign &
              Maintenance
            </span>
            <span>
              <RiCheckboxBlankFill color="green" size={12} /> E-commerce
              Solutions
            </span>
          </div>
        </div>
        <div className="footer_col">
          <h3>Contact Us</h3>
          <hr />
          <div>
            <span>
              <RiCheckboxBlankFill color="green" size={12} /> Location: Tamale,
              Ghana.
            </span>
            <span>
              <RiCheckboxBlankFill color="green" size={12} /> Email:
              northenidhub@gmail.com
            </span>
            <span>
              <RiCheckboxBlankFill color="green" size={12} /> Phone: +233 300
              536 87
            </span>
          </div>
        </div>
      </div>
      <p>
        Copyright © 2022, Northern Inclusion Digital Hub. Powered by Northern
        Inclusion Digital Hub Agency.
      </p>
    </div>
  );
};

export default Footer;
