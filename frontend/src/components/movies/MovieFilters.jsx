import { languages } from "../../utils/constants";

function MovieFilters() {
  return (
    <div className="w-full md:w-1/4 space-y-6">
      <h2 className="text-2xl font-semibold ">Filtros</h2>
      <div className="bg-white p-4 rounded-md ">
        <div className="flex justify-between items-center mb-2  ">
          <span className="font-medium ">Lenguaje</span>
          <button className="text-red ">Limpiar</button>
        </div>
        <div className="flex flex-wrap gap-2">
          {languages.map((lang) => (
            <span className="border border-gray-200 text-red px-3 py-1 text-sm rounded hover:bg-gray-200 cursor-pointer ">
              {lang}
            </span>
          ))}
        </div>
      </div>
      <div className="bg-white -mt-3 p-4 rounded ">
        <div className=" flex justify-between items-center mb-2">
          <span className="font-medium">Generos</span>
          <button className="text-red text-sm ">Limpiar</button>
        </div>
      </div>
      <div className="bg-white -mt-3 p-4 rounded ">
        <div className=" flex justify-between items-center mb-2">
          <span className="font-medium">Formato</span>
          <button className="text-red text-sm ">Limpiar</button>
        </div>
      </div>
      <button className="w-full border border-red text-red py-1 rounded hover:bg-red hover:text-white transition ">
        Navegar
      </button>
    </div>
  );
}
export default MovieFilters;
