import React from 'react';



const User = (props) => {

    const{name,             
    id,       
    age,
    url,
    country,
    city,
    lifeСredo,
    like } = props
    

  

    return (
        <div>
        {id}{age}{country}{city}{lifeСredo}{like}
        <img src={url} alt={name} />
           
        </div>
    )
}

export default User;