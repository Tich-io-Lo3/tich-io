import React from "react";
import { Link } from "react-router-dom";
import { useCurrentUser } from "../providers/CurrentUserProvider";

const Nav = () => {
  const { currentUser, setCurrentUser } = useCurrentUser();
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        backgroundColor: "pink",
        height: "150%",
        padding: 15,
      }}
    >
      <Link
        to="/games"
        style={{ textDecoration: "none", fontWeight: "bold", color: "black" }}
      >
        Games
      </Link>
      {!currentUser ? (
        <>
          <Link
            to="/signin"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "black",
            }}
          >
            Sign in
          </Link>
          <Link
            to="/signup"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "black",
            }}
          >
            Sign up
          </Link>
        </>
      ) : (
        <>
          <Link
            to="/manage-game"
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "black",
            }}
          >
            Create game
          </Link>

          <p
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "black",
              margin: 0,
              cursor: "pointer",
            }}
            onClick={() => setCurrentUser(null)}
          >
            Sign out
          </p>
          <Link
            to={`/users/${currentUser.id}`}
            style={{
              textDecoration: "none",
              fontWeight: "bold",
              color: "black",
            }}
          >
            Account
          </Link>
        </>
      )}
    </div>
  );
};

export default Nav;
