import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Navbar = () => {

  const {user, logout}= useContext(AuthContext)
  const handleLogout=()=> {
    logout()
    .then(data=> {})
  }
  const navitems = (
    <>
      <li className="mr-3"> Home </li>
      <li className="mr-3"> Products </li>
      <li className="mr-3"> About </li>
      <li className="mr-3"> Contact </li>

      {
        user?.uid? 
        <>
        <button onClick={handleLogout}>logout</button>
        </>
        : 
        <>
        <li>
          <Link to='/login'>login</Link>
        </li>
        </>
      }

    </>
  );
  return (
    <div>
      {/* top of the navbar */}
      <div className="">
        
      </div>
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
          <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navitems}</ul>
        </div>
        <div className="navbar-end">
          <Link className="px-6 py-3 bg-orange-500 " > Join Us</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
