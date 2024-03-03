import { useAuth0 } from "@auth0/auth0-react";
import { LoggedInHome } from "../Components/LoggedInHome";
import { LoggedOutHome } from "../Components/LoggedOutHome";


export const Home = () => { 
  const {isAuthenticated } = useAuth0();

    return (
        <div>
            {isAuthenticated ? <LoggedInHome /> : <LoggedOutHome />}
        </div>
    )
}