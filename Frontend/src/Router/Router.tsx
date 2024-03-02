import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { ErrorPage } from "../Pages/ErrorPage";
import { Home } from "../Pages/Home";
import { Search } from "../Pages/Search";
import { Library } from "../Pages/Library";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [ 
            {
                path: "/",
                element: <Home />,
                index: true
            },
            {
                path: "/search",
                element: <Search />
            },
            {
                path: "/Library",
                element: <Library />
            }

        ]
    }

])