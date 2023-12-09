import { createBrowserRouter } from "react-router-dom";
import Main from './../layout/Main';
import Home from "../pages/Home/Home/Home";
import About from "../pages/Home/About/About";
import Services from "../pages/Home/Services/Services";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import CheckOut from "../pages/CheckOut/CheckOut";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

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
            },
            {
                path: "/bookings",
                element: <PrivateRoute>
                    <Bookings></Bookings>
                </PrivateRoute>
            },
            {
                path: "/checkout/:id",
                element: <CheckOut></CheckOut>,
                loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`)
            },
            {
                path: "/sign",
                element: <SignUp></SignUp>
            },
            {
                path: "/login",
                element: <Login></Login>
            }
        ]
    },
]);
export default router;