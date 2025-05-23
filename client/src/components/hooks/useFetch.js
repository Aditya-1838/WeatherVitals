import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // location can be a string (city) or an object ({ lat, lon })
  const fetchData = async (location) => {
    setLoading(true);
    setError(null);

    let url = "";
    if (typeof location === "string") {
      url = `http://localhost:8000/${location}`;
    } else if (location && typeof location === "object" && "lat" in location && "lon" in location) {
      url = `http://localhost:8000/?lat=${location.lat}&lon=${location.lon}`;
    } else {
      setError("Invalid location");
      setLoading(false);
      return;
    }

    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error("Network response was not ok");
      const json = await res.json();
      setData(json);
    } catch (err) {
      setError(err.message || "Something went wrong");
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return [data, fetchData, loading, error];
};

export default useFetch;
