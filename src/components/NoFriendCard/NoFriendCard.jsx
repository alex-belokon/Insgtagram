import React from 'react'

const NoFriendCard = (props) => {
const{name, toggleAdded, id}= props
    return (
        <div>
            {name}
            <button onClick={() =>toggleAdded(id)}>друзья</button>
        </div>
    )
}

export default NoFriendCard
