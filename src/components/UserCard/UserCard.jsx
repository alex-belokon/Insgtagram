import React from 'react';
//import { useDispatch } from 'react-redux';
//import { modalFirstOpen, vendorCodePrime } from '../../store/actions';
import Icon from "../Icon/Icon"
import "./style.scss"





const UserCard = (props) => {

    const { name, url,  isInfavorite, id, toggleFavorite, LifeСredo} = props

    return (
        <li className="container-card">
            <div className="title-card">
                <img  className= "title-card__photo-small"src={url.toString()} alt={name} />
                <div className="title-card__title-container">
                    <h2 className="title-card__name">{name}</h2>
                    <p className="title-card__life-credo">{LifeСredo}</p>
                </div>
            </div>

            <img className="album__image" src={url.toString()} alt={name} />  
            <div >
            <Icon
                    onClick={() => toggleFavorite(id)}
                    color={isInfavorite ? "red" : "yellow"}
                    type="heart"
                    className="star-class"
                />
            </div>
          
                {/* <div className="album__btn-add">
                    {!added ?
                        <Button onClick={modalFirstOpenWindow} />
                        :
                        <Icon
                            type="cart"
                            className="album__cart"
                        />
                    }
                </div> */}
            
        </li>
    )
}

export default UserCard;