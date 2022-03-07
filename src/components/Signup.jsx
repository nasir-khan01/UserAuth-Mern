import React, { useState } from "react";
import "../Styles/signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    return navigate("/login");
  };
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    completeAddress: "",
    zipCode: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };
  const signup = () => {
    const {
      email,
      password,
      confirmPassword,
      phoneNumber,
      completeAddress,
      zipCode,
    } = user;
    if (
      email &&
      password &&
      confirmPassword &&
      phoneNumber &&
      completeAddress &&
      zipCode &&
      password === confirmPassword
    ) {
      axios.post("http://localhost:9002/signup", user).then((res) => {
        alert(res.data.message);
        navigate("/login");
      });
    } else {
      alert("Please Fill all the details to continue !!");
    }
  };
  return (
    <div className="signup">
      <h1> Signup to get Started</h1>
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
      <input
        type="password"
        name="confirmPassword"
        value={user.confirmPassword}
        placeholder="Confirm Password"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="phoneNumber"
        value={user.phoneNumber}
        placeholder="Enter Your Phone number"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="completeAddress"
        value={user.completeAddress}
        placeholder="Enter Your Complete address"
        onChange={handleChange}
      ></input>
      <input
        type="text"
        name="zipCode"
        value={user.zipCode}
        placeholder="Enter zip code"
        onChange={handleChange}
      ></input>
      <button className="button" onClick={signup}>
        Signup
      </button>
      <div>Or</div>
      <button className="button" onClick={handleNavigate}>
        Login
      </button>
    </div>
  );
};

export default Signup;
