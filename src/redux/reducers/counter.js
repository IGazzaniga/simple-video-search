import { INCREMENT_COUNTER } from "../actions/actions";

const initialState = {
  watchedVideos: 0
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        watchedVideos: state.watchedVideos + 1,
      };
    default:
      return state;
  }
};
