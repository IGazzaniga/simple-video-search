import React, {useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { connect } from "react-redux";
import { playVideo } from "../../redux/actions/actions";
import YouTube from 'react-youtube'

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    maxHeight: "100%",
    height: "600px",
    marginBottom: "25px"
  },
  playerContainer: {
    width: "100%",
    height: "100%",
  },
});

function VideoPlayer(props) {
  const [videoPlayed, setVideoPlayed] = useState("");
  const classes = useStyles();
  const opts = {
    width: '100%',
    height: '100%',
    playerVars: {
      frameBorder:"0"
    }
  }
  function increment() {
    if (videoPlayed === props.selectedVideo.id.videoId) // Prevent counter from increasing when playing the same video
      return
    setVideoPlayed(props.selectedVideo.id.videoId)
    props.dispatch(playVideo());
  }
  return (
    <Card className={classes.root}>
      <YouTube
        className={classes.iframe}
        videoId= {props.selectedVideo !== "" ? props.selectedVideo.id.videoId : ""}
        containerClassName={classes.playerContainer}
        opts={opts}
        onPlay={increment} 
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </Card>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedVideo: state.videoReducer.selectedVideo,
  };
};
export default connect(mapStateToProps)(VideoPlayer);
