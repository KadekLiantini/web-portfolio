import React from "react";
import { useTheme } from "../context/ThemeContext";

const getIcon = (theme) => {
  if (theme === "clear") return "☀️";
  if (theme === "cloudy") return "☁️";
  if (theme === "rainy") return "🌧️";
  if (theme === "snowy") return "❄️";
  return "❓";
};

const WeatherIndicator = () => {
  const { theme, weatherData, currentTheme } = useTheme();

  const temp = weatherData ? Math.round(weatherData.main.temp) : "--";
  const condition = weatherData
    ? weatherData.weather[0].description
    : "Memuat...";

  return (
    <div
      className={`flex items-center space-x-2 p-2 rounded-full text-sm font-medium ${currentTheme.primary} text-white cursor-default`}>
      <span>{getIcon(theme)}</span>
      <span className="hidden sm:inline">{temp}°C</span>
      <span className="hidden lg:inline capitalize">{condition}</span>
    </div>
  );
};

export default WeatherIndicator;
