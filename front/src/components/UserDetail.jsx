import React from "react";
import { useParams } from "react-router-dom";

const UserDetail = () => {
  let { userId } = useParams();
  userId = parseInt(userId);

  //TODO findUserById()
  const userIndex = users.findIndex((u) => u.id == userId);
  const user = users[userIndex];

  return (
    <div>
      <p>Details</p>
      <p>{user?.username}</p>
    </div>
  );
};

//TODO getAllUsers()
const users = [
  {
    id: 1,
    username: "tiego",
    password: "123",
  },
  {
    id: 2,
    username: "plante",
    password: "verte",
  },
  {
    id: 3,
    username: "monkey",
    password: "enzo",
  },
];

export default UserDetail;
