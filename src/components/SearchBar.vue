<script setup lang="ts">
import { computed } from "vue";
import { useCities } from "@/composables/useCities";
import { useWeatherStore } from '@/stores/weatherStore';
import { IonSearchbar, IonList, IonItem, IonLabel, IonSpinner } from "@ionic/vue";

const { loadCities } = useCities();
const weatherStore = useWeatherStore();
const { filteredCities, searchQuery, isLoading } = useCities();

const showList = computed(() => {
  return searchQuery.value.length > 0;
});

const onChangeCity = (city: string) => {
  searchQuery.value = "";
  weatherStore.selectedCity =  city;
  weatherStore.onChangeCity(city);
};

loadCities();
</script>
<template>
  <div>
    <IonSearchbar
        v-model="searchQuery"
        debounce="300"
        :animated="true"
        :show-clear-button="true"
        placeholder="Search city..."
      />

      <ion-list v-if="showList && filteredCities.length" >
        <ion-item v-for="city in filteredCities" :key="city.id" :button="true" >
          <IonLabel @click="onChangeCity(city.city)">{{ city.city }}</IonLabel>
        </ion-item>
      </ion-list>

      <div v-if="isLoading" class="loading-container">
        <IonSpinner name="dots" />
        <p>Loading cities...</p>
      </div>
  </div>
</template>