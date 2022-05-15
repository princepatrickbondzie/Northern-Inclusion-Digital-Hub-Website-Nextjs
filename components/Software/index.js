import React from "react";
import { TiStarburst } from "react-icons/ti";
import {
  FaReact,
  FaLaravel,
  FaVuejs,
  FaAngular,
  FaEmber,
} from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { DiResponsive } from "react-icons/di";

const Software = () => {
  return (
    <div className="software">
      <div className="software_text">
        <h3>Web & Software Development</h3>
        <br />
        <p>
          A website is a brand touchpoint, a business tool, and a place to drive
          critical conversions. A great website can be an engine of business
          growth.
        </p>
        <br />
        <div className="software_cards">
          <div className="software_card">
            <DiResponsive size={18} color="green" />
            <span>Responsive Design</span>
          </div>
          <div className="software_card">
            <TiStarburst size={18} color="green" />
            <span>UI / UX Design</span>
          </div>
          <div className="software_card">
            <FaLaravel size={18} color="green" />
            <span>Laravel Web Development</span>
          </div>
          <div className="software_card">
            <FaReact size={18} color="green" />
            <span>React Web Development</span>
          </div>
          <div className="software_card">
            <FaAngular size={18} color="green" />
            <span>Angular Web Development</span>
          </div>
          <div className="software_card">
            <FaVuejs size={18} color="green" />
            <span>Vue Web Development</span>
          </div>
          <div className="software_card">
            <RiFlutterFill size={18} color="green" />
            <span>Flutter Web Development</span>
          </div>
          <div className="software_card">
            <FaEmber size={18} color="green" />
            <span>Ember Web Development</span>
          </div>
        </div>
      </div>
      <div className="software_img">
        <img src="/images/pair.svg" alt="" className="software_img_1" />
      </div>
    </div>
  );
};

export default Software;
