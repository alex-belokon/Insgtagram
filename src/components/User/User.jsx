import React from 'react';
import "./User.scss"



const User = (props) => {

    const{name,             
    id,       
    age,
    url,
    country,
    city,
    lifeСredo,
    like,
     added,
      toggleFavorite, 
      toggleAdded,
        url2,
        url3,
        url4,
        url5,
        url6,
        url7,
        url8,
        url9,
        url10
     } = props
    

  

    return (
        <div className="containerUser">
            <div className="containerUser__header header-box">
                <div className="header-box__circle">
                   <div className="header-box__photo">
                    <img src={url} alt={name} />
                  </div>
                </div>
                <div className="header-box__content box">
                    <div className="box__button">
                        <h2>{name}</h2>
                        <button
                        className={added ? "box__added" : "box__noadded"}  
                        onClick={() =>toggleAdded(id)}
                        >{added ? "Подписан" : "Оформить подписку?"}
                        </button>
                    </div>
                    <div className="box__viewer">
                        <p className="box__text">125 публикаций</p>
                        <p className="box__text">1.2 тыс. подписчиков</p>
                        <p className="box__text">168 подписок</p>
                        
                    </div>
                    <div className="box__content content">
                        <h3 className="content__name">{name}</h3>
                        <h3 className="content__text">Публичная личность</h3>
                        
                        <h3 className="cont">Возраст:    {age}</h3>
                        <h3 className="cont">Страна:   {country}</h3>
                        <h3 className="cont">Город:   {city}</h3>
                        <h3 className="cont">Девиз:   {lifeСredo} </h3>  
                    </div>
                </div>

            </div>
            <div className="collection">
                <img src={url2} alt={name} />
                <img src={url3} alt={name} />
                <img src={url4} alt={name} />
                <img src={url5} alt={name} />
                <img src={url6} alt={name} />
                <img src={url7} alt={name} />
                <img src={url8} alt={name} />
                <img src={url9} alt={name} />
                <img src={url10} alt={name} />
                </div>       
        </div>
    )
}

export default User;