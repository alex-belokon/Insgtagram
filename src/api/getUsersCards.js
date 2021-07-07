import axios from 'axios';

const getUsersCards = () => {
    return axios("users.json")
}

export default getUsersCards;

console.log("карточки", getUsersCards);