import { Footer } from "../Components/Footer"
import { Navbar } from "../Components/Navbar"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}