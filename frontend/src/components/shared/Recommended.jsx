import { movies } from "../../utils/constants";

function Recommended() {
  return (
    <div className="w-full py-6 bg-white">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold ">Peliculas Recomendadas</h2>
          <span className="text-md text-red-500 cursor-pointer hover:underline font-medium  ">
            Ver Todo
          </span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5  gap-4 ">
          {movies.map((movie) => (
            <div key={movie.id} className="rounded overflow-hidden ">
              <div className="relative">
                <img
                  className="w-full h-[300px] object-cover rounded"
                  src={movie.img}
                  alt={movie.title}
                />
              </div>
              <div className="bg-black text-white text-sm px-2 py-1 flex items-center justify-between ">
                <span>⭐ {movie.rating}/10</span>
                <span>{movie.votes} Votos</span>
              </div>
              <div className="px-2 py-1">
                <h3 className="font-semibold text-lg">{movie.title}</h3>
                <p className="text-[1rem] text-gray-500">
                  {movie.genre.replaceAll("/", "|")}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default Recommended;
