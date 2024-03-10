import { useFavorites } from "../Models/FavoritesContext";

export const Library = () => {
  const { favorites } = useFavorites();
  return (
    <div>
      <h1>Library</h1>
      <div className="w-3/4 justify-center grid grid-cols-3 gap-3 mx-auto">
      {favorites.map((fav, index: number) => (
        <div key={index} className="columns-3xs">
          <img 
            src={fav.link} 
            alt={fav.title} 
            className="w-full object-cover rounded-sm shadow-xl" />
        </div>
        
      ))}
      </div>
    </div>
  );
};
