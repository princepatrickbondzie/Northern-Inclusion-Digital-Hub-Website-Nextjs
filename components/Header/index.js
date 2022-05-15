import React from "react";
import {
  FaTelegram,
  FaLinkedin,
  FaFacebookSquare,
  FaTwitter,
} from "react-icons/fa";

const Header = () => {
  return (
    <div className="header">
      <div className="header_overlay">
        <div className="header_left">
          <h1>Northern Digital Inclusion Hub for Technology + Innovation</h1>
          <br />
          <h4>Connect with your community</h4>
          <button>Join the community</button>
          <br />
          <br />
          <div className="header_social">
            <FaTelegram size={25} color="white" cursor="pointer" />
            <FaLinkedin size={25} color="white" cursor="pointer" />
            <FaFacebookSquare size={25} color="white" cursor="pointer" />
            <FaTwitter size={25} color="white" cursor="pointer" />
          </div>
        </div>

        <div className="header_right" id="h_right">
          <div className="header_right_text">
            <hr />
            <div className="hr_right">
              <p>Connect with your fellow founders.</p>
              <p style={{ color: "darkorange" }} className="p_link">
                Join us on LinkedIn
              </p>
            </div>
          </div>
          <div className="header_right_text">
            <hr />
            <div className="hr_right">
              <p>Become part of the NIDH community.</p>
              <p style={{ color: "darkorange" }} className="p_link">
                Join our whatsApp group
              </p>
            </div>
          </div>
          <div className="header_right_text">
            <hr />
            <div className="hr_right">
              <p>Get the latest on our programs.</p>
              <p style={{ color: "darkorange" }} className="p_link">
                Join our telegram group
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
