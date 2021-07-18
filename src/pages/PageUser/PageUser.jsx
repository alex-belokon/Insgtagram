import React from 'react'
import { useParams } from 'react-router-dom'
import User from '../../components/User/User'
import "./pagesUser.scss"
import { useSelector } from 'react-redux'
import { getCards } from '../../store/selectors'
import Header from '../../components/Header/Header'

const PagesUser = (props) => {
    const params = useParams()
    const {userId} = params
    const cards = useSelector(getCards)
    const result = cards.filter(x => x.name===userId)
  

   
    const {toggleAdded,toggleFavorite} = props
    return (
        
        <div >
            <Header/>
            {
                result
                .map(el => <User
                 name={el.name}             
                 id={el.id}        
                 age={el.age}
                 
                 country={el.country}
                 city={el.city}
                 lifeСredo={el.LifeСredo}
                 like={el.like}
                 added={el.added}
                 toggleAdded={toggleAdded}
                 toggleFavorite={toggleFavorite}
                 url={el.url}
                 url2={el.url2}
                 url3={el.url3}
                 url4={el.url4}
                 url5={el.url5}
                 url6={el.url6}
                 url7={el.url7}
                 url8={el.url8}
                 url9={el.url9}
                 url10={el.url10}          
                >
                </User>
                    
                    )
            }          
        </div>
    )
}

export default PagesUser;