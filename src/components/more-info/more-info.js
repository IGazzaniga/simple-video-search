import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link as RouterLink } from "react-router-dom";
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
  moreInfoButton: {
    backgroundColor: "#2196f3",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#2196f3",
      cursor: "pointer",
      opacity: "0.9",
    },
  }
});

function MoreInfo(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <p className={classes.inlineTitle}>
        <b>The name of the video:</b>{" "}
        {props.selectedVideo !== "" ? props.selectedVideo.snippet.title : " "}
      </p>
      <Button
        variant="contained"
        className={classes.moreInfoButton}
        component={RouterLink}
        to={
          props.selectedVideo !== ""
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
    selectedVideo: state.videoReducer.selectedVideo,
  };
};

export default connect(mapStateToProps)(MoreInfo);
