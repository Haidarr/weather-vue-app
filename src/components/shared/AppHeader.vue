<script setup lang="ts">
import { ref } from 'vue';
import { IonHeader, IonToolbar, IonTitle, IonButton, IonButtons, IonIcon } from '@ionic/vue';
import { search, close } from 'ionicons/icons';
const showSearch = ref(false);
</script>
<template>
    <ion-header>
        <ion-toolbar color="primary">
            <ion-title slot="start">Simple Weather</ion-title>
            <ion-buttons slot="end">
            <ion-button @click="showSearch = !showSearch"> 
                <ion-icon slot="icon-only" :icon="showSearch ? close : search"></ion-icon>
            </ion-button>
            </ion-buttons>      
        </ion-toolbar>
        <ion-toolbar  color="primary" v-if="showSearch">
            <SearchBar />
        </ion-toolbar>
    </ion-header>
</template>