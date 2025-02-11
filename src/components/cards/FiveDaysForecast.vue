<script setup lang="ts">
import { useWeatherStore } from '@/stores/weatherStore'
import { processWeatherData, getWeatherIconUrl } from '@/utils/helper';
import { formatDate } from '@/utils/dates';
import { 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardContent, 
  IonList,
  IonItem,
  IonThumbnail,
  IonLabel,
} from '@ionic/vue';

const weatherStore = useWeatherStore();
const props = defineProps<{
  currentCity: string;
}>();

</script>
<template>
    <ion-card>
        <ion-card-header>
            <ion-card-title>Next 5 days</ion-card-title>
        </ion-card-header>
        <ion-card-content>
            <ion-list>
                <ion-item v-for="item in processWeatherData(weatherStore.weatherData[currentCity]?.list) " :key="item.date">
                <ion-thumbnail slot="start">
                    <img alt="Silhouette of mountains" 
                    :src="getWeatherIconUrl(item.condition?.icon)" />
                </ion-thumbnail>
                <ion-label>
                    <div class="text-center">
                    <h2><b>{{ formatDate(item.date) }}</b></h2>
                    <p>{{ item.condition?.main }} throughout the day.</p>
                    </div>
                    
                </ion-label>
                <ion-label slot="end" v-if="item.minTemp && item.maxTemp">
                    {{ Math.round(item.minTemp) }}° {{ Math.round(item.maxTemp) }}°
                </ion-label>
                </ion-item>

            </ion-list>
        </ion-card-content>
    </ion-card>
</template>