import DashboardLayout from "../../Layout/DashboardLayout";
import AddProduct from "../AddProduct/AddProduct";
import AllBuyer from "../AllBuyer/AllBuyer";
import AllSellers from "../AllSellers/AllSellers";
import CategoryProducts from "../CategoryProducts/CategoryProducts";
import Dashboard from "../Dashboard/Dashboard";
import Payment from "../Dashboard/Payment/Payment";
import Home from "../Home/Home";
import Login from "../Login/Login";
import MyBookings from "../MyBookings/MyBookings";
import MyProducts from "../MyProducts/MyProducts";
import Signup from "../Signup/Signup";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");

const 
router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/category/:id",
        element: (
          <PrivateRoute>
            <CategoryProducts></CategoryProducts>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://boatfinder-server.vercel.app/category/${params.id}`),
      },
      {
        path: "/signup",
        element: <Signup> </Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
    ],
  },

  //dashboard layour
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        {" "}
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/dashboard/myproducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "/dashboard/allseller",
        element: <AllSellers></AllSellers>,
      },
      {
        path: "/dashboard/allbuyer",
        element: <AllBuyer></AllBuyer>,
      },
      {
        path: "/dashboard/mybooking",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "/dashboard/payment/:id",
        element: <Payment></Payment>,
        loader: ({params})=> fetch(`http://localhost:5000/payment/${params.id}`)
      }
    ],
  },
]);

export default router;
