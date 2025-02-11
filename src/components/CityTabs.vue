<script setup lang="ts">
import { useWeatherStore } from '@/stores/weatherStore';
import { IonSegment, IonSegmentButton } from '@ionic/vue';
const weatherStore = useWeatherStore();
</script>
<template>
  <ion-segment  
    :scrollable="true"  
    v-model="weatherStore.selectedCity" 
    color="danger"
  >
  <template v-for="city in weatherStore.mainCities" :key="city">
    <ion-segment-button :value="city" @click="weatherStore.onChangeCity(city)">
      {{ city }}
    </ion-segment-button>
  </template>
  </ion-segment>
</template>

<style scoped>
 .segment-scrollable {
    min-height: 60px;
  }
</style>