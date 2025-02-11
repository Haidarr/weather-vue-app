<script setup lang="ts">
import { useWeatherStore } from '@/stores/weatherStore';
import { formatDateTime } from '@/utils/dates';
import { IonFooter, IonToolbar, IonTitle } from '@ionic/vue';
const weatherStore = useWeatherStore();
</script>
<template>
    <ion-footer>
    <ion-toolbar color="primary">
      <ion-title slot="end">
        <small>
            Last updated on {{formatDateTime(weatherStore.lastUpdated ?? '')}}
        </small>
      </ion-title>
    </ion-toolbar>
  </ion-footer>
</template>