
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "./LogOut"
import { LoginButton } from "./Login";
import { UserProfile } from "./UserProfile"
import { NavLink } from "react-router-dom";

export const Navbar = () => { 
    const { isAuthenticated } = useAuth0();
    const baseNavbar = 'navbar w-screen flex flex-row justify-end p-3';

    const navbarAuth = isAuthenticated ? `${baseNavbar} bg-custom-purple text-white` : `${baseNavbar} bg-white`;

    return (
        <div className={navbarAuth}>
            
          <ul className="flex space-x-4">
                <li>
                    <NavLink to="/">Home</NavLink>
                    </li>
                <li>
                    <NavLink to="/library">Library</NavLink>
                    </li>
                <li>
                {isAuthenticated ? <LogoutButton /> : <LoginButton />   }
                    </li>
                <li>
                <UserProfile />
                    </li>
            </ul>
        </div>
    )
}