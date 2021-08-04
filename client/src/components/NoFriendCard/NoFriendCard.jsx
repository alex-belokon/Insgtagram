import React from 'react';
import { Link } from 'react-router-dom';
import "./style.scss"

const NoFriendCard = (props) => {
const{name, toggleAdded, id, url}= props
    return (
        <div className="container-cards">
            <Link to={name}>
            <div className="icon-container-cards">
                <img src={url} alt={name} className="iconUser"/>
                <h2>{name}</h2>
            </div>
            </Link>
            <div>
                <p
                className="textUser"
                 onClick={() =>toggleAdded(id)} >Подписаться</p>
            </div>
        </div>
    )
}

export default NoFriendCard
