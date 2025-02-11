
<script setup lang="ts">
import { useWeatherStore } from '@/stores/weatherStore'
import { getWeatherIconUrl } from '@/utils/helper';
import { formatTime } from '@/utils/dates';
import { 
  IonCard, 
    IonCardHeader, 
    IonCardTitle, 
    IonCardContent, 
    IonText,
    IonSegment,
    IonSegmentButton
} from '@ionic/vue';

const weatherStore = useWeatherStore();
const props = defineProps<{
  currentCity: string;
}>();

</script>
<template>
    <ion-card>
        <ion-card-header>
          <ion-card-title>Next Hours </ion-card-title>
        </ion-card-header>
        <ion-card-content>
            <ion-segment  
                :scrollable="true" >
              <template v-for="(item, index) in weatherStore.weatherData[currentCity]?.list" :key="index">
                <ion-segment-button class="text-center">
                    <img :alt="item.weather[0]?.description" 
                        :src="getWeatherIconUrl(item.weather[0]?.icon)" 
                    />
                    <p>{{ item.main?.temp }}°</p>
                    <ion-text color="primary">
                        <p class="text-primary">{{ item.main?.humidity }} %</p>
                    </ion-text>
                    <ion-text>
                        <p>{{ formatTime(item?.dt_txt) }}</p>
                    </ion-text>
                </ion-segment-button>
              </template>
            </ion-segment>
        </ion-card-content>
      </ion-card>
</template>