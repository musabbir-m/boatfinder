import DashboardLayout from "../../Layout/DashboardLayout";
import AddProduct from "../AddProduct/AddProduct";
import CategoryProducts from "../CategoryProducts/CategoryProducts";
import Dashboard from "../Dashboard/Dashboard";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import PrivateRoute from "./PrivateRoute";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");

const router = createBrowserRouter([
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
        element: <CategoryProducts></CategoryProducts>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/category/${params.id}`),
      },
      {
        path: "/signup",
        element: <Signup> </Signup>,
      },
      {
        path: "/login",
        element: <Login></Login>
      }
    ],
  },

  //dashboard layour
  {
    path: '/dashboard',
    element: <PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "/dashboard/addproduct",
        element: <AddProduct></AddProduct>
      }
    ]
  }
]);

export default router;
