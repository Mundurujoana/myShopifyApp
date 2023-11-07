

import React, { useState, useEffect } from 'react';
import './Home.css'; // Import your CSS styles here
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faSearch, faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Login from './Login'; // Import the Login component


const Home = () => {
  const [showPromotionBar, setShowPromotionBar] = useState(true);
  const [showSearchOverlay, setShowSearchOverlay] = useState(false);
  const [showCollections, setShowCollections] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  

  const toggleLogin = () => {
    setShowLogin(!showLogin);
  };

  const toggleSearchOverlay = () => {
    setShowSearchOverlay(!showSearchOverlay);
  };


  const toggleCollections = () => {
    setShowCollections(!showCollections);
  }


  const handleDelete = () => {
    setShowPromotionBar(false);

    setTimeout(() => {
      setShowPromotionBar(true);
    }, 10000); // Reappear after 10 seconds
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setShowPromotionBar(true);

      setTimeout(() => {
        setShowPromotionBar(false);
      }, 60000); // 5 seconds in milliseconds
    }, 60000); // 10 seconds in milliseconds

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <>
          {showPromotionBar && (
        <div className="promotion-bar">
          Special Promotion! Get 20% off!
          <button className="delete-button" onClick={handleDelete}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      )}
      
      <div className="navbar">
        <ul className="nav-container">
          <nav role="navigation" className="primary-navigation">
            <ul>
              <li><a href="#">Home</a></li>
              <li className="collections-dropdown">
                <span>Collections</span>
                <span className="tiny-dropdown">▼</span>
                <ul className="dropdown">
                  <li><a href="#">Contact Lenses</a></li>
                  <li><a href="#">Women's Pants</a></li>
                  <li><a href="#">Perfumes</a></li>
                  <li><a href="#">Body Mist</a></li>
                </ul>
              </li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>

          <div className="nav-right">
            <li><a href="#" onClick={toggleSearchOverlay}><FontAwesomeIcon icon={faSearch} /></a></li>
            <li><a href="#" onClick={toggleLogin}><FontAwesomeIcon icon={faUser} /></a></li>
            <li><a href="#"><FontAwesomeIcon icon={faShoppingCart} /></a></li>
          </div>
        </ul>
      </div>

      {showSearchOverlay && (
  <div className="search-overlay">
    <div className="search-container">
      <h1 className="search-title">Search results</h1>
      <button className="close-search" onClick={toggleSearchOverlay}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
      <input className="search-input" type="text" placeholder="Search" />
    </div>
  </div>
)}

{showLogin && (
       <Login onClose={toggleLogin} />
  )}

  
   
    </>
  );
};

export default Home;



