import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const Weathermap = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        // Fetch weather data from an API (replace with your API key)
        const fetchWeatherData = async () => {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/find?lat=20&lon=78&cnt=10&units=metric&appid=YOUR_API_KEY`
            );
            const data = await response.json();
            setLocations(data.list || []);
        };

        fetchWeatherData(); 
    }, []);

    return (
        <div>
            <h1>Weather Map</h1>
            <MapContainer center={[20, 78]} zoom={5} style={{ height: '500px', width: '100%' }}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                {locations.map((location) => (
                    <Marker key={location.id} position={[location.coord.lat, location.coord.lon]}>
                        <Popup>
                            <strong>{location.name}</strong>
                            <br />
                            Temp: {location.main.temp}°C
                        </Popup>
                    </Marker>
                ))}
            </MapContainer>
        </div>
    );
};

export default Weathermap;