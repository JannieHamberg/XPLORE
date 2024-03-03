import { Footer } from "../Components/Footer"
import { Navbar } from "../Components/Navbar"
import { Outlet } from "react-router-dom"

export const Layout = () => {
    return (
        <div className="w-screen">
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    )
}