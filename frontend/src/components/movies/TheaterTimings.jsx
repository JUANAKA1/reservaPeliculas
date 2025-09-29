import dayjs from "dayjs";
import { useState } from "react";

function TheaterTimings() {
  const today = dayjs();
  const [selectedDate, setSelectedDate] = useState(today);

  const nextSevenDays = Array.from({ length: 7 }).map((_, index) =>
    today.add(index, "day")
  );

  return (
    <>
      <hr className="my-2 border-gray-200" />
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
        <span className="font-bold">{selectedDate.format("DD MMMM YYYY")}</span>
      </p>
    </>
  );
}
export default TheaterTimings;
