import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import Registration from "../Pages/Home/Registration/Registration";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoutes from "./PrivateRoutes";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: "/",
            element:<Home></Home>   
        },
        {
            path: "login",
            element:<Login/>   
        },
        {
            path: "registration",
            element:<Registration/>   
        },
        {
            path: "mytoys",
            element:<PrivateRoutes><MyToys/></PrivateRoutes>
        },
      ]
    },
]);
export default router;