import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/api";
const Login = () => {
  const [username, setUsername] = useState("");
  const [masterPassword, setMasterPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = { username, master_password: masterPassword };
    const response = await loginUser(user);
    if (response) {
      navigate("/dashboard");
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {" "}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />{" "}
      <input
        type="password"
        placeholder="Master Password"
        value={masterPassword}
        onChange={(e) => setMasterPassword(e.target.value)}
      />{" "}
      <button type="submit">Login</button>{" "}
    </form>
  );
};
export default Login;
