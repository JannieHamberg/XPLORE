import { useAuth0 } from "@auth0/auth0-react";
import { useFavorites } from "../Models/FavoritesContext";
import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimatedCat from "./AnimatedCat";


export const Library = () => {
  const { favorites } = useFavorites();
  const { user } = useAuth0();
  const colors = ["#ffcf05", "#662eb5", "#0cc0df", "#34a612", "#df4e80", "#ffcf05", "#662eb5"];
  const colorful = user?.name?.split("").map((char, index) => {
    return <span key={index} style={{ color: colors[index % colors.length] }}>{char}</span>;
  });

  return (
    <div>
      <div className="helloContainer text-center flex flex-col items-center justify-center sm:flex-row sm:flex-wrap ">
        <div className=" helloDiv w-full lg:w-6/12 flex justify-center items-center">
        <h3 className="helloUser  flex-1 w-100 text-2xl sm:text-2xl md:text-3xl lg:text-4xl mx-auto ">
          Step into <br /> your sanctuary <br />  of  snapshots, <br /> {colorful}!
        </h3>
        </div>
        <AnimatedCat />
      </div>
      <div className="bg-custom-purple pt-20 pb-20 min-h-[650px] ">
        <div className="w-full sm:w-3/4  justify-center grid   grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 p-4 max-w-[400px] md:max-w-[1000px] place-items-center mx-auto">
          {favorites &&
            favorites.map((fav, index: number) => (
              <div key={index} className="relative group">
                <img
                  src={fav}
                  alt={fav}
                  className=" h-48 w-96 object-cover rounded-lg shadow-xl hover:opacity-75"
                />

                <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-60 transition-opacity duration-300"></div>
                <button className="text-white font-medium absolute bottom-0 left-0 p-2 rounded-m hover:text-purple-700 hover:text-lg">
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
