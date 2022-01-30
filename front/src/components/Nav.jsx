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
        to="/manage-game"
        style={{ textDecoration: "none", fontWeight: "bold", color: "black" }}
      >
        Create game
      </Link>
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
      )}
    </div>
  );
};

export default Nav;
