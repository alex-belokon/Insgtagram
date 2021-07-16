import React from 'react';
import "./style.scss"

const NoFriendCard = (props) => {
const{name, toggleAdded, id, url}= props
    return (
        <div className="container-cards">
            <div className="icon-container-cards">
                <img src={url} alt={name} className="iconUser"/>
                <h2>{name}</h2>
            </div>
            <div>
                <p
                className="textUser"
                 onClick={() =>toggleAdded(id)} >Подписаться</p>
            </div>
        </div>
    )
}

export default NoFriendCard
