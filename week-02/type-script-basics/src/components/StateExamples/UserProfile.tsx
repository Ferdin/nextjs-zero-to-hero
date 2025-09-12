"use client";

import { useState } from "react";

type User = {
  name: string;
  age: number;
};

export default function UserProfile() {
  const [user, setUser] = useState<User>({ name: "Ferdin", age: 30 });

  const birthday = () => {
    setUser({ ...user, age: user.age + 1 });
  };

  return (
    <div>
      <h2>{user.name}</h2>
      <h2>{user.age}</h2>
      <button onClick={birthday}>Increment Age</button>
    </div>
  );
}
