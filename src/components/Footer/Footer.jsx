import React, { use } from "react";
import { NavLink } from "react-router";
import SocialLinks from "../SocialLinks/SocialLinks";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const Footer = () => {
  const { user } = use(AuthContext) || AuthContext;
  return (
    <div className="bg-secondary/10">
      <footer className="flex flex-col md:flex-row justify-between md:items-start mx-auto md:py-10 gap-10 w-11/12 lg:w-10/12">
        <div className="space-y-5">
          <a className="text-4xl text-secondary font-bold">BhuGoal</a>
          <p className="">Connect. Assign. Grow.</p>
          <SocialLinks />
        </div>

        <div>
          <h6 className="font-semibold">Essential Links</h6>
          <div className="mt-2 space-y-1">
            <NavLink to="/" className="block text-sm">
              Home
            </NavLink>
            {user ? (
              <>
                <NavLink to="/pending-assignments" className="block text-sm">
                  Pending Assignments
                </NavLink>
                {/* <NavLink to="/edit/profile" className="block text-sm">
                  Edit Profile
                </NavLink> */}
              </>
            ) : (
              <>
                <NavLink to="/auth" className="block text-sm">
                  Login
                </NavLink>
                <NavLink to="/register" className="block text-sm">
                  Register
                </NavLink>
              </>
            )}
          </div>
        </div>

        <div>
          <h6 className="font-semibold">Legal & Resources</h6>
          <div className="mt-2 space-y-1 footerLink">
            <NavLink to="/terms" className="block text-sm">
              Terms of Service
            </NavLink>
            <NavLink to="/privacy" className="block text-sm">
              Privacy Policy
            </NavLink>
            <NavLink to="/developer-resources" className="block text-sm">
              Developer Resources
            </NavLink>
          </div>
        </div>
      </footer>

      <div className="border-t w-11/12 lg:w-10/12 mx-auto"></div>

      <footer className="py-4 md:py-8 w-11/12 lg:w-10/12 mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5 text-center">
          <p className="text-xs">
            © {new Date().getFullYear()} - zaman-pro. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
