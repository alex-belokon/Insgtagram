import React, { useEffect } from 'react';
import { fetchUsers, updateCardsStore } from "../../store/actions";
import { useDispatch, useSelector } from 'react-redux';
import { getCards } from '../../store/selectors';
import "./style.scss";
import AppRoutes from "../../routes/AppRoutes";
import Header from "../../components/Header/Header";
import NoFriendsCards from '../../components/NoFriendsCards/NoFriendsCards';
import FriendsCards from '../../components/FriendsCards/FriendsCards';



const Main = () => {

    const dispatch = useDispatch()
    const cards = useSelector(getCards)

    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])

    const favoriteLocalStorage = (id) => {
        let array = JSON.parse(localStorage.getItem('favorites')) || []
        array = (array.includes(id) ? array.filter(el => el !== id) : array.concat(id))
        const favorites = JSON.stringify(array)
        localStorage.setItem('favorites', favorites)
    }

    const toggleFavorite = (id) => {
        const newArray = cards.map(el => {
            if (el.id === id) {
                el.isInfavorite = !el.isInfavorite
            }
            return el
        })
        favoriteLocalStorage(id)
        dispatch(updateCardsStore(newArray))

    }

    const addedLocalStorage = (id) => {
        let array = JSON.parse(localStorage.getItem('added')) || []
        array = (array.includes(id) ? array.filter(el => el !== id) : array.concat(id))
        const added = JSON.stringify(array)
        localStorage.setItem('added', added)
    }

    const toggleAdded = (id) => {
        const newArray = cards.map(el => {
            if (el.id === id) {
                el.added = !el.added
            }
            return el
        })

        addedLocalStorage(id)
        dispatch(updateCardsStore(newArray))
    }





    return (
        <div >
        <Header/>
            <div className="container-main">
            <div className="left">
                  <AppRoutes
                   toggleAdded={toggleAdded} 
                   toggleFavorite={toggleFavorite}
                   cards={cards} />
             </div>
             <div className="right">
                <div className="firstFrendsWindow">             
                  <FriendsCards cards={cards}
                  toggleAdded={toggleAdded} 
                  toggleFavorite={toggleFavorite}/>
                 </div>
                 <div>
                 <NoFriendsCards cards={cards}
                  toggleAdded={toggleAdded} 
                  toggleFavorite={toggleFavorite}/>
                </div>
            </div>  
        </div>
     </div>        
    )
}

export default Main;



