import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebook, faInstagram, faSquareXTwitter } from '@fortawesome/free-brands-svg-icons';
import { LogoutButton } from "./LogOut"

export const Footer = () => { 
    return (
        <div className="flex items-center justify-center mt-40 bg-custom-purple ">
            <div className=" w-1/3 pl-20 text-white text-center">
            <FontAwesomeIcon icon={faFacebook} size="2xl" className="px-4"/>
            <FontAwesomeIcon icon={faInstagram} size="2xl" />
            <FontAwesomeIcon icon={faSquareXTwitter} size="2xl" className="px-4"/>
            </div>
            <div className=" w-1/3 text-center text-white">
                <ul>
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
                        <LogoutButton />
                    </li>
                </ul>
                
                </div>
            <div className=" w-1/3 text-right pr-20">
                <img src="../../Images/xploreLoggaPurpule.png" alt="logo" />
            </div>
        </div>
    )
}