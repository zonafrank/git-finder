import { useReducer, useContext } from "react";
import GithubContext from "./githubContext";
import GithubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  GET_USERS,
  GET_USER,
  SET_LOADING,
  GET_REPOS
} from "../types";
import AlertContext from "../alert/alertContext";

let ghClientId;
let ghClientSecret;

if (process.env.NODE_ENV !== "production") {
  ghClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  ghClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
} else {
  ghClientId = process.env.GITHUB_CLIENT_ID;
  ghClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const ghApiUrl = "https://api.github.com";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);
  const alertContext = useContext(AlertContext);

  // get Initial users
  async function getUsers() {
    try {
      setLoading();
      const response = await fetch(
        `${ghApiUrl}/users?client_id=${ghClientId}&cliet_secret=${ghClientSecret}`
      );
      const data = await response.json();
      dispatch({ type: GET_USERS, payload: data });
    } catch (error) {
      alertContext.setAlert(error.message, "danger");
    }
  }

  // Search Users
  async function searchUsers(searchText) {
    try {
      setLoading();

      const response = await fetch(
        `${ghApiUrl}/search/users?q=${searchText}&client_id=${ghClientId}&client_secret=${ghClientSecret}`
      );
      const data = await response.json();
      dispatch({ type: SEARCH_USERS, payload: data.items });
    } catch (error) {
      alertContext.setAlert(error.message, "danger");
    }
  }

  // Get User
  const getUser = async (username) => {
    try {
      setLoading(true);
      const res = await fetch(
        `${ghApiUrl}/users/${username}?client_id=${ghClientId}&client_secret=${ghClientSecret}`
      );
      const data = await res.json();
      dispatch({ type: GET_USER, payload: data });
    } catch (err) {
      alertContext.setAlert(err.message, "danger");
    }
  };

  // Get Repos

  const getUserRepos = async (username) => {
    try {
      setLoading(true);
      const res = await fetch(
        `${ghApiUrl}/users/${username}/repos?per_page=5&sort=created:asc&client_id=${ghClientId}&client_secret=${ghClientSecret}`
      );
      const data = await res.json();
      dispatch({ type: GET_REPOS, payload: data });
    } catch (err) {
      alertContext.setAlert(err.message, "danger");
    }
  };

  // Set Loading
  function setLoading() {
    dispatch({ type: SET_LOADING });
  }

  return (
    <GithubContext.Provider
      value={{ ...state, searchUsers, getUsers, getUserRepos, getUser }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
