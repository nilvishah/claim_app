import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../ContactUs/ContactUs.css';
import SunEmoji from '../../assets/images/SunEmoji.png'; // Make sure to have a sun emoji image or icon

const ContactUs = () => {
  const navigate = useNavigate();

  return (
    <div className="contact-us">
      <header className="contact-us-header">
        <button className="back-button" onClick={() => navigate('/')}>←</button>
        <h2>Contact Us</h2>
      </header>
      
      <div className="contact-content">
        <img src={SunEmoji} alt="Sun Emoji" className="sun-emoji" />
        
        <h3>We’re here for you</h3>
        <div className="contact-description">
          <p>
            Have a question or feedback for us? We’d love to hear it. Shoot us a text below and we’ll get back to you shortly.
          </p>
        </div>
        <div className='button-wrapper'>
            <button className="primary-button">I'm Missing a Venmo</button>
            <button className="secondary-button">Change Venmo</button>
            <button className="secondary-button">Contact Us</button>
            <button className="delete-account">Delete Account</button>
        </div>
        
        
        
      </div>
    </div>
  );
};

export default ContactUs;
