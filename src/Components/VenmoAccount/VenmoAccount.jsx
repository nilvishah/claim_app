import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../VenmoAccount/VenmoAccount.css';
import VenmoImage from '../../assets/images/venmo.png'

const VenmoAccount = () => {
    const [venmoUsername, setVenmoUsername] = useState('');
    const navigate = useNavigate();

    const handleConfirm = () => {
        // Navigate back to Settings with updated Venmo username
        navigate('/', { state: { venmoUsername, message: 'Venmo Account updated successfully!' } });
    };

    return (
        <div className="venmo-account">
            <div className='header-section'>
            <button className="back-button" onClick={() => navigate(-1)}>←</button>
            <h2>Venmo Account</h2>
            </div>
            
            <img src={VenmoImage} alt="Venmo Logo" className="venmo-logo" />
            <h3>What's your Venmo username?</h3>
            <p>We use this to send you cash when you try a new brand.</p>

            <label>Venmo Username</label>
            <input className='input-container'
                type="text" 
                value={venmoUsername} 
                onChange={(e) => setVenmoUsername(e.target.value)} 
                placeholder=""
            />

            <button className="help-button">Get Help</button>
            <button
                className={`confirm-button ${venmoUsername.trim() ? 'active' : 'disabled'}`}
                onClick={handleConfirm}
                disabled={!venmoUsername.trim()}>
                    Confirm Venmo
                </button>
        </div>
    );
};

export default VenmoAccount;
