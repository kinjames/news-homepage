import { useState } from "react";
import logo from "./images/logo.svg";
import menu from "./images/icon-menu.svg";
import close from "./images/icon-menu-close.svg";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Logo />
      <Menu />
      <Navlinks />
    </div>
  );
};

const Logo = () => {
  return (
    <div className="logo">
      <img src={logo} alt="logo" />
    </div>
  );
};

const Menu = () => {
  const handleClick = (e) => {
    const style = e.target;
    if (style.classList.contains("open")) {
      style.src = close;
      style.classList.remove("open");
    } else {
      style.src = menu;
      style.classList.add("open");
    }
    console.log(style);
  };
  return (
    <div className="menu hide-from-desktop">
      <img
        src={menu}
        alt="Menu-Btn"
        className="menu-img open"
        onClick={(e) => handleClick(e)}
      />
    </div>
  );
};

const Navlinks = () => {
  return (
    <div className="nav-links">
      <a href="https://google.com">Home</a>
      <a href="https://google.com">New</a>
      <a href="https://google.com">Popular</a>
      <a href="https://google.com">Trending</a>
      <a href="https://google.com">Category</a>
    </div>
  );
};

export default Navbar;
