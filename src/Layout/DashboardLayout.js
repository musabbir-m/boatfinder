import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Components/Context/AuthProvider";
import useIfAdmin from "../hooks/useIfAdmin";
import useIfBuyer from "../hooks/useIfBuyer";
import useIfSeller from "../hooks/useIfSeller";

const DashboardLayout = () => {
  const {user, logout} = useContext(AuthContext);
  const [isAdmin] = useIfAdmin(user?.email);
  const [isSeller] = useIfSeller(user?.email);
  const [isBuyer] = useIfBuyer(user?.email);

  const handleLogout = () => {
    logout().then((data) => {});
  };

  return (
    <div>
      {/* Navbar */}

      {/* Dashboard */}

      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Dashboard
          </label>
        </div>

        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {isAdmin && (
              <>
                <li>
                  <Link>All Buyers</Link>
                </li>
                <li>
                  <Link>All Sellers</Link>
                </li>
              </>
            )}

            {
                isBuyer && <>
                <li>
                    <Link>My bookings</Link>
                </li>
                <li>
                    <Link>Wish list</Link>
                </li>
                </>
            }

            {
                isSeller && 
                (<li>
                    <Link>My Products</Link>
                    <Link>Add Product</Link>
                </li>)
                
            }
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
