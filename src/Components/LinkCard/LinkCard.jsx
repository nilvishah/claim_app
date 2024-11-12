import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../LinkCard/LinkCard.css';
import CardStackImage from '../../assets/images/CardStackImage.png'; // Import the image for the card stack

const LinkCard = () => {
  const navigate = useNavigate();

  return (
    <div className="link-card">
      <header className="link-card-header">
        <button className="back-button" onClick={() => navigate('/')}>←</button>
        <h2>Linked Card</h2>
      </header>
      
      <div className="link-card-content">
        <img src={CardStackImage} alt="Card Stack" className="card-stack-image" />
        
        <h3>Link your card</h3>
        <p>
          If you're missing a Venmo after <strong>5 days</strong>, try linking your card again below.
        </p>
        <p>At Claim, we will never sell your data.</p>
        
        <button className="link-another-card-button">Link Another Card</button>
        
        <div className="bank-info-card">
          <div className="bank-info-content">
            <div className="bank-info-header">
              <p className="bank-name">Bank of America</p>
              <p className="last-detected">Last Detected</p>
              <p className="transaction-date">Transaction: Nov 9, 2024</p>
            </div>
            <div className="bank-actions">
              <button className="update-button">Update</button>
              <button className="remove-button">Remove</button>
            </div>
          </div>
        </div>


        
        <div className="footer-buttons">
          <button className="data-promise-button">Our Data Promise</button>
          <button className="get-help-button">Get Help</button>
        </div>
      </div>
    </div>
  );
};

export default LinkCard;
