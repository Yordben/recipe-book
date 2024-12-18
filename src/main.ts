import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
// In main.ts
import './assets/main.css';


createApp(App).use(router).mount('#app');
