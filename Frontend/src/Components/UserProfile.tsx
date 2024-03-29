import { useAuth0 } from "@auth0/auth0-react";

export const UserProfile = () => { 
    const { user, isAuthenticated, isLoading } = useAuth0();
        if (isLoading) {
            return <div>Loading...</div>
        }
            if (!isAuthenticated || !user ) {
                return <div></div>
            }
        
        return (
                <div className="mr-10">
                    <img className="btn-circle avatar" src={user.picture} alt={user.name} />
                    {/* <p>{user.name}</p> */}
                   {/*  <p>{user.email}</p> */}
                </div>
            )
        }
