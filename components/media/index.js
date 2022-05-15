import React from "react";
import { FaFigma, FaBlogger } from "react-icons/fa";
import { DiPhotoshop } from "react-icons/di";
import { SiMarketo } from "react-icons/si";
import { MdAnimation, MdOutlineGraphicEq } from "react-icons/md";
import { BsCameraFill, BsCameraReelsFill } from "react-icons/bs";

const DigitalMedia = () => {
  return (
    <div className="media">
      <div className="media_text">
        <h3>Digital Media</h3>
        <br />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime qui a
          odio aperiam cum, possimus sint sequi velit.
        </p>
        <br />
        <div className="media_cards">
          <div className="media_card">
            <FaFigma size={18} color="green" />
            <span>Figma Design</span>
          </div>
          <div className="media_card">
            <DiPhotoshop size={18} color="green" />
            <span>Photoshop</span>
          </div>
          <div className="media_card">
            <BsCameraFill size={18} color="green" />
            <span>Photography</span>
          </div>
          <div className="media_card">
            <BsCameraReelsFill size={18} color="green" />
            <span>Videography</span>
          </div>
          <div className="media_card">
            <SiMarketo size={18} color="green" />
            <span>Digital Marketing</span>
          </div>
          <div className="media_card">
            <MdAnimation size={18} color="green" />
            <span>Animation</span>
          </div>
          <div className="media_card">
            <FaBlogger size={18} color="green" />
            <span>Blogging</span>
          </div>
          <div className="media_card">
            <MdOutlineGraphicEq size={18} color="green" />
            <span>Graphic Design</span>
          </div>
        </div>
      </div>
      <div className="media_img">
        <img src="/images/dm.svg" alt="" className="media_img_in" />
      </div>
    </div>
  );
};

export default DigitalMedia;
