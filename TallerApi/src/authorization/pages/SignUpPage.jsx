import React from "react";
import { useForm } from "../../hook/useForm";
import { useNavigate } from 'react-router-dom';

export function SignUpPage() {
  const navigate = useNavigate();

  const { username, name, email, password, onInputChange, onResetForm } =
    useForm({
      username: "",
      name: "",
      email: "",
      password: "",
    });

  const onRegister = (e) => {
    e.preventDefault();
    navigate("/dashboard", {
      replace: true,
      state: {
        logged: true,
        name,
      },
    });
    onResetForm();
  };

  return (
    <div>
      <form onSubmit={onRegister}>
        <h1>SignUp</h1>
        <div>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={onInputChange}
            required
            autoComplete="off"
          ></input>
          <label htmlFor="username"> Username: </label>
        </div>
        <div>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            onChange={onInputChange}
            required
            autoComplete="off"
          ></input>
          <label htmlFor="name"> Name: </label>
        </div>
        <div>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={onInputChange}
            required
            autoComplete="off"
          ></input>
          <label htmlFor="email"> Email: </label>
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={onInputChange}
            required
            autoComplete="off"
          ></input>
          <label htmlFor="password"> Password: </label>
        </div>
        <button>sign up</button>
      </form>
    </div>
  );
}
