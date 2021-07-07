import React from 'react'
import "./style.scss"

const FriendCard = (props) => {
    const{name, toggleAdded, id}= props
    return (
        <div>
            {name}
            <button onClick={() =>toggleAdded(id)}>Удалить с друзей</button>
        </div>
    )
}

export default FriendCard
