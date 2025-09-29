import dayjs from "dayjs";
import { useState } from "react";
import { theatres } from "../../utils/constants";

function TheaterTimings() {
  const today = dayjs();
  const [selectedDate, setSelectedDate] = useState(today);

  const nextSevenDays = Array.from({ length: 7 }).map((_, index) =>
    today.add(index, "day")
  );

  return (
    <>
      <hr className="my-2 border-gray-200" />
      <div className="pb-6">
        <div className="flex items-center gap-2 mb-4 overflow-x-auto py-4 px-2">
          {nextSevenDays.map((date, i) => {
            const isSelected = selectedDate.isSame(date, "day");

            return (
              <button
                key={i}
                onClick={() => setSelectedDate(date)}
                className={`flex flex-col items-center px-3 py-2 rounded-lg min-w-[60px] border transition-all duration-200 ${
                  isSelected
                    ? "bg-black text-white font-semibold border-black"
                    : "bg-white text-black hover:bg-gray-100 border-gray-200"
                }`}
              >
                <span className="text-sm font-bold">{date.format("D")}</span>
                <span className="text-xs uppercase">{date.format("ddd")}</span>
                <span className="text-[10px]">{date.format("MMM")}</span>
              </button>
            );
          })}
        </div>

        {/* Mostrar la fecha seleccionada */}
        <p className="text-center text-sm text-gray-600">
          Seleccionaste:{" "}
          <span className="font-bold">
            {selectedDate.format("DD MMMM YYYY")}
          </span>
        </p>
      </div>
      <div className="space-y-8 px-4 mb-10 ">
        {theatres.map((theatre, i) => (
          <div key={i}>
            <div className="flex items-start gap-3 mb-2">
              <img
                src={theatre.img}
                alt={theatre.name}
                className="size-8 object-contain"
              />
              <div>
                <p className="font-semibold">{theatre.name}</p>
                <p className="text-sm text-gray-500">Permite la cancelación</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 ml-11">
              {theatre.timings.map((slot, i) => (
                <button
                  key={i}
                  className="border border-gray-300 rounded-lg cursor-pointer text-sm hover:bg-gray-100 px-12 py-2 flex flex-col items-center justify-center "
                >
                  <span className="leading-light font-semibold ">
                    {slot.time}
                  </span>
                  <span className=" font-black text-[10px] text-gray-500">
                    {slot.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default TheaterTimings;
