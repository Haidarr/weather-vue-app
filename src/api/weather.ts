import axios from 'axios';
import type { WeatherApiResponse } from '@/types/weather';

const API_URL = import.meta.env.VITE_WEATHER_BASE_URL;
const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;

export async function fetchWeather(city: string): Promise<WeatherApiResponse> {
  const MAX_RETRIES = 3;
  let attempt = 0;

  while (attempt < MAX_RETRIES) {
    try {
      const response = await axios.get<WeatherApiResponse>(`${API_URL}/forecast`, {
        params: { q: city, units: 'metric', appid: API_KEY },
      });
      return response.data;
    } catch (error) {
      attempt++;
      if (attempt >= MAX_RETRIES) {
        throw new Error('Failed to fetch weather data after multiple attempts.');
      }
      await new Promise((resolve) => setTimeout(resolve, 500 * attempt)); // Exponential backoff
    }
  }

  throw new Error('Unexpected error occurred');
}