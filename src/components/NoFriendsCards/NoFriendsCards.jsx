import React from 'react';
import NoFriendCard from '../NoFriendCard/NoFriendCard';
import "./style.scss"

//import Product from '../../components/Product/Product';


const NoFriendsCards = (props) => {

    const { cards, toggleFavorite, toggleAdded } = props

    return (    
            <ul className="NoFriendContainer" >
                    {cards
                        .filter(el => !el.added)
                        .map(el => <NoFriendCard
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
    )
}

export default NoFriendsCards;
