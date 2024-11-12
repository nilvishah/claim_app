import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Settings from '../src/Components/Settings/Settings';
import EditUsername from './Components/EditUsername/EditUsername';
import EditName from './Components/EditName/EditName';
import EditBio from './Components/EditBio/EditBio';
import VenmoAccount from './Components/VenmoAccount/VenmoAccount';
import LinkCard from './Components/LinkCard/LinkCard';
import ContactUs from '../src/Components/ContactUs/ContactUs';
function App() {
  return (
      
        
          <Router>
            <div className="App">
              <Routes>
                <Route path="/" element={<Settings />} />
                <Route path="/edit-username" element={<EditUsername />} />
                <Route path="/edit-name" element={<EditName />} />
                <Route path="/edit-bio" element={<EditBio />} />
                <Route path='/edit-venmo' element={<VenmoAccount/>}/>
                <Route path='/linked-card' Component={LinkCard}/>
                <Route path='/contact' Component={ContactUs} />
              </Routes>
            </div>
          </Router>
       
 
  );
}

export default App;
