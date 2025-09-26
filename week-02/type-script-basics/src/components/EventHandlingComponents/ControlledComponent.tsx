"use client";

import { useState } from "react";

export default function ControlledComponent() {
  const [name, setName] = useState<string>(""); // React state = source of truth
  const [fruit, setFruit] = useState<string>("Apple");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value); // update React state whenever input changes
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFruit(e.target.value);
  };

  return (
    <div>
      <input type="text" value={name} onChange={handleChange} />
      <br />
      <select value={fruit} onChange={handleSelectChange}>
        <option value="Apple">Apple</option>
        <option value="Banana">Banana</option>
        <option value="Cherry">Cherry</option>
      </select>
      <p>Hello, {name}!</p>
      <br />
      <p>And my favorite fruit is {fruit}</p>
    </div>
  );
}
