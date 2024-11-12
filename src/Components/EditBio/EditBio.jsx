// src/components/EditBio.jsx
import React, { useState } from 'react';
import '../EditBio/EditBio.css';
import { useLocation, useNavigate } from 'react-router-dom';

const EditBio = () => {
    const location = useLocation();
    const initialBio = location.state?.bio || ""; // Set initial bio or empty if none
    const [newBio, setNewBio] = useState(initialBio);
    const navigate = useNavigate();

    const handleConfirm = () => {
        // Navigate back to settings page with the updated bio
        navigate('/', { state: { message: 'Bio changed', bio: newBio } });
    };

    return (
        <div className="edit-bio-page">
            <div className="edit-bio-header">
                <button className="edit-bio-back-button" onClick={() => navigate('/')}>←</button>
                <h2>Change Bio</h2>
            </div>
            <p className="edit-bio-instructions">Enter your bio below (max: 50 characters).</p>
            <div className="edit-bio-form-group">
                <label htmlFor="new-bio">New Bio</label>
                <input
                    type="text"
                    id="new-bio"
                    value={newBio}
                    onChange={(e) => setNewBio(e.target.value)}
                    placeholder="Your bio"
                    maxLength={50}
                />
            </div>
            <button
                className={`edit-bio-confirm-button ${newBio.trim() ? 'active' : ''}`}
                onClick={handleConfirm}
                disabled={!newBio.trim()}
                style={{
                    backgroundColor: newBio.trim() ? '#6a0dad' : '#888',
                    cursor: newBio.trim() ? 'pointer' : 'not-allowed'
                }}
            >
                Confirm New Bio
            </button>
        </div>
    );
};

export default EditBio;
