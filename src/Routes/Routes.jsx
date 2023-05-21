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
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import UpdateToy from "../Pages/UpdateToy/UpdateToy";

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
            element:<AllToys/>,
            loader:()=> fetch('https://hero-haven-server-two.vercel.app/toys') 
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
        {
            path: "toy/:id",
            element:<UpdateToy/>,
            loader: ({ params }) => {
                return fetch(`https://hero-haven-server-two.vercel.app/toy/${params.id}`)
                 
              },
        },
      ]
    },
    {
      path: "*",
      element:<ErrorPage/>
  
    }
]);
export default router;