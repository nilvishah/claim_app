import React, {useEffect, useRef, useState } from 'react';
import '../Settings/Settings.css';
import ProfileImage from '../../assets/images/profileimage.png';
import { Link, useLocation } from 'react-router-dom';

const settingsData = [
    { label: "Username", path: "/edit-username" },
    { label: "Name", path: "/edit-name" },
    { label: "Bio", path: "/edit-bio" },
    { label: "Phone Number", value: "+18576939942", isDisabled: true },
    { label: "Email", value: "shah.nilvi@northeastern.edu", isDisabled: true },
    { label: "Venmo Account", path: "/edit-venmo" },
    { label: "Linked Card", value: "On", path: "/linked-card" },
    { label: "Brands", value: "Preferred Brands", path: "/edit-brands" },
    { label: "Notifications", value: "Enabled", path: "/edit-notifications" },
    { label: "Contact Us", value: "Get in Touch", path: "/contact" }
];

const Settings = () => {
    const settingsRef = useRef(null);
    const location = useLocation();
    const [showMessage, setShowMessage] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [venmoUsername, setVenmoUsername] = useState('@nilvishah'); // Default value or empty
    const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
    const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false); // New state for log-out confirmation

    // Retrieve the current name from location state or set default values
    const firstName = location.state?.firstName || "Nilvi";
    const lastName = location.state?.lastName || "Shah";
    const [username, setUsername] = useState(location.state?.username || "nilvishah");
    const [bio, setBio] = useState(location.state?.bio || "");

    useEffect(() => {
        if (location.state) {
            if (location.state.username !==undefined) {
                setUsername(location.state.username);
            }
            if (location.state.venmoUsername) {
                setVenmoUsername(location.state.venmoUsername); // Update the Venmo username
            }
            if (location.state.message) {
                showConfirmationPopup(location.state.message);
            }
            if (location.state.bio) {
                setBio(location.state.bio);
            }
        }
    }, [location.state]);

    const showConfirmationPopup = (message) => {
        setPopupMessage(message);
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 3000); // Hide after 3 seconds
    };

    const handleProfileClick = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };
    const handleLogoutClick = () => {
        setIsLogoutModalOpen(true); // Open the log-out confirmation modal
    };

    const closeLogoutModal = () => {
        setIsLogoutModalOpen(false); // Close the log-out confirmation modal
    };

    const confirmLogout = () => {
        setIsLogoutModalOpen(false);
        // Logic for actual log-out functionality can be added here
        console.log("User logged out");
    };

    return (
        <div className="settings" ref={settingsRef}>
            <header className="settings-header">
                <button className="back-button">←</button>
                <h2>Settings</h2>
                <button className="faq-button">FAQ</button>
            </header>

            <div className="profile-section">
                <img src={ProfileImage} alt="profile" className="profile-image" onClick={handleProfileClick} />
                <div className="button-group">
                    <button className="edit-image-button">Edit Image</button>
                    <button className="logout-button" onClick={handleLogoutClick}>Log Out</button>
                </div>
            </div>

            <div className="settings-content">
                {settingsData.map((item, index) => (
                    item.isDisabled ? (
                        <div key={index} className="setting-item disabled">
                            <label>{item.label}</label>
                            <div className="setting-value">{item.value}</div>
                        </div>
                    ) : (
                        <Link
                            to={item.path}
                            state={
                                item.label === "Name"
                                    ? { firstName, lastName }
                                    : item.label === "Bio"
                                    ? { bio }
                                    : { username }
                            }
                            className="setting-item"
                            key={index}
                        >
                            <label>{item.label}</label>
                            <div className="setting-value">
                                {item.label === "Username"
                                    ? username
                                    : item.label === "Name"
                                    ? `${firstName} ${lastName}`
                                    : item.label === "Bio"
                                    ? ""
                                    : item.label === "Venmo Account"
                                    ? venmoUsername
                                    : item.value || ""}
                                <span className="arrow">›</span>
                            </div>
                        </Link>
                    )
                ))}
            </div>

            <footer className="settings-footer">
                <p>VERSION 1.9.3 BETA</p>
                <p className="footer"><b>Made with ❤️ in Boston</b></p>
            </footer>

            {showMessage && (
                <div className="success-message">
                    <span>✔ {popupMessage}</span>
                    <button onClick={() => setShowMessage(false)}>✖</button>
                </div>
            )}
            {isModalOpen && (
                <div className="modal-overlay" onClick={closeModal}>
                    <div className="modal-content">
                        <img src={ProfileImage} alt="Enlarged profile" className="enlarged-profile-image" />
                    </div>
                </div>
            )}
            {isLogoutModalOpen && (
            <div className="logout-modal-overlay" onClick={closeLogoutModal}>
                <div className="logout-modal-content">
                    <h3>Log Out?</h3>
                    <p>This may prevent you from receiving notifications about new Claims.</p>
                    <button className="logout-confirm-button" onClick={confirmLogout}>
                        Yes, log me out of Claim
                    </button>
                    <button className="logout-cancel-button" onClick={closeLogoutModal}>
                        Cancel
                    </button>
                </div>
            </div>
)}

        </div>
        
    );
};

export default Settings;

