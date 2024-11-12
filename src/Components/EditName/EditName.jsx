// src/components/EditName.jsx
import React, { useState } from 'react';
import '../EditName/EditName.css';
import { useLocation, useNavigate } from 'react-router-dom';

const EditName = () => {
    const location = useLocation();
    const { firstName: initialFirstName, lastName: initialLastName } = location.state || {};
    const [newFirstName, setNewFirstName] = useState(initialFirstName || "");
    const [newLastName, setNewLastName] = useState(initialLastName || "");
    const navigate = useNavigate();

    const handleConfirm = () => {
        navigate('/', {
          state: {
            message: 'Name changed',
            firstName: newFirstName,
            lastName: newLastName
          }
        });
      };
      const handleBack = () => {
        navigate('/', {
            state: {
              message: 'Name changed',
              firstName: newFirstName,
              lastName: newLastName
            }
          });
    };
    const isConfirmDisabled = !newFirstName.trim() || !newLastName.trim();
    return (
        <div className="edit-name-page">
            <div className="edit-name-header">
                <button className="edit-name-back-button" onClick={handleBack}>←</button>
                <h2>Change Name</h2>
            </div>
            <div className="edit-name-context-container">
                <p className="edit-name-instructions">To set a new name, please enter it below.</p>
                <div className="edit-name-input-container">
                    <input
                        type="text"
                        value={newFirstName}
                        onChange={(e) => setNewFirstName(e.target.value)}
                        placeholder="First Name"
                    />
                    <input
                        type="text"
                        value={newLastName}
                        onChange={(e) => setNewLastName(e.target.value)}
                        placeholder="Last Name"
                    />
                </div>
            </div>
            <button
                className={`edit-name-confirm-button ${isConfirmDisabled ? 'disabled' : 'active'}`}
                onClick={handleConfirm}
                disabled={isConfirmDisabled}
            >
                Confirm New Name
            </button>
        </div>
    );
};

export default EditName;
