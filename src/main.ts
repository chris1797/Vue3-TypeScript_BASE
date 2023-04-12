import { createApp } from 'vue';
import App from '@/App.vue';
import router from './router';
import 'bootstrap/dist/css/bootstrap.min.css';
// import AppCard from '@/components/AppCard.vue';

const app = createApp(App);

// 전역으로 등록한 컴포넌트
// app.component('AppCard', AppCard);

app.provide('app-message', 'app message 입니당');
app.provide('msg', 'hello msg');

app.config.globalProperties.msg = 'hello';
app.mount('#app');
import 'bootstrap/dist/js/bootstrap.js';
