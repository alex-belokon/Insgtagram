import React from 'react';
import FriendCard from '../FriendCard/FriendCard';
import "./style.scss"


const FriendsCards = (props) => {

    const { cards, toggleFavorite, toggleAdded } = props

    return (
        <div>
            <ul className="FriendContainer">
                    {cards
                        .filter(el => el.added)
                        .map(el => <FriendCard
                            toggleAdded={toggleAdded}
                            toggleFavorite={toggleFavorite}
                            added={el.added}
                            key={el.id}
                            name={el.name}
                            url={el.url}
                            id={el.id}
                            isInfavorite={el.isInfavorite}
                        />)
                    }
            </ul>
        </div>
    )
}

export default FriendsCards;
