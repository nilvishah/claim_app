import React from 'react';
import '../ClaimNotification/ClaimNotification.css';
import RainbowRockImage from '../assets/images/rainbow.png';
import ProfileImage from '../assets/images/profilepic.png';
import CrownImage from '../assets/images/crown.png';

function ClaimNotification() {
  return (
    <div className="claim-notification">
      <div className="content-wrapper">
        <div className="header">
          <span className="tag">UP FOR GRABS</span>
        </div>

        <div className="message">
          <h1>You snooze, you lose!</h1>
          <p><strong>@jean</strong> beat you to this Claim.</p>
        </div>

        <div className="card">
          <img src={RainbowRockImage} alt="Rainbow Rock" className="item-image" />
          <div className="card-info">
            <h2>OG Claimer</h2>
            <p>Rainbow Rock</p>
          </div>
          <div className="badge">
            <span>RARE</span>
          </div>
          <div className="profile-container">
            <img src={ProfileImage} alt="Profile" className="profile-image" />
            <img src={CrownImage} alt="Crown" className="crown-image" />
          </div>
        </div>

        <div className="invite">
          <p>Want another Claim? Earn a new one for every friend you invite <a href="#">here</a>.</p>
        </div>
      </div>

      <button className="cta-button">I'll Get 'Em Next Time</button>
    </div>
  );
}

export default ClaimNotification;
