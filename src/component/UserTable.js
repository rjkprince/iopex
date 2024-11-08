import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";

export default function UserTable() {
  const { users, setUsers, theme } = useContext(UserContext);
  const fetchUsers = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
  };
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <table className="table-auto border border-collapse border-slate-400" data-theme={theme}>
      <thead className="border border-collapse border-slate-400">
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Company Name</th>
          <th>Action</th>
          <th>Address</th>
          <th>Phone Number</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            <td>{user.name}</td>
            <td>{user.email}</td>
            <td>{user.company.name}</td>
            <td>
              <button
              className="border bg-rose-500 rounded-md px-2"
                onClick={() => {
                  setUsers((prevUsers) => {
                    return prevUsers.map((puser) => {
                      if (puser.id === user.id)
                        return { ...puser, showMore: !puser.showMore };
                      else return puser;
                    });
                  });
                }}
              >
                {user.showMore ? "show less" : "show more"}
              </button>
            </td>
            {user.showMore && (
              <>
                <td>{user.address.city}</td>
                <td>{user.phone}</td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
