import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Components/Context/AuthProvider";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
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
    <div className="">
      {/* Navbar */}
      <Navbar></Navbar>
      <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button  lg:hidden"
          >
            Dashboard
          </label>

      {/* Dashboard */}

      <div className="drawer drawer-mobile">
        
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center mt-10 py-16">
          
          <Outlet ></Outlet>
          
        </div>

        <div className="drawer-side ">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80  bg-gray-300 text-base-content">
            {isAdmin && (
              <>
                <li className={sideDrawerLi}>
                  <Link to='/dashboard/allbuyer'>All Buyers</Link>
                </li>
                <li className={sideDrawerLi}>
                  <Link to='/dashboard/allseller'>All Sellers</Link>
                </li>
              </>
            )}

            {
                isBuyer && <>
                <li className={sideDrawerLi}>
                    <Link to='/dashboard/mybooking'>My bookings</Link>
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
                    <Link to='/dashboard/myproducts'>My Products</Link>
                   
                </li>
                <li className={sideDrawerLi}>
                     <Link to='/dashboard/addproduct'>Add Product</Link>
                </li>
                </>)
                
            }
           
          </ul>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default DashboardLayout;
