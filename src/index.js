import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import UserProfile from "./pages/UserProfile";
import {createBrowserRouter,RouterProvider} from "react-router-dom";

const router=createBrowserRouter([
    {path:"/" , element:<Home />},
    {path:"/About" , element:<About />},
    {path:"/Login" , element:<Login />},
    {path:"/Profile/:id" , element:<UserProfile />}
    

])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);