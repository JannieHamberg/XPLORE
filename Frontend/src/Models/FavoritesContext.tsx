import { useContext, useState } from "react";
import { createContext } from "react";
import { IImage } from "./IImage";



interface FavoritesContextType {
    favorites: IImage[];
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
    const [favorites, setFavorites] = useState<IImage[]>([]);
    const [showToast, setShowToast] = useState<boolean>(false);

    const addFavorite = (image: IImage) => {
        setFavorites((prevFavorites) => [...prevFavorites, image]);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 6000);
    };

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