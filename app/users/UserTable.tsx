import { sort } from "fast-sort";
import Link from "next/link";
import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserTable = async ({ sortOrder }: { sortOrder: string }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users",{cache: "no-store"});
  const users: User[] = await res.json();
  const sortedUsers = sort(users).asc([(u) => (sortOrder === "email" ? u.email : u.name)]);
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>
            <Link href={"/users?sortOrder=name"}>Name</Link>
          </th>
          <th>
            <Link href={"/users?sortOrder=email"}>Email</Link>
          </th>
        </tr>
      </thead>
      <tbody>
        {sortedUsers.map((el) => (
          <tr key={el.id}>
            <td>{el.name}</td>
            <td>{el.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
