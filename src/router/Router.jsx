import {  createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "@/pages/Home/Home";
import ErrorPage from "@/pages/ErrorPage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        children: [
            {
                path: "/",
                element: <Home  />,
            }
        ]
        
    },
    {
        path: '*',
        element: <ErrorPage />
    }
   
]);

export default Router;
