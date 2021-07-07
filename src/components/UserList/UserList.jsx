import React from 'react'
import UserCard from '../UserCard/UserCard';


const UserList = (props) => {
    

    const {toggleAdded, toggleFavorite, cards} =props
    
    return (       
                <ul className="albums__title-container">
                    {cards.map(userCards =>
                        <UserCard
                            cards={cards}   
                            name={userCards.name}
                            age={userCards.age}
                            country={userCards.country}
                            city={userCards.city}
                            LifeСredo={userCards.LifeСredo}
                            added={userCards.added}
                            toggleAdded={toggleAdded}
                            toggleFavorite={toggleFavorite}
                            className="album__content"
                            key={userCards.id.toString()}
                            url={userCards.url}
                            id={userCards.id}
                            isInfavorite={userCards.isInfavorite}
                        >
                        </UserCard>)}
                </ul>
            
    )
}

export default UserList;
