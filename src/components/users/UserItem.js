import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function UserItem(props) {
  const { avatar_url, login } = props;
  return (
    <div className="card text-center">
      <img src={avatar_url} alt={login} style={{ width: 60 }} />
      <h3>{login}</h3>
      <div>
        <Link to={`/users/${login}`} className="btn btn-dark btn-sm my-1">
          More...
        </Link>
      </div>
    </div>
  );
}

UserItem.propTypes = {
  avatar_url: PropTypes.string.isRequired,
  login: PropTypes.string.isRequired,
  html_url: PropTypes.string.isRequired
};

export default UserItem;
