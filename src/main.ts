import { createApp } from 'vue';
import App from '@/App.vue';
import router from './router';
import TheNav from './components/TheNav.vue';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
// import AppCard from '@/components/AppCard.vue';

const app = createApp(App);

// 전역으로 등록한 컴포넌트
// app.component('TheNav', TheNav);

app.provide('app-message', 'app message 입니당');
app.provide('msg', 'hello msg');

app.config.globalProperties.msg = 'hello';
app.use(router).mount('#app');
