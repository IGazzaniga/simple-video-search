import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { TextFields, Tv, Subject, Event } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: "100%",
    backgroundColor: "#f7f7f7",
  },
  breakText: {
      wordBreak: 'break-all',
      height: "auto"
  }
}));

export default function InfoDetail(props) {
  const classes = useStyles();

  return (
    <List className={classes.root}>
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <TextFields />
          </Avatar>
        </ListItemAvatar>
        <ListItemText className={classes.breakText} primary="Title" secondary={props.title} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Subject />
          </Avatar>
        </ListItemAvatar>
        <ListItemText className={classes.breakText}  primary="Description" secondary={props.description} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Tv />
          </Avatar>
        </ListItemAvatar>
        <ListItemText className={classes.breakText} primary="Channel" secondary={props.channel} />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <ListItemAvatar>
          <Avatar>
            <Event />
          </Avatar>
        </ListItemAvatar>
        <ListItemText className={classes.breakText} primary="Published at" secondary={props.publishedAt} />
      </ListItem>
    </List>
  );
}
