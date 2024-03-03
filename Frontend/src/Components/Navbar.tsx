
import { useAuth0 } from "@auth0/auth0-react";
import { LogoutButton } from "./LogOut"
import { LoginButton } from "./Login";
import { UserProfile } from "./UserProfile"

export const Navbar = () => { 
    const { isAuthenticated } = useAuth0();

    return (
        <div className="navbar w-screen flex flex-row justify-end p-3 ">
         {isAuthenticated ? <LogoutButton /> : <LoginButton />   }
        <UserProfile />
        
        </div>
    )
}