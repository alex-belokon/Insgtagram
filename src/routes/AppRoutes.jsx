import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Page404 from '../components/Page404/Page404'
import UserList from "../components/UserList/UserList"



const AppRoutes = (props) => {
    const { toggleAdded, toggleFavorite, cards } = props
    return (
        <>
            <Switch>
            <Redirect exact from="/" to="home" />
                <Route exact path="/home" render={(routerProps) =>
                    <UserList
                        toggleAdded={toggleAdded}
                        toggleFavorite={toggleFavorite}
                        cards={cards}
                        {...routerProps}
                    />}
                />
                <Route path="*" component={Page404} />
            </Switch>
        </>
    )
}

export default AppRoutes;
