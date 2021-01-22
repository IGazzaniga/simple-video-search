import {
  FETCH_VIDEOS_FAILURE,
  FETCH_VIDEOS_REQUEST,
  FETCH_VIDEOS_SUCCESS
} from "../actions/actions";

const initialState = {
  loading: false,
  videos: [],
  selectedVideo: '',
  error: "",
};

export const videoReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDEOS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_VIDEOS_SUCCESS:
      return {
        loading: false,
        videos: action.payload.items,
        selectedVideo: action.payload.items[0],
        selectedVideoUrl: action.payload.items[0].id.videoId,
        selectedVideoName: action.payload.items[0].snippet.title,
        error: "",
      };
    case FETCH_VIDEOS_FAILURE:
      return {
        loading: false,
        videos: [],
        error: action.payload,
      };
    default: return state
  }
};
