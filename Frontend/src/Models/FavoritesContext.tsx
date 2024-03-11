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

    const addFavorite = (image: IImage) => {
        setFavorites((prevFavorites) => [...prevFavorites, image]);
        console.log('added', image);
    };

    return (
        
        <FavoritesContext.Provider value={{ favorites, addFavorite }}>
            {children}
        </FavoritesContext.Provider>
    )
}

export const useFavorites = () => useContext(FavoritesContext);