import React from "react";
import { MdWebStories } from "react-icons/md";
import { FaLaptopCode, FaMobileAlt } from "react-icons/fa";
import { BsFillMenuButtonWideFill } from "react-icons/bs";

const Services = () => {
  return (
    <div className="services">
      <h3>Services</h3>
      <hr />
      <div className="services_container">
        <div className="service_card">
          <div className="service_card_icon">
            <MdWebStories size={40} color="white" />
          </div>
          <h5>Web Design</h5>
          <p>
            We offer modern, mobile friendly and professional website designs.
            We provide design concepts, implementation and maintenance.
          </p>
        </div>
        <div className="service_card">
          <div className="service_card_icon">
            <FaLaptopCode size={40} color="white" />
          </div>
          <h5>Software Development</h5>
          <p>
            We use the latest frontend technologies and best practices to offer
            the best software development services.
          </p>
        </div>
        <div className="service_card">
          <div className="service_card_icon">
            <FaMobileAlt size={40} color="white" />
          </div>
          <h5>Mobile App Development</h5>
          <p>
            We develop mobile applications across devices and platforms, for
            consumer‑facing and corporate environment.
          </p>
        </div>
        <div className="service_card">
          <div className="service_card_icon">
            <BsFillMenuButtonWideFill size={40} color="white" />
          </div>
          <h5>Digital Media</h5>
          <p>
            Unlimited Cloud Hosting with WHM/cPanel access. Enjoy top-notch
            service at a fraction of the price you’d pay with competitors.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
