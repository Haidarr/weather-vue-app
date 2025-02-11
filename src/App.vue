

<script setup lang="ts">
import { IonApp, IonRouterOutlet, IonContent} from '@ionic/vue';
</script>

<template>
   <ion-app>

    <AppHeader />   
    <ion-content>
      <ion-router-outlet />
    </ion-content>

    <AppFooter />
  </ion-app>
</template>

