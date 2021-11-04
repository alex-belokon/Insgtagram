import React from 'react';
import FriendsCards from '../../components/FriendsCards/FriendsCards';
import Header from '../../components/Header/Header';
import NoFriendsCards from '../../components/NoFriendsCards/NoFriendsCards';
import GetUsers from '../../components/GetUsers/GetUsers';
import './home.scss';

const Home = (props) => {
    const {toggleAdded, toggleFavorite, cards} = props
    return (
        <>
        <Header cards={cards} toggleAdded={toggleAdded} />
        <div className="container-main">
            <div className="left">
            <GetUsers
                toggleAdded={toggleAdded}
                toggleFavorite={toggleFavorite}
                cards={cards}
            />
            </div>
            <div className="right">
            <div className="firstFrendsWindow">
                <FriendsCards
                cards={cards}
                toggleAdded={toggleAdded}
                toggleFavorite={toggleFavorite}
                />
            </div>
            <div className="twoFrendsWindow">
                <NoFriendsCards
                cards={cards}
                toggleAdded={toggleAdded}
                toggleFavorite={toggleFavorite}
                />
            </div>
            </div>
        </div>
        </>
    )
}

export default Home;
