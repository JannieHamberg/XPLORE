import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import React, { useState } from "react";

    interface IImage {
        link: string;
        title: string;
    }
    
   export const Search: React.FC = () => {
        const [searchInput, setSearchInput] = useState<string>('');
        const [searchResult, setSearchResult] = useState<IImage[]>([]);
        const [isLoading, setIsLoading] = useState<boolean>(false);
        const [error, setError] = useState<string | null>(null);
        const { isAuthenticated } = useAuth0();

        const handleSearch = async () => {
            if (!isAuthenticated) {
                alert('Please log in to explore the world of pixel galaxy!');
                return;
            }
            setIsLoading(true);
            setError(null);
            
            try {
                const response = await axios.get(`https://www.googleapis.com/customsearch/v1`, {
                    params: {
                        key: import.meta.env.VITE_GOOGLE_API_KEY,
                        cx: import.meta.env.VITE_GOOGLE_CX,
                        q: searchInput,
                        searchType: 'image',
                        num: 9,
                    },
                });
                console.log(response.data);
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
                onClick={handleSearch}
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
            <div className="w-3/4 justify-center grid grid-cols-3 gap-3 mx-auto">
            {searchResult.map((image, index) => (
                <div key={index} className="columns-3xs">
                <img
                    src={image.link}
                    alt={image.title}
                    className="w-full object-cover rounded-sm shadow-xl"
                />
                </div>
            ))}
        </div>
    </div>
    );
};
