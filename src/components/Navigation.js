import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeClass, setActiveClass] = useState("");

  const handleOnClick = () => {
    if (showMenu) {
      setActiveClass("hidden");
    } else setActiveClass("active");

    setShowMenu(!showMenu);
  };

  const hideOverflow = () => {
    const body = document.querySelector("body");
    if (showMenu) {
      body.style.overflow = "hidden";
    } else body.style.overflow = "";
  };

  useEffect(() => {
    hideOverflow();
  });

  return (
    <nav>
      <div className={`logo ${activeClass}`}>
        <NavLink to="/">
          <p>amandine thomas</p>
        </NavLink>
      </div>

      <button className={`hamburger ${activeClass}`} onClick={handleOnClick}>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
        <div className="hamburger-line"></div>
      </button>

      <ul className={`nav-links ${activeClass}`}>
        <li>
          <NavLink to="/about" activeClassName="active-nav-links">
            A Propos
          </NavLink>
        </li>
        <li>
          <NavLink to="/portfolio" activeClassName="active-nav-links">
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink to="/infos" activeClassName="active-nav-links">
            Infos
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" activeClassName="active-nav-links">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
