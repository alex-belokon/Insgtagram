import React from "react";
import "./style.scss";
import logo from "./logo.png";
import Icon from "../Icon/Icon";
import LogoUser from "./07_yulia_akimenkooo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container-block">
        <div>
          <Link to="/">
            <img src={logo} alt={"logo"} className="logo" />
          </Link>
        </div>
        <div className="container-icons">
          <Link to="/">
            <Icon
              type="home"
              color="#333333"
              className="icon-home icon-header"
            />
          </Link>
          <Link Link to="/direct/inbox">
            <Icon
              type="arrow"
              color="#333333"
              className="icon-arrow icon-header"
            />
          </Link>
          <Link to="/garely/explore">
            <Icon
              type="compass"
              color="#333333"
              className="icon-compass icon-header"
            />
          </Link>
          <Link to="/heart">
            <Icon
              type="heart"
              color="#333333"
              className="icon-heart icon-header"
            />
          </Link>
          <div className="user">
            <div>
              <Link to="/yulia_akimenkooo">
                <img src={LogoUser} className="user-logo" alt="user-logo" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
