import axios from "axios";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom"; // React Router hook

export default function Index() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook to programmatically navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const resp = await axios.post("http://localhost:8081/login", {
      username,
      password,
    });
    if (resp.data === "valid") {
      sessionStorage.setItem("username", username);
      navigate("/home");
      alert("login successfull");
    } else {
      navigate("/");
      alert("login not successfull, try again");
    }
  };
  return (
    <>
      <h2>Login here:</h2>
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
        <input type="submit" value="LOG IN" />
        <br />
        <br />
      </form>

      <NavLink to="/openSignUp">New user? Create account</NavLink>
    </>
  );
}
