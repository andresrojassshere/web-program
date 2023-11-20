import React, { useEffect, useState } from "react";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useAuth } from "../context/AuthContext";
import { MultiversePage } from "../website/pages/MultiversePage";

export function Navbar() {
  const { isLogged, user, logout } = useAuth();
  const navigate = useNavigate();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolling) {
        setScrolling(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolling]);

  const onSignOut = () => {
    logout();
    navigate("/", { replace: true });
  };

  const renderMultiverse = isLogged ? <MultiversePage /> : null;
  return (
    <>
      <header
        className={`py-8 px-16 flex items-center fixed top-0 w-full justify-between z-40 text-gray-900 ${
          scrolling ? "bg-[#40b5cb]" : ""
        }`}
      >
        <div className="flex items-center space-x-3">
          <NavLink to="/">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png"
              className="h-12"
              alt="Logo"
            />
          </NavLink>
        </div>

        <nav className="flex items-center space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return `text-base hover:text-[#c0df40] ${
                isActive ? "text-[#c0df40]" : ""
              }`;
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/multiverse"
            className={({ isActive }) => {
              return `text-base hover:text-[#c0df40] ${
                isActive ? "text-[#c0df40]" : ""
              }`;
            }}
          >
            Multiverse
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => {
              return `text-base hover:text-[#c0df40] ${
                isActive ? "text-[#c0df40]" : ""
              }`;
            }}
          >
            About
          </NavLink>
        </nav>

        {isLogged ? (
          <nav className="flex items-center space-x-8">
            <Menu>
              <MenuHandler>
                <div className="flex items-center gap-1">
                  <Typography variant="h6">{user?.name}</Typography>
                  <Avatar
                    variant="circular"
                    alt={user?.name}
                    className="cursor-pointer"
                    src="https://marketplace.canva.com/EAFB24GmN9o/2/0/1600w/canva-blue-yellow-simple-professional-tiktok-profile-picture-OlDfXoRXETE.jpg"
                  />
                </div>
              </MenuHandler>
              <MenuList>
                <MenuItem
                  className="flex items-center gap-2"
                  onClick={onSignOut}
                >
                  <Typography variant="small" className="font-medium">
                    Sign Out
                  </Typography>
                </MenuItem>
              </MenuList>
            </Menu>
          </nav>
        ) : (
          <nav className="flex items-center">
            <NavLink to="/login">
              <Button className="hover:bg-[#c0df40]">Log in</Button>
            </NavLink>
          </nav>
        )}
      </header>

      <Outlet />
    </>
  );
}
