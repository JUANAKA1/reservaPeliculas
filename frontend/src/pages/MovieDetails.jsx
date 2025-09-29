import m4 from "../assets/m4.avif";
import TheaterTimings from "../components/movies/TheaterTimings";
import Recommended from "../components/Recommended";

function MovieDetails() {
  const movie = {
    id: 4,
    title: "F1: The Movie",
    genre: ["Action", "Drama", "Sports"],
    rating: 9.5,
    votes: "6.8K",
    img: m4,
    languages: ["English, Hindi, Tamil, Telugu"],
    format: ["2D", "3D", "IMAX 3D"],
    certification: "UA16+",
    duration: "2h 28m",
    releaseDate: "15 Sep, 2023",
    description:
      "F1: The Movie is a thrilling action-packed drama that takes you on a high-speed journey through the world of Formula 1 racing. Follow the lives of top drivers as they navigate the challenges of the sport, both on and off the track. With breathtaking visuals, intense rivalries, and heart-pounding moments, this film captures the essence of speed, competition, and the pursuit of greatness.",
  };

  return (
    <>
      <div>
        {/* Header con background */}
        <div
          className="relative text-white font-sans px-4 py-10"
          style={{
            backgroundImage: `url(${movie.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute inset-0 bg-black opacity-70"></div>

          <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center lg:items-start gap-10">
            {/* Poster */}
            <div>
              <img
                src={movie.img}
                alt={movie.title}
                className="rounded-xl w-52 shadow-xl"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col justify-start flex-1">
              <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>

              <div className="flex items-center gap-4 mb-3">
                <div className="bg-[#3a3a3a] px-4 py-2 rounded-md flex items-center gap-2 text-sm">
                  <span className="text-pink-500 font-bold">
                    ★ {movie.rating}
                  </span>
                  <span className="text-gray-300">{movie.votes} Votos</span>
                  <button className="cursor-pointer bg-[#2f2f2f] ml-6 px-4 py-2 rounded-md hover:bg-[#4a4a4a]">
                    Calificar
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-3 text-sm mb-4">
                <span className="bg-[#3a3a3a] px-3 py-1 rounded">
                  {movie.format.join(", ")}
                </span>
                <span className="bg-[#3a3a3a] px-3 py-1 rounded">
                  {movie.languages.join(", ")}
                </span>
              </div>

              <p className="text-sm text-gray-300 mb-4">
                {movie.duration} • {movie.genre.join(", ")} •{" "}
                {movie.certification} • {movie.releaseDate}
              </p>

              <div>
                <h2 className="text-xl font-bold mb-2">
                  Acerca de la película
                </h2>
                <p className="text-sm text-gray-300 leading-relaxed mb-4">
                  {movie.description}
                </p>
              </div>

              {/* Botón compartir */}
              <div className="absolute top-0 right-0">
                <button className="bg-[#3a3a3a] px-4 py-2 rounded text-sm flex items-center gap-2 cursor-pointer">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 30 30"
                    fill="currentColor"
                    className="w-6 h-6 text-gray-300"
                  >
                    <path d="M23 3a4 4 0 0 0-4 4c0 .29.04.57.09.84L10.01 12.38A4 4 0 0 0 7 11a4 4 0 1 0 3.01 6.62l9.08 4.54c-.06.28-.09.56-.09.84a4 4 0 1 0 4-4c-1.05 0-2 .42-2.68 1.1l-9.08-4.54c.06-.28.09-.56.09-.84s-.04-.57-.09-.83l9.08-4.55A4 4 0 1 0 23 3z" />
                  </svg>
                  Compartir
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto">
          {/* Recomendados */}
          <Recommended />

          {/* Leyenda de disponibilidad */}
          <div className="flex max-w-7xl mx-auto bg-gray-300 items-center gap-6 px-4 py-2">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 bg-black rounded-full inline-block"></span>
              <small className="font-semibold text-gray-600">Disponible</small>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 bg-yellow-400 rounded-full inline-block"></span>
              <small className="font-semibold text-gray-600">
                Llenado Rápido
              </small>
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 bg-red-500 rounded-full inline-block"></span>
              <small className="font-semibold text-gray-600">Casi Lleno</small>
            </span>
          </div>

          {/* Horarios */}
          <TheaterTimings />
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
