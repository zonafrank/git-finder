import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import GithubContext from "../../context/github/githubContext";

const User = () => {
  const params = useParams();
  const { loading, user, getUser, getUserRepos, repos } =
    useContext(GithubContext);

  useEffect(() => {
    getUser(params?.login);
    getUserRepos(params?.login);
  }, [params?.login]); // eslint-disable-line

  if (loading) {
    return <Spinner />;
  }

  if (!user) {
    return null;
  }

  const {
    name,
    avatar_url,
    location,
    bio,
    blog,
    login,
    html_url,
    followers,
    following,
    public_repos,
    public_gists,
    hireable,
    company
  } = user;
  return (
    <>
      <Link to="/" className="btn btn-light">
        Back to search
      </Link>
      Hireable:{" "}
      {hireable ? (
        <i className="fas fa-check text-success"></i>
      ) : (
        <i className="fas fa-times-circle text-danger"></i>
      )}
      <div className="card grid-2">
        <div className="all-center">
          <img
            src={avatar_url}
            alt={name}
            className="round-img"
            style={{ width: 150 }}
          />
          <h1>{name}</h1>
          <p>Location: {location}</p>
        </div>
        <div>
          {bio ? (
            <>
              <h3>Bio</h3>
              <p>{bio}</p>
            </>
          ) : null}
          <a
            href={html_url}
            className="btn btn-dark my-1"
            target="_blank"
            rel="noreferrer"
          >
            Visit Github Profile
          </a>
          <ul>
            {login && (
              <li>
                <small>
                  <strong>Username: {login}</strong>
                </small>
              </li>
            )}
            {login && (
              <li>
                <small>
                  <strong>Company: {company}</strong>
                </small>
              </li>
            )}
            {login && (
              <li>
                <small>
                  <strong>Website: {blog}</strong>
                </small>
              </li>
            )}
          </ul>
        </div>
      </div>
      <div className="card text-center">
        <div className="badge badge-primary">Followers: {followers}</div>
        <div className="badge badge-success">Following: {following}</div>
        <div className="badge badge-light">Public Repos: {public_repos}</div>
        <div className="badge badge-dark">Public Gists: {public_gists}</div>
      </div>
      {repos.length && <Repos repos={repos} />}
    </>
  );
};

export default User;
