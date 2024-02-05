import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul className="nav nav-pills">
        <li className="nav-item">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="projectGallery"
            end
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Project Gallery
          </NavLink>
        </li>
        {/* <li className="nav-item">
          <NavLink
            to="projectGallery/project"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Project
          </NavLink>
        </li> */}
        <li className="nav-item">
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Contact Me
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
