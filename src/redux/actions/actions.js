export const FETCH_VIDEOS_REQUEST = "FETCH_VIDEOS_REQUEST";
export const FETCH_VIDEOS_SUCCESS = "FETCH_VIDEOS_SUCCESS";
export const FETCH_VIDEOS_FAILURE = "FETCH_VIDEOS_FAILURE";
export const SELECT_VIDEO = "SELECT_VIDEO";
const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY

export const selectVideo = (video) => {
  return {
    type: SELECT_VIDEO,
    video,
  };
};
export const fetchVideosRequest = () => {
  return {
    type: FETCH_VIDEOS_REQUEST,
  };
};

export const fetchVideosSuccess = (videos) => {
  return {
    type: FETCH_VIDEOS_SUCCESS,
    payload: videos,
  };
};

export const fetchVideosError = (error) => {
  return {
    type: FETCH_VIDEOS_FAILURE,
    payload: error,
  };
};

export const fetchVideos = (search) => {
  return function (dispatch) {
    dispatch(fetchVideosRequest());
    fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=4&q=${search}&key=${API_KEY}&type=video`
    )
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchVideosSuccess(data));
      })
      .catch((error) => {
        dispatch(fetchVideosError(error));
      });
  };
};

