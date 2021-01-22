import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {Switch, Route} from 'react-router-dom'
import SearchPage from './pages/Search'
import VideoInfo from './pages/VideoInfo'

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
      <Switch>
        <Route exact path="/" component={SearchPage}/>
        <Route path="/info/:id" component={VideoInfo}/>
      </Switch>
    </div>
  );
}

export default App;
