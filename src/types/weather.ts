export interface WeatherApiResponse {
  city: CityInfo;
  cnt: number;
  cod: string;
  list: ForecastEntry[];
}

interface CityInfo {
  id: number;
  name: string;
  coord: {
    lat: number;
    lon: number;
  };
  country: string;
  population: number;
  timezone: number;
  sunrise: number;
  sunset: number;
}

export interface ForecastEntry {
  dt: number;
  main: TempDetails;
  weather: Weather[];
  clouds: {
    all: number;
  };
  wind: {
    speed: number;
    deg: number;
    gust: number;
  };
  visibility: number;
  pop: number;
  sys: {
    pod: string;
  };
  dt_txt: string;
}

export interface DailyForecast {
  date: string;
  minTemp: number;
  maxTemp: number;
  condition: Weather | null;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

interface TempDetails {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  grnd_level: number;
  humidity: number;
  temp_kf: number;
}