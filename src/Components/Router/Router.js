import CategoryProducts from "../CategoryProducts/CategoryProducts";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";

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
          fetch(`http://localhost:5000/categories/${params.id}`),
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
]);

export default router;
