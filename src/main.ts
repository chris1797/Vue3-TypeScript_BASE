import { createApp } from 'vue';
import App from '@/App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AppCard from '@/components/AppCard.vue';

const app = createApp(App);

// 전역으로 등록한 컴포넌트
// app.component('AppCard', AppCard);

app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
