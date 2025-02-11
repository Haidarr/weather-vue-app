import type { ForecastEntry, DailyForecast, Weather } from "@/types/weather";

export function processWeatherData(forecastList: ForecastEntry[]): DailyForecast[] {
    if (!forecastList || forecastList.length === 0) return [];

    const today = new Date().toISOString().split("T")[0]; // Compute once
    const groupedData: Record<string, { temps: number[]; conditions: Weather[] }> = {};

    forecastList.forEach((entry) => {
        const date = entry.dt_txt.split(" ")[0]; // Extract the date (YYYY-MM-DD)
        
        if (date === today) return; // Skip today's data

        if (!groupedData[date]) {
            groupedData[date] = { temps: [], conditions: [] };
        }

        groupedData[date].temps.push(entry.main.temp);

        if (entry.weather && entry.weather.length > 0) {
            groupedData[date].conditions.push(entry.weather[0]);
        }
    });

    return Object.entries(groupedData).map(([date, data]) => {

        const minTemp = Math.min(...data.temps);
        const maxTemp = Math.max(...data.temps);
        const condition = data.conditions.length > 0 ? data.conditions[0] : null;

        return { date, minTemp, maxTemp, condition };
    });
}

export function getWeatherIconUrl(icon: string | undefined): string {
    return `http://openweathermap.org/img/wn/${icon}.png`;
}




  