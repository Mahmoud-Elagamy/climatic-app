import type { WeatherData } from "@/types/weatherData";
import fetchWeatherData from "@/utils/fetchWeatherData";
import { ThermometerSnowflake } from "lucide-react";
import { Progress } from "./ui/progress";
import getAirQualityDescription from "@/utils/getAirQualityDescription";

const AirPollution = async () => {
  const weatherData: WeatherData | null = await fetchWeatherData("madrid");

  if (!weatherData) {
    return;
  }

  // destructure data from weatherData object.
  const {
    current: { air_quality },
  } = weatherData;

  // convert from 0-1 to 0-100.
  const airQualityIndex = (air_quality.pm2_5 / 100) * 100;

  // get air quality description.
  const airQualityDescription = getAirQualityDescription(airQualityIndex);

  return (
    <section className="section-style flex-grow">
      <h2 className="title">
        <ThermometerSnowflake size={16} />
        Air Pollution
      </h2>
      <Progress value={airQualityIndex} max={100} className="progress-bar" />
      <p>{airQualityDescription}</p>
    </section>
  );
};
export default AirPollution;
