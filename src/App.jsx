import React, { useState } from "react";
import TextFocus from "./TextFocus";

export default function App() {
  const [inputText, setInputText] = useState({
    firstName: "Tanvirul",
    lastName: "Islam",
    email: "tanvir.niter09@gmail.com",
  });

  return (
    <>
      <label>
        First Name:
        <input
          value={inputText.firstName}
          onChange={(e) => {
            setInputText({
              ...inputText,
              firstName: e.target.value,
            });
          }}
        />
      </label>
      <br />

      <label>
        Last Name:
        <input
          value={inputText.lastName}
          onChange={(e) => {
            setInputText({
              ...inputText,
              lastName: e.target.value,
            });
          }}
        />
      </label>
      <br />

      <label>
        Email:
        <input
          value={inputText.email}
          onChange={(e) => {
            setInputText({
              ...inputText,
              email: e.target.value,
            });
          }}
        />
      </label>

      <p>
        {inputText.firstName} {inputText.lastName} {inputText.email}
      </p>

      <TextFocus/>
    </>
  );
}
