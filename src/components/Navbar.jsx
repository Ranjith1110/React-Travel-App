import React, { useState } from "react";
import { MenuItems } from "./MenuItems";
import "./Navbar.css";
import { TiThMenu } from "react-icons/ti";
import { MdCancel } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [doorIsOpen, setDoorIsOpen] = useState(false); // Initially closed

  return (
    <nav className="navbarItems d-flex justify-content-between align-items-center">
      <h2 className="logo">Trippy</h2>
      <div className="menu-logo" onClick={() => setDoorIsOpen(!doorIsOpen)}>
        {doorIsOpen ? <MdCancel /> : <TiThMenu />}
      </div>
      {/* Add or remove the 'active' class based on the 'doorIsOpen' state */}
      <ul className={`nav-menu d-flex gap-3 mb-0 align-items-center ${doorIsOpen ? "active" : ""}`}>
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.cName} to={item.url}>
                {item.icon} {item.title}
              </Link>
            </li>
          );
        })}
        {/* <button>Sign Up</button> */}
      </ul>
    </nav>
  );
};

export default Navbar;
