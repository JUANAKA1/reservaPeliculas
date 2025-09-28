import { useEffect, useState } from "react";
import { LocationContext } from "./LocationContext";

function LocationProvider({ children }) {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLocationData = async (lat, lon) => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
        );
        const data = await response.json();
        // console.log(data);

        const userLocation =
          data?.address?.town ||
          "Ubicación desconocida";

        setLocation(userLocation);
      } catch (err) {
        setError("Error al obtener datos de ubicación");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        ({ coords }) => {
          fetchLocationData(coords.latitude, coords.longitude);
        },
        () => {
          setError("No se pudo obtener la ubicación");
          setLoading(false);
        }
      );
    } else {
      setError("Geolocalización no soportada en este navegador");
      setLoading(false);
    }
  }, []);

  return (
    <LocationContext.Provider value={{ location, loading, error }}>
      {children}
    </LocationContext.Provider>
  );
}

export default LocationProvider;
