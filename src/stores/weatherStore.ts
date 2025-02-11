import { defineStore } from 'pinia';
import { fetchWeather } from '@/api/weather';
import type { WeatherApiResponse } from '@/types/weather';
import router from '@/router';

interface WeatherState {
  weatherData: Record<string, WeatherApiResponse>;
  loading: boolean;
  error: string | null;
  mainCities: string[];
  selectedCity: string;
  lastUpdated?: string;
}

export const useWeatherStore = defineStore('weather', {
  state: (): WeatherState => ({
    weatherData: {},
    loading: false,
    error: null,
    selectedCity: 'Los Angeles',
    mainCities: ['Rio de Janeiro', 'Beijing', 'Los Angeles'],
    lastUpdated: new Date().toLocaleString(),

  }),
  actions: {
    async loadWeatherData(city: string) {
      if (this.weatherData[city]) return;
      this.loading = true;
      this.error = null;
      try {
        this.weatherData[city] = await fetchWeather(city);
        this.lastUpdated = new Date().toLocaleString();
      } catch (error) {
        this.error = 'Failed to load weather data';
      } finally {
        this.loading = false;
      }
    },

    async onChangeCity(city: string) {
      if (!city) return;
      await this.loadWeatherData(city);
      router.replace({ path: `/${city}` });
    },

    refreshWeatherData() {
      this.weatherData = {};
      this.loadWeatherData(this.selectedCity);
    },

    addCity(city: string) {
      if (this.mainCities.includes(city)) return;
      this.mainCities.push(city);
    }
  },
});
