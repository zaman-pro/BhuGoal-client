import React from "react";
import { NavLink } from "react-router";

const NavLinks = ({ user, onLinkClick }) => {
  return (
    <>
      <li>
        <NavLink className="font-medium" to="/" onClick={onLinkClick}>
          Home
        </NavLink>
      </li>

      <li>
        <NavLink
          className="font-medium"
          to="/assignments"
          onClick={onLinkClick}
        >
          Assignments
        </NavLink>
      </li>

      <li>
        <NavLink className="font-medium" to="/faq" onClick={onLinkClick}>
          FAQ
        </NavLink>
      </li>

      <li>
        <NavLink className="font-medium" to="/about" onClick={onLinkClick}>
          About
        </NavLink>
      </li>

      <li>
        <NavLink className="font-medium" to="/contact" onClick={onLinkClick}>
          Contact Us
        </NavLink>
      </li>
    </>
  );
};

export default NavLinks;
