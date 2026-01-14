import React from "react";
import navImg from "../../assets/logo.png";
import dollarImg from "../../assets/Currency.png";

const Navbar = () => {
  return (
    <div>
      <div className="navbar container mx-auto px-8 md:px-16">
        <div className="navbar-start">
          <div className="dropdown mr-4 md:mr-0">
            <div tabIndex={0} role="button" className="md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 text-2xl font-medium rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Fixture</a>
              </li>
              <li>
                <a>Teams</a>
              </li>
              <li>
                <a>Schedules</a>
              </li>
            </ul>
          </div>
          {/* Logo */}
          <img className="h-18 w-[73.5px]" src={navImg} alt="Logo" />
        </div>
        <div className="navbar-end gap-2">
          <div className="hidden md:flex items-center">
            <a className="mr-12 cursor-pointer">Home</a>
            <a className="mr-12 cursor-pointer">Fixture</a>
            <a className="mr-12 cursor-pointer">Teams</a>
            <a className="mr-12 cursor-pointer">Schedules</a>
          </div>
          <a className="btn bg-white font-medium">
            <span>6000000000</span>
            <span>Coin</span>
            <span>
              <img src={dollarImg} alt="$" />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
