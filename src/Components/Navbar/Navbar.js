import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { TbSpeedboat } from "react-icons/tb";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const handleLogout = () => {
    logout().then((data) => {});
  };
  const navitems = (
    <>
      <li className="mr-3">
        {" "}
        <Link to="/">Home</Link>{" "}
      </li>
      <li className="mr-3">
        {" "}
        <Link>Products</Link>{" "}
      </li>
      <li className="mr-3">
        {" "}
        <Link>About</Link>{" "}
      </li>
      <li className="mr-3">
        {" "}
        <Link>Contact</Link>{" "}
      </li>

      {user?.uid ? (
        <>
          <div className="dropdown">
            <label tabIndex={0} className="btn m-1">
             <FaUserCircle className="text-2xl"></FaUserCircle>
            </label>
            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
            >
             <li>
             <button className="text-black " onClick={handleLogout}>logout</button>
             </li>
              <li>
               <Link to='/dashboard' className="text-black ">Dashboard</Link>
              </li>
            </ul>
          </div>
          
        </>
      ) : (
        <>
          <li>
            <Link to="/login">login</Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div>
      {/* top of the navbar */}
      <div className=""></div>
      {/* Top of the navbar ends */}

      {/* Main navbar */}
      <div className="navbar bg-blue-900 text-white h-24">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navitems}
            </ul>
          </div>
          <a className=" normal-case text-xl bg-gray-200 rounded-md px-1 font-semibold italic text-black">
            {" "}
            <TbSpeedboat className="inline text-2xl"></TbSpeedboat>{" "}
            <span className="text-blue-600"> Boat</span>Finder
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navitems}</ul>
        </div>
        <div className="navbar-end">
          <Link className="px-6 py-3 bg-orange-500 "> Subscribe</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
