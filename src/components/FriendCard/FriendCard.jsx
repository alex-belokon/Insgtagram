import React from 'react'
import "./style.scss"

const FriendCard = (props) => {
    const{name, toggleAdded, id, url}= props
    return (
        <div className="container">
            <div className="icon-comtainer">
                <img src={url} alt={name} className="icon"/>
                <h2>{name}</h2>
            </div>
            <div>
                <p
                className="text"
                 onClick={() =>toggleAdded(id)} >Отписаться</p>
            </div>
        </div>
    )
}

export default FriendCard
