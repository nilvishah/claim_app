// src/components/EditUsername.jsx
import React, {useState } from 'react';
import '../EditUsername/EditUsername.css';
import { useLocation,useNavigate } from 'react-router-dom';

const EditUsername = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const initialUsername = location.state?.username || "nilvishah";
    const [newUsername, setNewUsername] = useState(initialUsername);
    

    const handleConfirm = () => {
        navigate('/', { state: { message: 'Username changed', username: newUsername } });
    };
    
    const handleBack = () => {
        navigate('/', { state: { username: newUsername } });
    };

    return (
        <div className="edit-username-page">
            <div className="edit-username-header">
                <button className="edit-username-back-button" onClick={handleBack}>←</button>
                <h2>Change Username</h2>
            </div>
            <p className="edit-username-instructions">
                To set a new username, please enter it below.<br />
            </p>
            <p className="edit-username-sub-instructions">
                When your friends sign up, they can use your username as a referral code.
            </p>
            <div className="edit-username-form-group">
                <label htmlFor="new-username">New Username</label>
                <input
                    type="text"
                    id="new-username"
                    value={newUsername}
                    onChange={(e) => setNewUsername(e.target.value)}
                    placeholder="New username"
                />
            </div>
            <button className={`edit-username-confirm-button ${newUsername.trim() ? 'active' : 'disabled'}`}
                onClick={handleConfirm}
                disabled={!newUsername.trim()}>
                Confirm New Username
            </button>
        </div>
    );
};

export default EditUsername;
