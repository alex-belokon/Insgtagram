import React from 'react';
import Icon from "../Icon/Icon"
import "./style.scss"
import FormikSignup from "../Forma/FormikSignup"
import { Link} from 'react-router-dom';






const UserCard = (props) => {
    const { name, url,  isInfavorite, id, toggleFavorite, LifeСredo, cards} = props

    return (
        <li className="container-card">
            <Link to={name}>
            <div className="title-card">
                  <img  className= "title-card__photo-small"src={url.toString()} alt={name} />     
                <div className="title-card__title-container">
                    <h2 className="title-card__name">{name}</h2>
                    <p className="title-card__life-credo">{LifeСredo}</p>
                </div>
            </div>
            </Link>
           <div className="container-img">
              <img 
              className="album__image" 
              src={url.toString()} 
              alt={name} 
              onDoubleClick={() => toggleFavorite(id)}
              />  
            </div>
        <div className="icons-box">
            <div className="icons-container">
               <Icon
                    color={isInfavorite ? "red" : "white"}
                    type="heart"
                    className="star-class"
                />
                <Icon
                    color= "#333333"
                    type="coment"
                    className="coment-class"
                />
                 <Icon
                    color= "#333333"
                    type="arrow"
                    className="arrow-class"
                />
            </div>
            <div>
            <Icon
                    color="#333333"
                    type="save"
                    className="save-class"
                />
            </div>
            </div>           
            <FormikSignup id={id} cards={cards}/>
        </li>
    )
}

export default UserCard;