import { createApp } from 'vue';
import App from './App.vue';
import AppHeader from './components/AppHeader.vue';
import AppView from './components/AppView.vue';
import AppNav from './components/AppNav.vue';
import BookComponent from './components/BookComponent.vue';

const app = createApp(App); // {} 는 Root Component를 생성할 때 넣어주는 옵션
app.component("AppNav", AppNav);
app.component("AppHeader", AppHeader);
app.component("AppView", AppView);
app.component("BookComponent", BookComponent);
app.mount("#app");