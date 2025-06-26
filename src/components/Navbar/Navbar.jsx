import React, { use, useEffect, useRef, useState } from "react";
import { FaBars, FaXmark } from "react-icons/fa6";
import { Link, NavLink, useLocation } from "react-router";
import { themeChange } from "theme-change";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { RxAvatar } from "react-icons/rx";
import toast from "react-hot-toast";
import NavLinks from "../NavLinks/NavLinks";
import { AnimatePresence, motion } from "motion/react";
import { Tooltip } from "react-tooltip";
import { RiHome4Line } from "react-icons/ri";
import { GrLogout } from "react-icons/gr";

const Navbar = () => {
  const location = useLocation();
  const { user, logout } = use(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const dropdownRef = useRef(null);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);
  const showAuthLinks = !user && location.pathname !== "/auth";

  useEffect(() => {
    themeChange(false);
  }, []);

  // Theme state sync
  useEffect(() => {
    const updateTheme = () => {
      setTheme(localStorage.getItem("theme") || "light");
    };

    window.addEventListener("themeChange", updateTheme);
    return () => window.removeEventListener("themeChange", updateTheme);
  }, []);

  // Click outside dropdown to close
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Click outside menu to close
  useEffect(() => {
    const handleClickOutsideMenu = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutsideMenu);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutsideMenu);
    };
  }, [isOpen]);

  const handleThemeChange = (e) => {
    const newTheme = e.target.checked ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    // theme change update
    window.dispatchEvent(new Event("themeChange"));
  };

  const handleLogout = () => {
    const toastId = toast.loading("Logging out");

    logout()
      .then(() => {
        toast.success("Logout successful", { id: toastId });
      })
      .catch(() => {
        toast.error("Logout failed. Please try again", { id: toastId });
      });
  };

  return (
    <div className="navbar bg-base-100 shadow-md fixed z-50 border top-0 left-1/2 -translate-x-1/2 w-11/12 rounded-md px-4 lg:px-5">
      <div className="navbar-start">
        <div className="relative md:hidden" ref={menuRef}>
          <button
            onClick={toggleMenu}
            className="transition-transform duration-300 ease-in-out relative w-7 h-7 flex text-secondary"
          >
            <div
              className="absolute inset-0 transition-all duration-300 ease-in-out transform"
              style={{ opacity: isOpen ? 0 : 1, transform: "rotate(0deg)" }}
            >
              <RiHome4Line className="w-full h-full" />
            </div>
            <div
              className="absolute inset-0 transition-all duration-300 ease-in-out transform"
              style={{
                opacity: isOpen ? 1 : 0,
                transform: isOpen ? "rotate(90deg)" : "rotate(0deg)",
              }}
            >
              <FaXmark className="w-full h-full" />
            </div>
          </button>

          <AnimatePresence mode="wait">
            {isOpen && (
              <motion.ul
                role="menu"
                aria-label="mobile Menu"
                key="mobile-menu"
                layout
                className="absolute left-0 mt-6 z-10 p-2 shadow menu menu-sm bg-base-100 rounded-box w-52 overflow-hidden will-change-transform"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  type: "spring",
                  stiffness: 500,
                  damping: 32,
                  mass: 0.8,
                }}
              >
                <NavLinks user={user} onLinkClick={() => setIsOpen(false)} />
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        <Link to="/" className="flex items-center">
          <img
            className="w-10 mr-2 hidden md:flex"
            src="https://s14.gifyu.com/images/bHmBS.png"
            alt="Logo"
          />
          <span className="hidden lg:flex text-3xl font-bold text-secondary">
            BhuGoal
          </span>
        </Link>
      </div>

      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal px-1">
          <NavLinks user={user} />
        </ul>
      </div>

      <div className="navbar-end flex items-center gap-3">
        {/* theme toggle button */}
        <input
          name="theme-btn"
          type="checkbox"
          onChange={handleThemeChange}
          defaultChecked={localStorage.getItem("theme") === "dark"}
          className="toggle toggle-secondary"
          aria-label="toggle theme"
        />
        {/* Avatar with dropdown */}
        {user ? (
          <>
            <div ref={dropdownRef} className="relative">
              <div
                role="button"
                tabIndex={0}
                data-tooltip-id="user-tooltip"
                data-tooltip-content={user?.displayName || "Guest"}
                className="w-7 h-7 md:w-10 md:h-10 rounded-full overflow-hidden cursor-pointer flex items-center justify-center"
                onClick={() => setIsDropdownOpen((prev) => !prev)}
              >
                {user?.photoURL ? (
                  <img
                    src={user.photoURL}
                    className="w-full h-full object-cover"
                    alt="User Avatar"
                  />
                ) : (
                  <RxAvatar className="w-full h-full" />
                )}
              </div>

              <AnimatePresence mode="wait">
                {isDropdownOpen && (
                  <motion.ul
                    key="dropdown"
                    layout
                    className="absolute right-0 mt-6 z-10 p-2 shadow menu menu-sm bg-base-100 rounded-box w-52 overflow-hidden will-change-transform"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 32,
                      mass: 0.8,
                    }}
                  >
                    <li>
                      <NavLink
                        className="font-medium"
                        to="/create-assignment"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        Create Assignments
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        className="font-medium"
                        to="/my-attempted-assignments"
                        onClick={() => setIsDropdownOpen(false)}
                      >
                        My Attempted Assignments
                      </NavLink>
                    </li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>

            <div className="hidden lg:block">
              <Tooltip
                id="user-tooltip"
                place="bottom"
                offset={13}
                key={theme}
                style={{
                  backgroundColor: theme === "dark" ? "#f3f4f6" : "#1f2937",
                  color: theme === "dark" ? "#111827" : "#f9fafb",
                }}
              />
            </div>

            <div onClick={handleLogout} className="text-secondary">
              <button className="hidden md:flex btn btn-outline btn-secondary">
                Logout
              </button>

              <GrLogout size={25} className="md:hidden" />
            </div>
          </>
        ) : (
          showAuthLinks && (
            <div className="flex gap-2">
              <Link
                to="/auth?mode=login"
                className="btn btn-outline btn-secondary"
              >
                Login
              </Link>
              <Link
                to="/auth?mode=register"
                className="btn btn-outline btn-secondary hidden md:flex"
              >
                Register
              </Link>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Navbar;
