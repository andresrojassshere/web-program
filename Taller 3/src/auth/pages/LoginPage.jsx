import { NavLink, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import { useForm } from "../../hook/useForm";
import { useAuth } from "../../context/AuthContext";

export function LoginPage() {
  const navigate = useNavigate();
  const { login } = useAuth();

  const { name, email, password, onInputChange, onResetForm } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const onLogin = (event) => {
    event.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      login(name);
      navigate("/multiverse", { replace: true });
      onResetForm();
    } else {
      return alert("Invalid credentials");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto w-full md:w-96">
        <div className="text-center">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"
            alt="Logo"
            className="mx-auto mb-4"
          />
          <p className="text-gray-500">Enter the multiverse.</p>
        </div>

        <form onSubmit={onLogin} className="mt-4">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700">
              Name
            </label>
            <div>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={onInputChange}
                placeholder="Enter your name"
                required
                autoComplete="off"
                className="w-full rounded-lg border-gray-200 p-2 text-sm shadow-sm"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <div>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={onInputChange}
                placeholder="Enter your email"
                required
                autoComplete="off"
                className="w-full rounded-lg border-gray-200 p-2 text-sm shadow-sm"
              />
            </div>
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <div>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={onInputChange}
                placeholder="Enter password"
                required
                autoComplete="off"
                className="w-full rounded-lg border-gray-200 p-2 text-sm shadow-sm"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-500 mb-2 md:mb-0">
              No account?
              <NavLink to="/register" className="underline ml-1">
                Register
              </NavLink>
            </p>
            <Button type="submit">Log in</Button>
          </div>
        </form>
      </div>
    </div>
  );
}
