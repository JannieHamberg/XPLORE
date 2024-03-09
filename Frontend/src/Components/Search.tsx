import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React, { useState } from "react";

    interface IImage {
        link: string;
        title: string;
        spelling: {
            correctedQuery: string;
        }
    }
    
   export const Search: React.FC = () => {
        const { isAuthenticated } = useAuth0();
        const [isLoading, setIsLoading] = useState<boolean>(false);
        const [searchInput, setSearchInput] = useState<string>('');
        const [spellingSuggestions, setSpellingSuggestions] = useState<string | null>(null);
        const [searchResult, setSearchResult] = useState<IImage[]>([]);
        const [error, setError] = useState<string | null>(null);
        const [searchTime, setSearchTime] = useState<number | null>(null);

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
        <div>
            <div className="flex items-center justify-center ml-32 mb-10">
            <input
                className="rounded-md border-2 w-96"
                type="text"
                placeholder="Explore the pixel galaxy..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
            />
            <button
                className="rounded-md border-2 w-24 bg-custom-purple text-white p-1 font-sans text-sm"
                onClick={() => handleSearch(searchInput)}
            >
                search
            </button>
            </div>
            {isLoading && (
                <div className="flex justify-center items-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-purple-500"></div>
                </div>
            )}
            {error && <p>Error: {error}</p>}
            {spellingSuggestions && (
                <p className="text-center my-2">
                    Did you mean: <button className="" onClick={() => {
                        setSearchInput(spellingSuggestions);
                        setSpellingSuggestions(null);
                        handleSearch(spellingSuggestions);
                    }}>{spellingSuggestions}</button>
                </p>
            )}
            <div className="w-3/4 justify-center grid grid-cols-3 gap-3 mx-auto">
            {searchResult.map((image, index) => (
                <div key={index} className="columns-3xs">
                <img
                    src={image.link}
                    alt={image.title}
                    onError={() => handleImageError(index)} 
                    className="w-full object-cover rounded-sm shadow-xl"
                />
                </div>
            ))}
        </div>
            {searchTime &&
                <p className="text-center my-10">Your cosmic pixel quest flashed by in a mere {searchTime} milliseconds!</p>}
    </div>
    );
};
