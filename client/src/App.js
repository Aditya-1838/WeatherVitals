import "./App.css";
import { useState, useMemo } from "react";
import { Box, ThemeProvider, CssBaseline, useMediaQuery } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import useFetch from "./components/hooks/useFetch";
import SearchBar from "./components/SearchBar";
import CurrentWeatherContainer from "./components/CurrentWeatherContainer";
import Navbar from "./components/Navbar";
import WeatherMap from "./components/WeatherMap";

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const [darkMode, setDarkMode] = useState(prefersDarkMode);

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
        },
      }),
    [darkMode]
  );

  const [location, setLocation] = useState("");
  const [data, fetchData] = useFetch();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData(location);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar darkMode={darkMode} onToggleTheme={() => setDarkMode((prev) => !prev)} />
      <main>
        <Box sx={{ display: "flex", justifyContent: "center", my: 3 }}>
          <SearchBar
            value={location}
            handleChange={(e) => setLocation(e.target.value)}
            handleSubmit={handleSubmit}
          />
        </Box>

        {/* Responsive layout for weather info and map */}
        {data.main && (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              width: "100vw",
              minHeight: "100vh",
              boxSizing: "border-box",
            }}
          >
            {/* Weather Info (left/top) */}
            <Box
              sx={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "flex-start",
                width: "100%",
              }}
            >
              <CurrentWeatherContainer weather={data} />
            </Box>
            {/* Map (right/bottom) */}
            <Box
              sx={{
                flex: 2,
                width: "100%",
                minHeight: { xs: 250, md: "100vh" },
              }}
            >
              <WeatherMap
                lat={data.coord.lat}
                lon={data.coord.lon}
                city={data.name}
                temp={data.main.temp}
              />
            </Box>
          </Box>
        )}
      </main>
    </ThemeProvider>
  );
}

export default App;
// No additional code is needed at the placeholder. The provided code is complete and functional.`