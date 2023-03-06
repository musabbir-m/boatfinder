import CategoryProducts from "../CategoryProducts/CategoryProducts";
import Home from "../Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../../Layout/Main");



const router= createBrowserRouter(
    [
        {
            path: '/',
            element: <Main></Main>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                  
                },
                {
                    path: '/category/:id',
                    element: <CategoryProducts></CategoryProducts>,
                    loader: ({params})=> fetch(`http://localhost:5000/categories/${params.id}`)
                }

            ]
        }
    ]
)

export default router