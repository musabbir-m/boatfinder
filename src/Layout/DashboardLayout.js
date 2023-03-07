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

  //side drawer list styele
  const sideDrawerLi= "text-orange-500 text-xl font-semibold boreder bg-white mt-3 "

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

        <div className="drawer-side bg-blue-500">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  bg-gray-300 text-base-content">
            {isAdmin && (
              <>
                <li className={sideDrawerLi}>
                  <Link>All Buyers</Link>
                </li>
                <li className={sideDrawerLi}>
                  <Link>All Sellers</Link>
                </li>
              </>
            )}

            {
                isBuyer && <>
                <li className={sideDrawerLi}>
                    <Link>My bookings</Link>
                </li>
                <li className={sideDrawerLi}>
                    <Link>Wish list</Link>
                </li>
                </>
            }

            {
                isSeller && 
                (<>
                <li className={sideDrawerLi}>
                    <Link>My Products</Link>
                   
                </li>
                <li className={sideDrawerLi}>
                     <Link to='/dashboard/addproduct'>Add Product</Link>
                </li>
                </>)
                
            }
           
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
