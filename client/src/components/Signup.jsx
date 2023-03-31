import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = async(e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8000/signup", { username, email, password});
      console.log(res);
      alert('User Registered Successfully!!!')
      navigate('/login');
    } catch (err) {
      console.log(err);
    }
  };
//   const handleSubmit = () => {
//     register().then((response) => {
//       console.log(response);
//       alert("User Registered Successfully!!!");
//       navigate("/login");
//     });
//   };
  return (
    <div className="mt-44 flex flex-col">
      <h1 className="text-4xl text-center mb-4">Signup</h1>
      <form className="max-w-md mx-auto">
        <input
          type="text"
          value={username}
          placeholder="username"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <input
          type="email"
          value={email}
          placeholder="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <input
          type="password"
          value={password}
          placeholder="password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <button className="primary" onClick={register}>
          Sign Up
        </button>
      </form>
      <span className="text-center text-gray-500 py-2">Already have an account?<Link to={'/login'} className="text text-black underline px-2">Sign in</Link></span>
    </div>
  );
};

export default Signup;
