import { createRouter, createWebHistory } from 'vue-router';
import BasicExamples from '../views/BasicExamples.vue';
import PracticalExamples from '../views/PracticalExamples.vue';

const routes = [
  { path: '/basic-examples', component: BasicExamples },
  { path: '/practical-examples', component: PracticalExamples },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
