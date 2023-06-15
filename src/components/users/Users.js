import React, { useContext } from "react";
import UserItem from "./UserItem";
import Spinner from "../layout/Spinner";
import GithubContext from "../../context/github/githubContext";

const userStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gridGap: "1rem"
};

function Users() {
  const { loading, users } = useContext(GithubContext);

  if (loading) {
    return <Spinner />;
  }

  if (!users) {
    return null;
  }

  return (
    <div style={userStyle}>
      {users.map((user) => {
        return <UserItem key={user.id} {...user} />;
      })}
    </div>
  );
}

export default Users;
