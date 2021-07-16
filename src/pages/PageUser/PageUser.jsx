import React from 'react'
import { useParams } from 'react-router-dom'
import User from '../../components/User/User'
import "./pagesUser.scss"
import { useSelector } from 'react-redux'
import { getCards } from '../../store/selectors'

const PagesUser = () => {
    const params = useParams()
    const {userId} = params
    const cards = useSelector(getCards)
    const result = cards.filter(x => x.name===userId)
  

   
    
    return (
        <div >
            {
                result
                .map(el => <User
                 name={el.name}             
                 id={el.id}        
                 age={el.age}
                 url={el.url}
                 country={el.country}
                 city={el.city}
                 lifeСredo={el.LifeСredo}
                 url1={el.url1}
                 like={el.like}            
                ></User>
                    
                    )
            }
      
           
        </div>
    )
}

export default PagesUser;