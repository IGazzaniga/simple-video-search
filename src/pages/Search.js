import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SearchBar from "../components/search-bar/search-bar";
import Related from "../components/related/related";
import VideoPlayer from "../components/player/player";
import MoreInfo from "../components/more-info/more-info";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";
import MuiAlert from "@material-ui/lab/Alert";
import { Visibility } from "@material-ui/icons";
import { Skeleton } from "@material-ui/lab";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden",
  },
  grid: {
    padding: theme.spacing(5),
  },
  watchedVideos: {
    marginTop: "20px",
  },
  loadingSkeleton: {
    width: "100%",
    height: "450px",
  },
  relatedSkeleton: {
    width: "100%",
    maxWidth: "100%",
    height: "145px",
    marginBottom: theme.spacing(1),
  },
}));

function SearchPage(props) {
  const classes = useStyles();
  const related = props.videos
    .slice(1)
    .map((video) => (
      <Related
        image={video.snippet.thumbnails.high.url}
        key={video.id.videoId}
        text={video.snippet.title}
        url={video.id.videoId}
        fullVideoInfo={video}
      ></Related>
    ));
  var videoErrorOrLoading;
  if (props.loading) {
    videoErrorOrLoading = <CircularProgress />;
  } else if (props.noResults) {
    videoErrorOrLoading = 
      <Alert severity="warning">
        Your search didn't match any videos. Please, try with a different term.
      </Alert>
    
  } else if (!props.hasSearched) {
    videoErrorOrLoading = (
      <Skeleton
        animation="wave"
        className={classes.loadingSkeleton}
        variant="rect"
      />
    );
  } else if (props.error) {
    videoErrorOrLoading = <Alert severity="error">There was an error. Please, try again later</Alert>;
  } else {
    videoErrorOrLoading = (
      <div>
        <VideoPlayer />
        <MoreInfo />
      </div>
    );
  }
  const relatedSkeleton = [...Array(3)].map((skeleton, i) => (
    <Skeleton
      animation="wave"
      key={i}
      className={classes.relatedSkeleton}
      variant="rect"
    />
  ));
  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container spacing={3}>
        <Grid item xs={12}>
          <SearchBar placeholder="Search.." />
        </Grid>
        <Grid container direction="column" item xs={12} sm={9}>
          {videoErrorOrLoading}
        </Grid>
        <Grid item xs={12} sm={3}>
          {props.videos.length > 0 ? related : relatedSkeleton}
          <Alert
            icon={<Visibility />}
            className={classes.watchedVideos}
            severity="info"
          >
            Videos watched: {props.watchedVideos}
          </Alert>
        </Grid>
      </Grid>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    videos: state.videoReducer.videos,
    loading: state.videoReducer.loading,
    noResults: state.videoReducer.noResults,
    hasSearched: state.videoReducer.hasSearched,
    watchedVideos: state.counterReducer.watchedVideos,
    error: state.videoReducer.error,
  };
};
export default connect(mapStateToProps)(SearchPage);
