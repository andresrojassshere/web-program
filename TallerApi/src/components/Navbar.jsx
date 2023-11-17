import React from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { Alert } from 'flowbite-react';

export function Navbar() {
  const { state } = useLocation();
  const navigate = useNavigate();

  console.log(state);

  const onLogout = () => {
		navigate('/login', {
			replace: true,
		});
	};

  return (
    <>
      <header>
        <div>
          <NavLink to="/"> Logo </NavLink>
        </div>

        {state?.logged ? (
          <div>
            <span>{state?.name}</span>
            <button onClick={onLogout}>logout</button>
          </div>
        ) : (
          <NavLink>
            <div>
              <NavLink to="/login">Login</NavLink>
            </div>
            <div>
              <NavLink to="/signup">Sign up</NavLink>
            </div>
          </NavLink>
    
        )}




<h1 className="bg-red-700">funciona</h1>

<Alert color="info">

      <span className="font-medium">Info alert!</span> Change a few things up and try submitting again.
    </Alert>

        <Outlet />
      </header>
    </>
  );
}
