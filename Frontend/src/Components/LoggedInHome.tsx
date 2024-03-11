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
            <div className="helloContainer text-center ">
            <h3 className="helloUser text-sm sm:text-2xl mx-auto">Hello {user?.name || 'guest'}, nice to see you {colorful} in!</h3>
            </div>
    <div className="flex items-center justify-center flex-wrap sm:flex-nowrap lg:justify-center">
        <div className="hidden lg:block lg:flex-shrink-0 lg:w-1/4 xl:w-1/3 px-4 text-left">
            <img className="pt-10 mx-auto" src="../../Images/peek_into_the_world.png" alt="Peek into the world of pixels" />
        </div>
        <div className="w-full px-4 sm:w-1/3 lg:flex-grow text-center">
            <img className="logo-loggedin mx-auto w-1/2 sm:w-3/4 lg:w-auto h-auto object-contain rounded-3xl" src="../../Images/xploreLoggaPurpule.png" alt="Xplore Image Search" />
        </div>
            <div className="w-full sm:w-1/3 px-4 text-center sm:hidden xl:flex">
        </div>
    </div>
        <div>
            <Search />
        </div>
    </div>

    )
}