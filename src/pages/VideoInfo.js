import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    padding: theme.spacing(5),
  },
  backButton: {
    margin: "10px",
  },
  videoImage: {
    width: "100%",
    height: "auto",
  },
}));

function VideoInfo(props) {
  const classes = useStyles();

  function goBack() {
    window.history.back();
  }
  return (
    <div className={classes.root}>
      {props.selectedVideo != "" ? (
        <Grid className={classes.grid} container spacing={3}>
          <Grid item sm={12}>
            <Button
              className={classes.backButton}
              variant="contained"
              color="primary"
              size="large"
              startIcon={<ArrowBackIos />}
              onClick={goBack}
            >
              Go Back
            </Button>
            <h3>Title:{props.selectedVideo.snippet.title}</h3>
          </Grid>
          <Grid item xs={12} md={9}>
            <img
              className={classes.videoImage}
              src={props.selectedVideo.snippet.thumbnails.high.url}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <h3>Title</h3><p>{props.selectedVideo.snippet.title}</p>
            <h3>Description</h3><p>{props.selectedVideo.snippet.description}</p>
            <h3>Channel</h3><p>{props.selectedVideo.snippet.channelTitle}</p>
            <h3>Published at</h3><p>{props.selectedVideo.snippet.publishedAt}</p>
          </Grid>
        </Grid>
      ) : (
        <Redirect to="/" />
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    selectedVideo: state.selectedVideo,
  };
};

export default connect(mapStateToProps)(VideoInfo);
