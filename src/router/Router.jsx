import {  createBrowserRouter } from "react-router-dom";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <div>Home</div>,
    },
    {
        path: "/about",
        element: <div>About</div>,
    },
]);

export default Router;
