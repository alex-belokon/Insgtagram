import { UPDATE_CARDS } from "./types";


const initialState = {
  cards: []
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CARDS:
      return { ...state, cards: action.payload.cards }
    default:
      return state
  }
}

export default rootReducer;