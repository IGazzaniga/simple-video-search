import {
  FETCH_VIDEOS_FAILURE,
  FETCH_VIDEOS_REQUEST,
  FETCH_VIDEOS_SUCCESS,
  SELECT_VIDEO
} from "../actions/actions";

const initialState = {
  loading: false,
  videos: [],
  selectedVideo: '',
  noResults: false,
  hasSearched: false,
  error: ""
};

export const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_VIDEO:
      return {
        ...state,
        selectedVideo: action.video
      }
    case FETCH_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
        hasSearched: true,
      };
    case FETCH_VIDEOS_SUCCESS:
      return {
        ...state,
        loading: false,
        videos: action.payload.items,
        selectedVideo: action.payload.items[0],
        noResults: action.payload.pageInfo.totalResults === 0,
        error: "",
      };
    case FETCH_VIDEOS_FAILURE:
      return {
        ...state,
        loading: false,
        videos: [],
        error: action.payload.message,
      };
    default: return state
  }
};
