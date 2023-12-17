// Navbar.jsx
import React, { useState } from 'react';
import '../Assets/css/global.css'
import logo from '../Assets/Logo.svg';
import './Navbar.css';
import ButtonCollectionButton from '../Button/Button_collection.jsx'; 
import btnStyle from '../Button/NewButton/button.jsx';
import Button from '../Button/NewButton/button.jsx';
import ButtonUser from '../Button/Button_user_information.jsx';
const Navbar = () => {
  const [showAllParent, setShowAllParent] = useState(false);

  const handleSButtonClick = () => {
    setShowAllParent(!showAllParent);
  };

  return (
    <div className="navigation flex-row flex-center-align ">
      <div className="nav-logo flex-col">
        <img className="nav-logo-icon" src={logo} alt="logo" />
      </div>
      <div className="nav-parent flex-row gap-2xs">
        <div className=" nav-button">
          <ButtonCollectionButton />
        </div>
        <di className="nav-button">
          <Button text="HOT DEAL" btnStyle="nav-btn"/>
        </di> 
        <div className="nav-button">
        <Button text="BEST SELLER" btnStyle="nav-btn"/>
        </div>
        <div className="nav-button">
        <Button text="ABOUT US" btnStyle="nav-btn"/>
        </div>
        <div className="nav-button">
        <Button text="POLICY" btnStyle="nav-btn"/>
        </div>
        
      </div>
      <div className="nav-icon flex-row gap-xs">
      <div className="icon-button">
          <i className=" bi bi-search"></i>
          </div>
          <div className="icon-button">
          <i className=" bi bi-cart"></i>
          </div>
          <div className="icon-button">
          <ButtonUser />
          </div>
         
        </div>
    </div>
  );
};

export default Navbar;

