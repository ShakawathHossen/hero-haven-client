import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Home/Login/Login";
import Registration from "../Pages/Home/Registration/Registration";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoutes from "./PrivateRoutes";
import AddToy from "../Pages/AddToy/AddToy";
import AllToys from "../Pages/AllToys/AllToys";
import Blogs from "../Pages/Blogs/Blogs";

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
            path: "all-toys",
            element:<AllToys/>   
        },
        {
            path: "my-toys",
            element:<PrivateRoutes><MyToys/></PrivateRoutes>
        },
        {
            path: "add-toy",
            element:<PrivateRoutes><AddToy/></PrivateRoutes>
        },
        {
            path: "blogs",
            element:<Blogs></Blogs>
        },
      ]
    },
]);
export default router;