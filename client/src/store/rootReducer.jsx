import { MESSAGE, UPDATE_CARDS } from "./types";

const initialState = {
  cards: [],
  message: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CARDS:
      return { ...state, cards: action.payload.cards };
    case MESSAGE:
      return { ...state, message: action.payload };
    default:
      return state;
  }
};

export default rootReducer;
