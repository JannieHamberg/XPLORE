import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../Layout/Layout";
import { ErrorPage } from "../Pages/ErrorPage";
import { SearchPage } from "../Pages/SearchPage";
import { LibraryPage } from "../Pages/Library";
import { Home } from "../Pages/home";

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
                element: <SearchPage />
            },
            {
                path: "/Library",
                element: <LibraryPage />
            }

        ]
    }

])