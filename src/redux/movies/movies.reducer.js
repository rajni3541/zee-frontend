import { MOVIES_ACTION_TYPES } from "./movies.type";

const INITIAL_STATE = {
  movies: []
};

export const moviesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MOVIES_ACTION_TYPES.SET_MOVIES:
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};