import { Link, NavLink } from "react-router-dom";
import "./navbar.css";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross1 } from "react-icons/rx";

import { useState } from "react";

const Navbar = () => {
  const navItems = [
    { path: "/", element: "home" },
    { path: "/exchanges", element: "exchanges" },
    { path: "/coins", element: "coins" },
    { path: "/more", element: "more" },
  ];
  const [menuOpen, setMenuOpen] = useState(false);
  console.log(menuOpen);
  return (
    <>
      <nav className="navbar">
        <Link to={"/"} className="logo">
          CoinX
        </Link>
        <ul className="navList">
          {navItems.map((item, index) => {
            return (
              <NavLink className="listItem" to={item.path} key={index}>
                {item.element}{" "}
              </NavLink>
            );
          })}
        </ul>
        <div
          className="hamburgerMenu"
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <RxCross1 /> : <RxHamburgerMenu />}
        </div>
      </nav>

      {menuOpen && (
        <div className="mobileMenuOverlay">
          <div className="mobileMenu">
            {navItems.map((item, index) => {
              return (
                <Link
                  to={item.path}
                  onClick={() => setMenuOpen(false)}
                  className="mobileLink"
                  key={index}
                >
                  {item.element}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
