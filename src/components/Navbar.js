// Import necessary dependencies / components
import { useState } from "react";
import { Link } from "react-router-dom";
import navBarURLs from "../data/nav";

// Import styling
import "../styling/navbar.sass";

// Navigation bar JSX component
const Navbar = () => {
  const [sideNav, setSideNav] = useState(false);
  const showSideNav = () => setSideNav(!sideNav);

  return (
    <>
      {/* Navigator Menu Toggle Button */}
      <div className={`${sideNav ? "toggle-nav-btn active" : "toggle-nav-btn"}`} onClick={showSideNav}>
        <i className={`${sideNav ? "fas fa-times" : "fas fa-bars"}`}/>
      </div>

      {/* Navigator Menu */}
      <ul className={`${sideNav ? "nav-bar active" : "nav-bar"}`} onClick={showSideNav}>
        {navBarURLs.map((item, index) => {
          return(
            <li key={index} className="nav-item">
              <Link to={`/${item.path}`}>
                {item.title.toUpperCase()} &nbsp; <i className={item.icon} />
              </Link>
            </li>
          )
        })}

        <li className="nav-item">
            <a href="https://github.com/ScorpyG/beyond-the-horizon" target="_blank" rel="noreferrer">
            VIEW REPO &nbsp; <i className="fas fa-code"/>
            </a>
        </li>
      </ul>
    </>
  );
};

export default Navbar;