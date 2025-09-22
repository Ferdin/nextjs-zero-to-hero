"use client";

import { useState } from "react";

export default function TypingEventHandlers() {
  const [value, setValue] = useState<string>("");
  const [text, setText] = useState<string>("");

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("Button clicked!");
    console.log(e.currentTarget);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setValue(e.target.value);
  };

  const handleOnFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    console.log(`${e.currentTarget.value} is focused`);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      alert(`You typed: ${text}`);
    }

    if (e.key === "Escape") {
      setText("");
    }
  };

  return (
    <>
      <button onClick={handleClick}>Click Me</button>
      <br />
      <input type="text" onChange={handleChange} />
      <br />
      <textarea onChange={handleChangeText} onFocus={handleOnFocus}></textarea>
      <br />
      <span>{value}</span>
      <br />
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
      <br />
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
      />
    </>
  );
}
