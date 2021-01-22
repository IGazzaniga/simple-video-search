import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import { connect } from "react-redux";

const useStyles = makeStyles({
  root: {
    maxWidth: "100%",
    marginTop: "10px",
    padding: "20px",
  },
  inlineTitle: {
    display: "inline",
    margin: "10px",
  },
});

function MoreInfo(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <p className={classes.inlineTitle}>
        <b>The name of the video:</b>{" "}
        {props.selectedVideo != "" ? props.selectedVideo.snippet.title : " "}
      </p>
      <Button
        variant="contained"
        color="primary"
        component={RouterLink}
        to={
          props.selectedVideo != ""
            ? `/info/${props.selectedVideo.id.videoId}`
            : ""
        }
      >
        + INFO
      </Button>
    </Card>
  );
}
const mapStateToProps = (state) => {
  return {
    selectedVideo: state.selectedVideo,
  };
};

export default connect(mapStateToProps)(MoreInfo);
