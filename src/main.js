import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/css/app.css';
import BackToTop from 'vue-backtotop';

import feather from 'feather-icons';
feather.replace();

const app = createApp(App);
app.use(router);
app.use(BackToTop);
app.mount('#app');

const appTheme = localStorage.getItem('theme');
const body = document.querySelector('body');

// Apply the appropriate theme class to the body element
if (appTheme === 'dark' && body.classList.contains('app-theme')) {
	body.classList.add('bg-primary-dark');
} else {
	body.classList.add('bg-secondary-light');
}