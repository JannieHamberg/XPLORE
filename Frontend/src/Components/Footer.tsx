import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { LogoutButton } from "./LogOut"
import { LoginButton } from "./Login";
import { useAuth0 } from "@auth0/auth0-react";

export const Footer = () => { 
    const { isAuthenticated } = useAuth0();

    return (
        <div className="flex items-center justify-center mt-40 bg-custom-purple ">
            <div className=" w-1/3 pl-20 text-white text-center pt-20">
            <FontAwesomeIcon icon={faFacebook} size="2xl" className="px-4 pt-4"/>
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
            <FontAwesomeIcon icon={faSquareXTwitter} size="2xl" className="px-4"/>
            <p className="pt-8">© copyright all rights reserved 2024</p>
            </div>
            <div className=" w-1/3 text-center text-white">
                <ul className="text-lg leading-loose">
                    <li>
                        <a href="#">Contact</a>
                    </li>
                    <li>
                        <a href="#">Contributors</a>
                    </li>
                    <li>
                        <a href="#">License</a>
                    </li>
                    <li className="text-purple-600">
                        {isAuthenticated ? <LogoutButton /> : <LoginButton />   }
                    </li>
                </ul>
                
                </div>
            <div className=" w-1/3 text-right pr-20">
                <img src="../../Images/xploreLoggaPurpule.png" alt="logo" />
            </div>
        </div>
    )
}