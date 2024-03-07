import { useAuth0 } from "@auth0/auth0-react";

export const HomePageButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <>
        <button className="HomePageButton"
                onClick={() => loginWithRedirect()}>Login</button>
        </>
    )
}