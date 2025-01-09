// src/router.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';
import DetailsPage from './views/DetailsPage.vue';

const routes = [
  { path: '/', name: 'Home', component: HomePage },
  { path: '/details', name: 'Detail', component: DetailsPage },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
