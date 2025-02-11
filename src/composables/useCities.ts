import { ref, computed } from "vue";
import type { City } from "@/types/city";

const isLoading = ref<boolean>(true);
const cities = ref<City[]>([]);

export function useCities() {
    const searchQuery = ref<string>("");
    const loadCities = async () => {
        if (cities.value.length > 0) return;

        try {
            const response = await fetch("/cities.csv");
            const text = await response.text();
            const rows = text.split("\n").map(row => row.split(","));
            cities.value = rows
                .slice(1) // Skip header
                .map(row => ({ id: row[0], city: row[1] })) // Extract city_id and city_name
                .filter(city => city.city?.trim()); // Remove empty values

        } catch (error) {
            console.error("Error loading cities:", error);
        } finally {
            isLoading.value = false;
        }
    };

    // Computed property for filtered cities (search)
    const filteredCities = computed(() => {
        if (!searchQuery.value.trim() || searchQuery.value?.length < 3) return [];

        return cities.value.filter(city =>
        city.city?.toLowerCase().includes(searchQuery.value.toLowerCase())
        );
    });

  return { loadCities, cities, isLoading, searchQuery, filteredCities };
}
