import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    position: "relative"
  },
  overlayText: {
    position: "absolute",
    bottom: "0",
    left: "0",
    color: "#fff",
    padding: "10px",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          className={classes.imgCard}
        />
        <div className={classes.overlayText}>{props.text}</div>
    </Card>
  );
}