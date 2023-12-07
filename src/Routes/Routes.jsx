import { createBrowserRouter } from "react-router-dom";
import Main from './../layout/Main';
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/About/About";
import Services from "../pages/Home/Services/Services";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/about",
                element: <About></About>
            },
            {
                path: "/services",
                element: <Services></Services>
            }
        ]
    },
]);
export default router;