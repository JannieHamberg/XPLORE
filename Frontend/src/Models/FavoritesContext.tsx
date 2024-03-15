import { useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { IImage } from "./IImage";
import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";

interface FavoritesContextType {
    favorites: string[];
    addFavorite: (image: IImage) => void;
}

export const FavoritesContext = createContext<FavoritesContextType>({
    favorites: [],
    addFavorite: () => {}
})

interface FavoritesProviderProps {
    children: React.ReactNode;

}

export const FavoritesProvider: React.FC<FavoritesProviderProps> = ({ children }) => {
    const [favorites, setFavorites] = useState<string[]>([]);
    const [showToast, setShowToast] = useState<boolean>(false);
    const { user } = useAuth0();

    const addFavorite = async (image: IImage) => {
        if (user?.sub) {
          try {
            const response = await axios.post('http://localhost:3000/api/images/save', {
              userId: user.sub,
              favorites: [image.link], 
            });
            setShowToast(true);
            setTimeout(() => setShowToast(false), 6000);
            console.log(response.data.message);
          } catch (error) {
            console.error('Error saving favorite image', error);
          }
        }
      };
      
      useEffect(() => {
        if (user?.sub) {
          axios.get(`http://localhost:3000/api/images/getfavorites/${user.sub}`)
            .then(response => setFavorites(response.data))
            .catch(error => console.log(error));
        }
      }, [user?.sub]);
      

    return (
        
        <FavoritesContext.Provider value={{ favorites, addFavorite }}>
            {showToast && (
                <div className="success-toast toast toast-middle">
                    <div className="alert">
                        <div>
                            <span>Saved in faves! You’ve got great taste!</span>
                        </div>
                    </div>
                </div>
            )}
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavorites = () => useContext(FavoritesContext);