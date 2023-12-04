"use client";
import React, { useEffect, useState } from "react";

const Users = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <h2 className="text-2xl text-center">Total Users : {users.length}</h2>
      {users.map((user) => (
        <div
          key={user.id}
          className="card w-[50%] my-10 mx-auto bg-base-100 shadow-xl"
        >
          <div className="card-body">
            <h2 className="card-title">{user.name}</h2>
            <p>{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Users;
