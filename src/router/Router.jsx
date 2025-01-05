import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>
    },
    {
        path: "/about",
        element: <div>About</div>,
    },
]);

export default Router;
