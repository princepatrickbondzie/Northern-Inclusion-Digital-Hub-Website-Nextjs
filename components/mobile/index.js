import React from "react";
import { HiBadgeCheck } from "react-icons/hi";

const Mobile = () => {
  return (
    <div className="mobile">
      <h3>Mobile App Development</h3>
      <p>
        We develop mobile applications across devices and platforms, for
        consumer‑facing and corporate environment.
      </p>
      <div className="mobile_container">
        <div className="mobile_img">
          <img src="/images/mob-1.svg" alt="" />
        </div>
        <div className="mobile_text">
          <h4>Modern Mobile Applications</h4>
          <p>
            Our native as well as cross platform applications can help customize
            your business needs, ensure transparency and add value. Also these
            applications are secure, sophisticated and feature-rich.
          </p>
          <ul>
            <li>
              <HiBadgeCheck color="green" /> World Class UX/UI design
            </li>
            <li>
              <HiBadgeCheck color="green" /> Based on JacaScript or Dart
            </li>
            <li>
              <HiBadgeCheck color="green" /> Flexible Architecture
            </li>
            <li>
              <HiBadgeCheck color="green" /> Cross-platform Solutions
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Mobile;
