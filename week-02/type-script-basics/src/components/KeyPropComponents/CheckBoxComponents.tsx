"use client";

import { useState } from "react";

// Sample data for our lists
const initialUsers = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", email: "bob@example.com" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
];

type userProps = {
  users: any;
  onRemove: any;
};

// Component WITHOUT proper keys (demonstrates the problem)
const UserListWithoutKeys = ({ users, onRemove }: userProps) => (
  <div>
    <h3>❌ Without Proper Keys (Array Index)</h3>
    {users.map((user: any, index: any) => (
      <div key={index}>
        <div>
          <input type="text" defaultValue={user.name} placeholder="Name" />
          <input type="email" defaultValue={user.email} placeholder="Email" />
        </div>
        <button onClick={() => onRemove(user.id)}>Remove</button>
      </div>
    ))}
  </div>
);

// Component WITH proper keys (demonstrates the solution)
const UserListWithKeys = ({ users, onRemove }: userProps) => (
  <div className="space-y-2">
    <h3>✅ With Proper Keys (Unique ID)</h3>
    {users.map((user: any) => (
      <div key={user.id}>
        <div>
          <input type="text" defaultValue={user.name} placeholder="Name" />
          <input type="email" defaultValue={user.email} placeholder="Email" />
        </div>
        <button onClick={() => onRemove(user.id)}>Remove</button>
      </div>
    ))}
  </div>
);

export default function KeyPropDemo() {
  const [usersWithoutKeys, setUsersWithoutKeys] = useState([...initialUsers]);
  const [usersWithKeys, setUsersWithKeys] = useState([...initialUsers]);

  const removeUserWithoutKeys = (id: any) => {
    setUsersWithoutKeys((prev) => prev.filter((user) => user.id !== id));
  };

  const removeUserWithKeys = (id: any) => {
    setUsersWithKeys((prev) => prev.filter((user) => user.id !== id));
  };

  const resetLists = () => {
    setUsersWithoutKeys([...initialUsers]);
    setUsersWithKeys([...initialUsers]);
  };

  const addUser = () => {
    const newId =
      Math.max(
        ...usersWithoutKeys.map((u) => u.id),
        ...usersWithKeys.map((u) => u.id)
      ) + 1;
    const newUser = {
      id: newId,
      name: `User ${newId}`,
      email: `user${newId}@example.com`,
    };
    setUsersWithoutKeys((prev) => [...prev, newUser]);
    setUsersWithKeys((prev) => [...prev, newUser]);
  };

  return (
    <div>
      <div>
        <button onClick={addUser}>Add User</button>
        <button onClick={resetLists}>Reset Lists</button>
      </div>
      <div>
        <UserListWithoutKeys
          users={usersWithoutKeys}
          onRemove={removeUserWithoutKeys}
        />
        <UserListWithKeys users={usersWithKeys} onRemove={removeUserWithKeys} />
      </div>
    </div>
  );
}
