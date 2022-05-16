import React from "react";
import { FaSignInAlt, FaPhoneAlt } from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";

const Navigation = () => {
  return (
    <div className="navigation">
      <div className="top_navigation">
        <div className="top_nav_text">
          <p>Welcome to Northern Digital Inclusion Hub</p>
        </div>
        <div className="top_nav_contact">
          <div className="top_nav_contact_phone">
            <FaPhoneAlt size={17} />
            <span>+233 551 1439 80</span>
          </div>
          <div className="top_nav_contact_mail">
            <MdMailOutline size={20} />
            <span>northerndigitalhub@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="bottom_navigation">
        <div className="bottom_nav_logo">
          <Image
            className="logo_img"
            src="/images/NDIH_logo.png"
            alt="ndih"
            height="30"
            width="50"
          />
          <h4>
            <span>NORTHERN DIGITAL</span>
            <span>INCLUSION HUB</span>
          </h4>
        </div>
        <div className="bottom_nav_menu">
          <span>
            <Link href="/">HOME</Link>
          </span>
          <span>WEB DESIGN</span>
          <span>SOFTWARE DEVELOPMENT</span>
          <span>MOBILE APP DEVELOPMENT</span>
          <span>PORTFOLIO</span>
        </div>
        <div className="bottom_nav_btn">
          <button style={{ background: "rgb(10, 24, 55)", color: "white" }}>
            <FaSignInAlt
              style={{
                margin: "0 8px -2px -3px",
                color: "white",
              }}
            />
            Contact Us
          </button>
          <button
            style={{
              border: "0.8px solid rgb(10, 24, 55)",
              background: "transparent",
            }}
          >
            Inquire from us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
