import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React, { useState } from "react";
import { useFavorites } from "../Models/FavoritesContext";
import { IImage } from "../Models/IImage";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

    
   export const Search: React.FC = () => {
        const { isAuthenticated } = useAuth0();
        const [isLoading, setIsLoading] = useState<boolean>(false);
        const [searchInput, setSearchInput] = useState<string>('');
        const [spellingSuggestions, setSpellingSuggestions] = useState<string | null>(null);
        const [searchResult, setSearchResult] = useState<IImage[]>([]);
        const [error, setError] = useState<string | null>(null);
        const [searchTime, setSearchTime] = useState<number | null>(null);
        
        const { addFavorite } = useFavorites();


        const handleImageError = (errorIndex: number) => {
            setSearchResult(prevImages => prevImages.filter((_, i) => i !== errorIndex))
        };
      
        const handleSearch = async (input: string) => {
            if (!isAuthenticated) {
                alert('Please log in to explore the world of pixel galaxy!');
                return;
            }
            const startTimer = Date.now();
            setIsLoading(true);
            setError(null);
            console.log('searching for', input);
            try {
                const response = await axios.get(`https://www.googleapis.com/customsearch/v1`, {
                    params: {
                        key: import.meta.env.VITE_GOOGLE_API_KEY,
                        cx: import.meta.env.VITE_GOOGLE_CX,
                        q: input,
                        searchType: 'image',
                        num: 9,
                    },
                    
                }); 
                
                if (response.data.spelling && response.data.spelling.correctedQuery) {
                    setSpellingSuggestions(response.data.spelling.correctedQuery);
                }
                setSearchResult(response.data.items);

            } catch (error) {
                if (axios.isAxiosError(error)) {
                    console.log('Error response', error.response?.data);
                    setError(error.message);
                } else {
                    console.error('An error occurred', error);
                    setError('Whoops, something weird happened');
                }
            } finally {
                setIsLoading(false);
                const endTimer = Date.now();
                setSearchTime(endTimer - startTimer);
            }
        };
   
        
    return (
        <div className="bg-custom-purple pt-2 mt-10 min-h-[650px]">
            <div className="flex items-center justify-center mb-10 mt-10 px-4">
            <div className="flex justify-between items-center w-full max-w-lg">
            <input
                className="rounded-md border-2 flex-grow mr-4 "
                type="text"
                placeholder="Explore the pixel galaxy..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
                className="rounded-md border-2 w-1/5 bg-custom-purple text-white  font-sans text-lg hover:bg-purple-700 text-center p-px"
                onClick={() => handleSearch(searchInput)}
            >
                search
            </button>
            </div>
            </div>
            {isLoading && (
                <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
                </div>
            )}
            {error && <p>Error: {error}</p>}
            {spellingSuggestions && (
                <p className="text-center text-white my-2">
                    Did you mean: <button className="" onClick={() => {
                        setSearchInput(spellingSuggestions);
                        setSpellingSuggestions(null);
                        handleSearch(spellingSuggestions);
                    }}>{spellingSuggestions}</button>
                </p>
            )}
            <div className="w-full sm:w-3/4  justify-center grid   grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 p-4 max-w-[400px] md:max-w-[600px] place-items-center mx-auto">
            {searchResult.map((image, index: number) => (
                <div key={index} className="relative group">
                <img
                    src={image.link}
                    alt={image.title}
                    onError={() => handleImageError(index)} 
                    className=" h-48 w-96 object-cover rounded-lg shadow-xl hover:opacity-75"
                />
                <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300"></div> 
                <button className="text-white font-medium absolute bottom-0 left-0 p-2 rounded-m hover:text-purple-700 hover:text-lg" onClick={() => addFavorite(image)}>
                <FontAwesomeIcon icon={faBookmark} />
                </button>
                </div>
            ))}
        </div>
            {searchTime &&
                <p className="text-center text-white pt-2 pb-8 my-10">Your cosmic pixel quest flashed by in a mere {searchTime} milliseconds!</p>}
                    
    </div>
    );
};
