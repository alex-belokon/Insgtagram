import React from 'react';
import './style.scss';
import logo from "./logo.png"
import Icon from '../Icon/Icon';
import LogoUser from "./07_yulia_akimenkooo.jpg"


const Header = () => {
  return (
  <div className="header">
     <div className="container-block">   
       <div>
          <img src={logo} alt={"logo"} className="logo" />
          </div>
        <div className="container-icons">
          <Icon type="home"
            color="#333333"
            className="icon-home icon-header" />
          <Icon type="arrow"
            color="#333333"
            className="icon-arrow icon-header" />
          <Icon type="compass"
            color="#333333"
            className="icon-compass icon-header" />
          <Icon type="heart"
            color="#333333"
            className="icon-heart icon-header" />
            <div className="user">
              <img src={LogoUser}  className="user-logo" alt="user-logo"/>
            </div>
        </div>         
    </div>
  </div>
  
  )
}

export default Header
