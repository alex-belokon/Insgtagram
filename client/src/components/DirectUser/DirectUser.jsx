import React from "react";
import "./directUser.scss";
import Icon from "../Icon/Icon";
import { Link } from "react-router-dom";

const DirectUser = (props) => {
  const { name, url, _id } = props;
  const urlUser = ["." + `${url}`].join();
  console.log("urlUser", urlUser);
  return (
    <div className="userList-container">
      <Link to={name}>
        <div className="icon-comtainer">
          <img src={urlUser} alt={name} className="icon-direct" />
          <h2>{name}</h2>
        </div>
      </Link>
    </div>
  );
};

export default DirectUser;
