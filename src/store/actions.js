import getUsersCards from "../api/getUsersCards.js";
import { LOADING, UPDATE_CARDS, LOADED } from "./types"


export const fetchUsers = () => (dispatch) => {

    dispatch({ type: LOADING })
    getUsersCards().then(res => {
        const normalizeArray = normalizeData(res.data);
        dispatch({ type: UPDATE_CARDS, payload: { cards: normalizeArray } })
    })

    const normalizeData = (data) => {
        return data.map(cardPlus => {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || []
            const added = JSON.parse(localStorage.getItem('added')) || []

            cardPlus.isInfavorite = favorites.includes(cardPlus.id)
            cardPlus.added = added.includes(cardPlus.id)
            return cardPlus
        })
    }
    dispatch({ type: LOADED })
}
export const updateCardsStore = cards => {
    return { type: UPDATE_CARDS, payload: { cards } }
}
