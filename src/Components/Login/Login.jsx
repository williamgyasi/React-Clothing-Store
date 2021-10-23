import React, { useState } from "react";
import "./login.styles.scss";

import { FormInput, Button } from "../index";

import { signInWithGoogle } from "../../Firebase/firebase.utils";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const resetFields = () => {};

  const handleUserAccountChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    user[name] = value;
    console.log(user);
    // setUser(user)
    setUser(user);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setEmail("");
    setPassword("");
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    console.log(event.target.name);
  };

  return (
    <div className="login" onSubmit={handleSubmit}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form action="">
        <FormInput
          name="email"
          type="email"
          value={user[email]}
          onChange={handleUserAccountChange}
          label="Email"
          required
        />

        <FormInput
          name="password"
          type="password"
          value={user[password]}
          required
          onChange={handleUserAccountChange}
          label="Password"
        />

        <div className="button-container">
          <Button type="submit" value="Submit Form">
            Login
          </Button>
          <Button isGoogleSignIn onClick={signInWithGoogle} type="submit" value="Submit Form">
            Sign in with Google
          </Button>
        </div>

      </form>
    </div>
  );
};

export default Login;
