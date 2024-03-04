import { Search } from "./Search"

export const LoggedInHome = () => {

    return (
        <div>
    <div className="flex items-center justify-center">
        <div className="w-1/2 text-left pl-10">
            <img className="pt-10 mx-auto" src="../../Images/peek_into_the_world.png" alt="Peek into the world of pixels" />
        </div>
        <div className="w-1/3 text-center">
            <img className="rounded-lg size-72" src="../../Images/xploreLoggaPurpule.png" alt="Xplore Image Search" />
        </div>
            <div className="w-1/3 invisible">
        </div>
    </div>
        <div className="flex items-center justify-center ml-32">
            <Search />
        </div>
    </div>

    )
}