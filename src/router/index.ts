import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomeView',
    component: import('../views/HomeView.vue'),
  },
  {
    path: '/about/:userId/:name',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/foldExample',
    name: 'FoldExample',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: import(
      /* webpackChunkName: "about" */ '../views/FoldExample.vue'
    ),
  },
];

const router = createRouter({
  history: createWebHistory(), // 히스토리 모드로 설정
  routes, // 위에서 생성한 routes 객체 배열
});

export default router;
