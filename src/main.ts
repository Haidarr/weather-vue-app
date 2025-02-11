import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { IonicVue } from '@ionic/vue';
import App from './App.vue'
import router from './router'

// Ionic core CSS
import '@ionic/vue/css/core.css';
import '@ionic/vue/css/normalize.css';
import '@ionic/vue/css/structure.css';
import '@ionic/vue/css/typography.css';

// Custom css
import './style.css'

const app = createApp(App)
.use(IonicVue)
app.use(createPinia())
app.use(router)

router.isReady().then(() => {
app.mount('#app');
});