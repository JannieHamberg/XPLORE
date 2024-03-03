import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
    return (
        <>
        <button className="px-2" onClick={() => loginWithRedirect()}>Login</button>
        </>
    )
}