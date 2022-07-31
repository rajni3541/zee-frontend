import { MOVIES_ACTION_TYPES } from "./movies.type";

export const setMovies = (movies) => {
  return {
    type: MOVIES_ACTION_TYPES.SET_MOVIES,
    payload: movies,
  };
};

