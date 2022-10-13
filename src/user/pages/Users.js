import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "name",
      image:
        "https://img.freepik.com/premium-photo/school-supplies-floating-with-blue-backpack-red-pastel-background_360032-1154.jpg?w=2000",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;
