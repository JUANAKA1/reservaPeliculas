import { allMovies, languages } from "../../utils/constants";
import MovieCard from "./MovieCard";

function MoviesList() {
  return (
    <div className="w-full md:w-3/4 p-4 ">
      <div className="flex flex-wrap gap-2 mb-4">
        {languages.map((lang, i) => (
          <span
            key={i}
            className="bg-white border border-gray-200 text-red py-1 px-3 rounded-3xl  text-sm cursor-pointer hover:bg-gray-200 "
          >
            {lang}
          </span>
        ))}
      </div>
      <div className="flex justify-between items-center bg-white px-6 py-6 rounded mb-6  ">
        <h3 className="font-semibold text-xl ">Muy pronto</h3>
        <a
          href="#"
          className="text-red-500 text-sm font-medium flex items-center"
        >
          Explore las ultimas pekiculas <span className="ml-1">→</span>
        </a>
      </div>
      <div className="flex flex-wrap gap-6">
        {allMovies.map((movie, i) => (
          <MovieCard key={i} movie={movie} />
        ))}
      </div>
    </div>
  );
}
export default MoviesList;
