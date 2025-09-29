function Recommended() {
const formats = [
  "2D",
  "3D",
  "IMAX 3D",
  "Accesible en silla de ruedas",
  "Asientos premium",
  "Reclinables",
  "IMAX",
  "PVR PXL",
  "4DX",
  "Láser",
  "Dolby Atmos",
];


  return (
    <div className="flex flex-wrap gap-3 py-4">
      {formats.map((format, i) => (
        <button
          key={i}
          className="px-4 py-2 rounded-full border border-gray-300 text-sm font-medium hover:bg-black hover:text-white transition"
        >
          {format}
        </button>
      ))}
    </div>
  );
}

export default Recommended;
