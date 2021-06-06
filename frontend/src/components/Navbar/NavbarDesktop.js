import React from "react";
import { Link } from "react-router-dom";

const NavbarDesktop = () => {
  const navbarItems = [
    {
      name: "Home",
      route: "/",
    },
    {
      name: "Events",
      route: "/events",
    },
    {
      name: "Profile",
      route: "/",
    },
  ];
  return (
    <div>
      <div className="container d-flex justify-content-between">
        <div className="nav-desktop-left">
          <Link to="/">
            <img src="assets/sealer-logo.png" alt="sealer-logo"></img>
          </Link>
        </div>
        <div className="d-flex justify-content-center align-items-center nav-desktop-right">
          {navbarItems.map((navbarItem, idx) => {
            return (
              <div className="ml-3 mr-3" key={idx}>
                <Link to={navbarItem.route} className="nav-desktop-link">
                  {navbarItem.name}
                </Link>
              </div>
            );
          })}
          <div className="ml-3">
            Hi, <b>James</b>
          </div>
        </div>
      </div>
      <style>
        {`
            .nav-desktop-link, .nav-desktop-link:hover {
                color: #000000;
                text-decoration: none;
            }
        `}
      </style>
    </div>
  );
};

export default NavbarDesktop;
