import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { connect } from "react-redux";
const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "400px",
  },
  iframe: {
    width: "100%",
    height: "100%",
  },
});

function VideoPlayer(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      
      <iframe
        className={classes.iframe}
        src={props.selectedVideo != '' ? `https://www.youtube.com/embed/${props.selectedVideo.id.videoId}`: ''}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedVideo: state.selectedVideo,
  };
};
export default connect(mapStateToProps)(VideoPlayer);
