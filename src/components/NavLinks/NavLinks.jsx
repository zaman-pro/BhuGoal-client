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

      {user && (
        <li>
          <NavLink
            className="font-medium"
            to="/pending-assignments"
            onClick={onLinkClick}
          >
            Pending Assignments
          </NavLink>
        </li>
      )}
    </>
  );
};

export default NavLinks;
