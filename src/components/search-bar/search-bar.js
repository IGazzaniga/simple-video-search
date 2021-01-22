import React, { useState } from "react";
import InputBase from "@material-ui/core/InputBase";
import { makeStyles } from "@material-ui/core/styles";
import SearchIcon from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";
import { Grid } from "@material-ui/core";
import { connect } from "react-redux";
import { fetchVideos } from "../../redux/actions/actions";

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  searchIcon: {
    padding: "7px",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    border: "1px solid black",
    borderRadius: "20px",
  },
  largeButton: {
    borderRadius: "20px",
    width: "100%",
  },
}));

function SearchBar(props) {
  const classes = useStyles();
  const [search, setSearch] = useState("");

  function handleChange(e) {
    setSearch(e.target.value);
  }
  function handleSearch(e) {
    e.preventDefault();
    props.fetchVideos(search);
  }

  return (
    <div className={classes.root}>
      <form onSubmit={handleSearch}>
        <Grid container spacing={3}>
          <Grid item sm={9} xs={12}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              onChange={handleChange}
              type="text"
              value={search}
              placeholder={props.placeholder}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ "aria-label": "search" }}
            />
          </Grid>
          <Grid item sm={3} xs={12}>
            <Button
              type="submit"
              className={classes.largeButton}
              size="large"
              variant="contained"
              color="primary"
            >
              Search
            </Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    videos: state.videos,
  };
};

export default connect(mapStateToProps, {fetchVideos})(SearchBar);
