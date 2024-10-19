import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // React Router hook

export default function SignUp() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");

  const handleGender = (e) => {
    setGender(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await axios.post("http://localhost:8081/signUp", {
      username,
      email,
      password,
      dob,
      gender,
    });
    console.log(resp);
  };
  return (
    <>
      <h2>Sign Up Form:</h2>
      <form onSubmit={handleSubmit}>
        <label>USERNAME: </label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <br />
        <label>EMAIL: </label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <br />
        <br />
        <label>PASSWORD: </label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <br />
        <label>DOB: </label>
        <input
          type="date"
          name="dob"
          value={dob}
          onChange={(e) => {
            setDob(e.target.value);
          }}
        />
        <br />
        <br />
        <label>GENDER: </label>
        <label>
          M
          <input
            type="radio"
            name="gender"
            value="M"
            checked={gender === "M"}
            onChange={handleGender}
          />
        </label>
        <label>
          F
          <input
            type="radio"
            name="gender"
            value="F"
            checked={gender === "F"}
            onChange={handleGender}
          />
        </label>
        <label>
          O
          <input
            type="radio"
            name="gender"
            value="O"
            checked={gender === "O"}
            onChange={handleGender}
          />
        </label>
        <br />
        <br />
        <input type="submit" value="SIGN UP" />
        <br />
        <br />
      </form>
      <NavLink to="/">Already a user? Login instead</NavLink>
    </>
  );
}
