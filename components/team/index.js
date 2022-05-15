import React from "react";
// import { HiBadgeCheck } from "react-icons/hi";

const Team = () => {
  return (
    <div className="team">
      <h3>Our Team</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
        distinctio odit ipsum quos nemo et. Suscipit fugiat tempore soluta
        ratione! Veniam praesentium.
      </p>
      <br />
      <div className="team_container">
        <div className="team_card">
          <img src="/images/team-1.jpg" alt="" />
          <div className="team_card_info">
            <h4>Abdul Rafiq</h4>
            <i>- Chief Executive Officer</i>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore,
              aliquid, sed neque nesciunt dignissimos, placeat libero esse vero.
            </p>
          </div>
        </div>
        <div className="team_card">
          <img src="/images/teams.jpg" alt="" />
          <div className="team_card_info">
            <h4>Abdul Rafiq</h4>
            <i>- Tech Lead</i>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore,
              aliquid, sed neque nesciunt dignissimos, placeat libero esse vero..
            </p>
          </div>
        </div>
        <div className="team_card">
          <img src="/images/team-2.jpg" alt="" />
          <div className="team_card_info">
            <h4>Abdul Rafiq</h4>
            <i>- Program Associate</i>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore,
              aliquid, sed neque nesciunt dignissimos, placeat libero esse vero.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
