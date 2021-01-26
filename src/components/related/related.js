import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import { changeMainVideo } from "../../redux/actions/actions";
import { connect } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "100%",
    marginBottom: theme.spacing(1),
    position: "relative",
    "&:hover": {
      cursor: "pointer",
      opacity: "0.9",
    },
  },
  overlayText: {
    position: "absolute",
    bottom: "0",
    left: "0",
    color: "#fff",
    padding: "10px",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
}));

function Related(props) {
  const classes = useStyles();

  function selectCurrentVideo() {
    props.dispatch(changeMainVideo(props.fullVideoInfo));
  }

  return (
    <Card onClick={selectCurrentVideo} className={classes.root}>
      <CardMedia
        component="img"
        height="140"
        image={props.image}
        url={props.url}
        fullvideoinfo={props.fullVideoInfo}
        className={classes.imgCard}
      />
      <div className={classes.overlayText}>{props.text}</div>
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedVideo: state.videoReducer.selectedVideo,
  };
};

export default connect(mapStateToProps)(Related);
