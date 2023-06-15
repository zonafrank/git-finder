import {
  SEARCH_USERS,
  GET_USERS,
  GET_USER,
  SET_LOADING,
  GET_REPOS
} from "../types";

const githubReducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, loading: true };
    case SEARCH_USERS:
    case GET_USERS:
      return { ...state, users: action.payload, loading: false };
    case GET_USER:
      return { ...state, user: action.payload, loading: false };
    case GET_REPOS:
      return { ...state, repos: action.payload, loading: false };
    default:
      return state;
  }
};

export default githubReducer;
