import React from "react";
import logo from "../logo.svg";

import { NavLink, Outlet } from "react-router-dom";

const setActive = ({ isActive }) => (isActive ? "active--link" : "");

function Layout() {
  return (
    <>
      <header className="App-header">
        <div class="logo">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <div className="mini__header">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/detail">Detail</NavLink>
          <NavLink to="/blogs"> Blogpage</NavLink>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="App--footer">
        <p>2023</p>
        <div className="footer__links">
          <NavLink to="/" className={setActive}>Home</NavLink>
          <NavLink to="/about" className={setActive}>About</NavLink>
          <NavLink to="/detail">Detail</NavLink>
        </div>
      </footer>
    </>
  );
}

export default Layout;
