// Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './nav-bar.css';

import Logo from '../../../assets/img/logo.svg';
import Button from '../button/button';
import DropdownButton from '../button/dropdown-button';

function Navbar() {
  const [navColour, updateNavbar] = useState(false);
  const [isNavOpen, setNavOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  function scrollHandler() {
    updateNavbar(window.scrollY >= 20);
  }

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
    setSearchOpen(false); // Close the search box when toggling navigation
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []); 

  return (
    <div className={`navigation flex-row flex-center-align ${navColour ? 'nav-scroll' : ''}`}>
      <div className="nav-logo flex-col">
        <i className="navOpenBtn bi bi-list" onClick={toggleNav}></i>
        <img className="nav-logo-icon" src={Logo} alt="logo" />
      </div>
      <div className={`nav-parent flex-row gap-2xs ${isNavOpen ? 'openNav' : ''}`}>
        <i className="navCloseBtn bi bi-x-lg" onClick={toggleNav}></i>
        {isSearchOpen ? (
          // Render nothing when the search box is open
          null
        ) : (
          <>
            <div className="nav-button">
              <DropdownButton btnStyle='nav-btn' text='COLLECTION' iconL='bi bi-list icon-size-20 square-icon' dropdownStyle='collection-dropdown'/>
            </div>
            <div className="nav-button">
              <Button text="HOT DEAL" btnStyle="nav-btn" />
            </div> 
            <div className="nav-button">
              <Button text="BEST SELLER" btnStyle="nav-btn" />
            </div>
            <div className="nav-button">
              <Link to="/about-us" className="nav-link">
                <Button text="ABOUT US" btnStyle="nav-btn" />
              </Link>
            </div>
            <div className="nav-button">
              <Link to="/policy" className="nav-link">
                <Button text="POLICY" btnStyle="nav-btn" />
              </Link>
            </div>
          </>
        )}
      </div>
      <div className="nav-icon flex-row gap-xs">
        <div className="icon-button">
          <Button btnStyle='icon-nav-btn' iconL='bi bi-search' onClick={() => setSearchOpen(!isSearchOpen)} />
          {isSearchOpen && (
            <div className="search-box">
              <input type="text" placeholder="Search here..." />
            </div>
          )}
        </div>
        <div className="icon-button">
          <Button btnStyle='icon-nav-btn' iconL='bi bi-cart'/>
        </div>
        <div className="icon-button">
          <DropdownButton btnStyle='icon-nav-btn' iconL='bi bi-person' dropdownStyle='user-setting-dropdown'/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;