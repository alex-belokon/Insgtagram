import React from 'react'
import UserList from "../components/UserList/UserList"




const GetUsers = (props) => {
    const { toggleAdded, toggleFavorite, cards } = props

    return (
       <div>
         <UserList
          toggleAdded={toggleAdded}
          toggleFavorite={toggleFavorite}
          cards={cards}
       /> 
        </div>
    )
}

export default GetUsers;
