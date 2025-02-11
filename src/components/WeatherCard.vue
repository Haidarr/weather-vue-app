<script setup lang="ts">
import { computed } from 'vue';
import { useWeatherStore } from '@/stores/weatherStore';
import { 
  IonSpinner,
  IonSegmentView, 
  IonSegmentContent,
  IonFab,
  IonFabButton,
  IonIcon
} from '@ionic/vue';
import { refresh } from 'ionicons/icons';

const weatherStore = useWeatherStore();

const getCity = computed(() => {
  return weatherStore.selectedCity;
});

const fetchWeatherData = async () => {
  console.log('fetchWeatherData');
  if (!weatherStore.weatherData || !weatherStore.weatherData[weatherStore.selectedCity]) {
    await weatherStore.loadWeatherData(weatherStore.selectedCity);
  }
};

fetchWeatherData();
</script>

<template>
    <ion-segment-view>
      <ion-segment-content :id="weatherStore.selectedCity">
        <div v-if="weatherStore.loading" class="loading-container">
          <IonSpinner name="dots" />
          <p>Loading ...</p>
        </div>

        <div v-else-if="weatherStore.error" class="error-container">
          <p>{{ weatherStore.error }}</p>
        </div>

        <template v-else>
          <NextHoursForecast :currentCity="getCity"/>
          <FiveDaysForecast :currentCity="getCity"/>
        </template>

      </ion-segment-content>
    </ion-segment-view>

    <ion-fab slot="fixed" vertical="bottom" horizontal="end">
      <ion-fab-button @click="weatherStore.refreshWeatherData()">
        <ion-icon :icon="refresh"></ion-icon>
      </ion-fab-button>
    </ion-fab>
</template>