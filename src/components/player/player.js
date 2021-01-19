import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function VideoMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          component="video"
          alt=""
          height="140"
          image={props.video}
          title=""
          controls
        />
    </Card>
  );
}