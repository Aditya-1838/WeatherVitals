import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import OpacityIcon from '@mui/icons-material/Opacity';
import AirIcon from '@mui/icons-material/Air';
import ThermostatIcon from '@mui/icons-material/Thermostat';

const WeatherCard = ({ weather }) => {
  // Example weather prop shape:
  // {
  //   location: "New York",
  //   temperature: 22,
  //   humidity: 60,
  //   windSpeed: 15,
  //   description: "Sunny"
  // }

  return (
    <Card sx={{ maxWidth: 300, margin:  '1rem auto', padding: 2 }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {weather.location}
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <WbSunnyIcon sx={{ mr: 1 }} />
          <Typography variant="h6">{weather.description}</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <ThermostatIcon sx={{ mr: 1 }} />
          <Typography>{weather.temperature}°C</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <OpacityIcon sx={{ mr: 1 }} />
          <Typography>Humidity: {weather.humidity}%</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <AirIcon sx={{ mr: 1 }} />
          <Typography>Wind Speed: {weather.windSpeed} km/h</Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
