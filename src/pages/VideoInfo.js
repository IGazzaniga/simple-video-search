import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Button, Card, CardMedia, CardContent, Typography } from "@material-ui/core";
import { ArrowBackIos } from "@material-ui/icons";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import InfoDetail from "../components/info-detail/info-detail";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    overflow: "hidden"
  },
  grid: {
    padding: theme.spacing(5),
  },
  backButton: {
    margin: "10px",
  },
  videoTitle: {
    display: "inline",
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
      {props.selectedVideo !== "" ? (
        <Grid className={classes.grid} container spacing={3}>
          <Grid item sm={12}>
            <Button
              className={classes.backButton}
              variant="contained"
              size="large"
              startIcon={<ArrowBackIos />}
              onClick={goBack}
            >
              Go Back
            </Button>
          </Grid>
          <Grid item xs={12} md={8}>
            <Card>
              <CardContent>
                <div>
                  <Typography gutterBottom variant="h4" className={classes.videoTitle}>Title: </Typography>
                  <Typography gutterBottom variant="h6" className={classes.videoTitle}>
                    {props.selectedVideo.snippet.title}
                  </Typography>
                </div>
              </CardContent>
              <CardMedia
                alt={props.selectedVideo.snippet.title}
                component="img"
                image={props.selectedVideo.snippet.thumbnails.high.url}
                className={classes.videoImage}
              />
            </Card>
          </Grid>
          <Grid item xs={12} md={4}>
            <InfoDetail
              title={props.selectedVideo.snippet.title}
              description={props.selectedVideo.snippet.description}
              channel={props.selectedVideo.snippet.channelTitle}
              publishedAt={props.selectedVideo.snippet.publishedAt}
            />
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
    selectedVideo: state.videoReducer.selectedVideo,
  };
};

export default connect(mapStateToProps)(VideoInfo);
