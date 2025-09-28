import { events } from "../utils/constants";

function LiveEvents() {
  return (
    <div className="max-w-screen-xl mx-auto px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6 ">
        Lo mejor de los eventos en vivo
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5  gap-4 ">
        {
          events.map(event=>(
            <div className="rounded-lg overflow-hidden relative group shadow-sm cursor-pointer" key={event.id}>
              <img src={event.img} alt={event.title} className="
             w-full h-69 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105 "/>
            </div>
          ))
        }
      </div>
    </div>
  );
}
export default LiveEvents;
