import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import SearchBar from "./components/search-bar/search-bar";
import ImgMediaCard from "./components/related/related";
import VideoMediaCard from "./components/player/player";
import { Route } from "react-router";
import { BrowserRouter as Router, Link as RouterLink } from "react-router-dom";

import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  grid: {
    padding: theme.spacing(5),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container spacing={3}>
        <Grid item xs={12}>
          <SearchBar placeholder="Search.." />
        </Grid>
        <Grid item xs={12} sm={9}>
          <VideoMediaCard image="" />
          <Router>
            <Button
              variant="contained"
              color="primary"
              component={RouterLink}
              to="/inner"
            >
              + INFO
            </Button>
          </Router>
        </Grid>
        <Grid item xs={12} sm={3}>
          <ImgMediaCard image="https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg" />
          <ImgMediaCard image="https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg" />
          <ImgMediaCard image="https://d500.epimg.net/cincodias/imagenes/2018/11/13/lifestyle/1542113135_776401_1542116070_noticia_normal.jpg" />
        </Grid>
      </Grid>
    </div>
  );
}

export default App;
