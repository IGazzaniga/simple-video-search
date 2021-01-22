import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SearchBar from "../components/search-bar/search-bar";
import ImgMediaCard from "../components/related/related";
import VideoPlayer from "../components/player/player";
import MoreInfo from "../components/more-info/more-info";
import { connect } from "react-redux";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    padding: theme.spacing(5),
  }
}));

function SearchPage(props) {
  const classes = useStyles();
  const related = props.videos.slice(1).map((video) => (
    <ImgMediaCard
      image={video.snippet.thumbnails.high.url}
      key={video.id.videoId}
      text={video.snippet.title}
    >
    </ImgMediaCard>
  ));
  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container spacing={3}>
        <Grid item xs={12}>
          <SearchBar placeholder="Search.." />
        </Grid>
        <Grid item xs={12} sm={9}>
          <VideoPlayer />
          <MoreInfo />
        </Grid>
        <Grid item xs={12} sm={3}>
          {props.videos.length > 0 ? related : <div></div>}
        </Grid>
      </Grid>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    videos: state.videos,
  };
};
export default connect(mapStateToProps)(SearchPage);
