import React, { createContext, useState, useEffect, useContext } from "react";

const ThemeContext = createContext();

const CITY = "Denpasar";

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("clear"); // Default: clear
  const [weatherData, setWeatherData] = useState(null);

  const determineTheme = (condition) => {
    const lowerCaseCondition = condition.toLowerCase();

    if (
      lowerCaseCondition.includes("clear") ||
      lowerCaseCondition.includes("sun")
    ) {
      return "clear";
    } else if (
      lowerCaseCondition.includes("rain") ||
      lowerCaseCondition.includes("drizzle")
    ) {
      return "rainy";
    } else if (
      lowerCaseCondition.includes("cloud") ||
      lowerCaseCondition.includes("mist") ||
      lowerCaseCondition.includes("haze")
    ) {
      return "cloudy";
    } else if (lowerCaseCondition.includes("snow")) {
      return "snowy";
    } else {
      return "clear";
    }
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${
            import.meta.env.VITE_APP_ID
          }&units=metric`
        );
        if (!response.ok) throw new Error("Failed to fetch weather data");

        const data = await response.json();
        const condition = data.weather[0].main;

        setWeatherData(data);
        setTheme(determineTheme(condition));
      } catch (error) {
        console.error("Error fetching weather:", error);
        setTheme("clear");
      }
    };

    fetchWeather();
    const intervalId = setInterval(fetchWeather, 600000);

    return () => clearInterval(intervalId);
  }, []);

  const themeClasses = {
    clear: {
      bg: "bg-yellow-50",
      text: "text-gray-900",
      primary: "bg-orange-500 hover:bg-orange-600",
      card: "bg-white shadow-xl",
      border: "border-orange-500",
    },
    cloudy: {
      bg: "bg-gray-200",
      text: "text-gray-800",
      primary: "bg-blue-400 hover:bg-blue-500",
      card: "bg-gray-100 shadow-lg",
      border: "border-blue-400",
    },
    rainy: {
      bg: "bg-gray-900",
      text: "text-gray-100", // Teks Putih untuk Dark Mode
      primary: "bg-purple-600 hover:bg-purple-700",
      card: "bg-gray-800 shadow-2xl",
      border: "border-purple-600",
    },
    snowy: {
      bg: "bg-blue-100",
      text: "text-gray-700",
      primary: "bg-blue-300 hover:bg-blue-400",
      card: "bg-white shadow-lg",
      border: "border-blue-300",
    },
  };

  const currentTheme = themeClasses[theme] || themeClasses["clear"];

  return (
    <ThemeContext.Provider value={{ theme, weatherData, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
