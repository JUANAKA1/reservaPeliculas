import { useContext } from "react";
import mainLogo from "../../assets/main-icon.png";
import { FaSearch } from "react-icons/fa";
import map from "../../assets/pin.gif";
import { LocationContext } from "../../context/LocationContext/LocationContext.jsx";

function Header() {
  const { location, loading, error } = useContext(LocationContext);
  return (
    <div className="w-full text-sm bg-white ">
      <div className="px-4 md:px-8">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-3 ">
          <div className="flex items-center space-x-4">
            <img
              src={mainLogo}
              alt="logo"
              className="h-8 object-contain cursor-pointer "
            />
            <div className="relative  ">
              <input
                type="text"
                placeholder="Busca peliculas, eventos, deportes y actividades "
                className="border border-gray-300 rounded px-4 py-1.5 w-[400px] text-sm outline-none "
              />
              <FaSearch className="absolute right-2 top-2.5 text-gray-500 " />
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-sm font-medium mt-2 cursor-pointer">
              {loading && <img src={map} alt="loading..." className="size-6" />}
              {error && <p>{error}</p>}
              {location && <p>{location} &nbsp;🔽</p>}
            </div>
            <button className="bg-[#f84464] cursor-pointer text-white px-4 py-1.5 rounded text-sm ">
              Iniciar sesion
            </button>
          </div>
        </div>
      </div>
      <div className="bg-[#f2f2f2] px-4 md:px-8 ">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center py-2 text-gray-700  ">
          <div className="flex items-center space-x-6 font-medium">
            <span className="cursor-pointer hover:text-red-500 ">
              Peliculas
            </span>
            <span className="cursor-pointer hover:text-red-500 ">
              Trasmiciones
            </span>
            <span className="cursor-pointer hover:text-red-500 ">Eventos</span>
            <span className="cursor-pointer hover:text-red-500 ">Juegos</span>
            <span className="cursor-pointer hover:text-red-500 ">Deportes</span>
            <span className="cursor-pointer hover:text-red-500 ">
              Actividades
            </span>
          </div>
          <div className="flex items-center space-x-6 text-sm ">
            <span className="cursor-pointer hover:underline ">
              Lista de espectáculos
            </span>
            <span className="cursor-pointer hover:underline ">
              Corporaciones
            </span>
            <span className="cursor-pointer hover:underline ">Ofertas</span>
            <span className="cursor-pointer hover:underline ">
              Cajas de regalo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
