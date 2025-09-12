"use client";

import { useState } from "react";

export default function Greetings() {
  const [name, setName] = useState<string>("");

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Hello, {name || "stranger"}</p>
    </div>
  );
}
