import { useAuth0 } from "@auth0/auth0-react";
import { Search } from "./Search"


export const LoggedInHome = () => {
    const { user } = useAuth0();
    const colors = [ "#ffcf05", "#662eb5", "#0cc0df", "#34a612", "#df4e80", "#ffcf05", "#662eb5"];

    const colorful = "peeking".split("").map((char, index) => {
        return <span key={index} style={{ color: colors[index % colors.length] }}>{char}</span>;
      });
      

    return (
        <div>
            <div className="helloContainer">
            <h3 className="helloUser">Hello {user?.name || 'guest'}, nice to see you {colorful} in!</h3>
            </div>
    <div className="flex items-center justify-center">
        <div className="w-1/2 text-left pl-10">
            <img className="pt-10 mx-auto" src="../../Images/peek_into_the_world.png" alt="Peek into the world of pixels" />
        </div>
        <div className="w-1/3 text-center">
            <img className="logo-loggedin size-72" src="../../Images/xploreLoggaPurpule.png" alt="Xplore Image Search" />
        </div>
            <div className="w-1/3 invisible">
        </div>
    </div>
        <div>
            <Search />
        </div>
    </div>

    )
}