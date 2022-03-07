import React, { useState } from "react";
import "../Styles/login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = ({ setLoginUser }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const handleNavigate = () => {
    return navigate("/signup");
  };
  const login = () => {
    axios.post("http://localhost:9002/login", user).then((res) => {
      // console.log(res.data.user);
      alert(res.data.message);
      setLoginUser(res.data.user);
      navigate("/");
    });
  };
  return (
    <div className="login">
      <h1> Enter Details to Login</h1>
      <input
        type="text"
        name="email"
        value={user.email}
        placeholder="Enter Your Email"
        onChange={handleChange}
      ></input>
      <input
        type="password"
        name="password"
        value={user.password}
        placeholder="Enter Your Password"
        onChange={handleChange}
      ></input>
      <button className="button" onClick={login}>
        Login
      </button>
      <div>Or</div>
      <button className="button" onClick={handleNavigate}>
        Signup
      </button>
    </div>
  );
};

export default Login;
