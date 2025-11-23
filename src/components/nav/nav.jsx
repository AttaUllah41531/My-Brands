import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm sticky-top">
      <div className="container">

        {/* Brand Logo */}
        <Link className="navbar-brand fw-bold fs-3" to="/">
          MyBrand
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Menu */}
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-3">

            <li className="nav-item">
              <Link className="nav-link fs-5" to="/">
                Home
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fs-5" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link fs-5" to="/services">
                Services
              </Link>
            </li>

            {/* 🔥 CATEGORY DROPDOWN */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle fs-5"
                href="#"
                id="categoryDropdown"
                role="button"
                data-bs-toggle="dropdown"
              >
                Category
              </a>

              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/hp">
                    HP Laptops
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/dell">
                    Dell Laptops
                  </Link>
                </li>

                <li>
                  <Link className="dropdown-item" to="/simple">
                    Simple Laptops
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="btn btn-info text-dark px-3 fw-semibold" to="/contact">
                Contact
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
