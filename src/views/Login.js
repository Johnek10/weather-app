import { useAuth } from "providers/AuthProvider";
import React, { useState } from "react";
import { LoginWrapper } from "./Login.styles";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const { signIn } = useAuth();
  const handleInputChange = (e) => {
    setLoginData({
      ...loginData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(loginData);
  };

  return (
    <LoginWrapper onSubmit={handleSubmit}>
      <label htmlFor="input-email">Email</label>
      <input
        id="input-email"
        type="email"
        name="email"
        value={loginData.email}
        onChange={handleInputChange}
      />

      <label htmlFor="input-password">Password</label>
      <input
        id="input-password"
        name="password"
        type="password"
        value={loginData.password}
        onChange={handleInputChange}
      />

      <br />

      <button type="submit">Login</button>
    </LoginWrapper>
  );
};

export default Login;
