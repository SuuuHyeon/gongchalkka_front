import LoginView from '@/views/LoginView.vue';
import MatchDetailView from '@/views/MatchDetailView.vue';
import MatchListView from '@/views/MatchListView.vue';
import MyPageView from '@/views/MyPageView.vue';
import FieldsListView from '@/views/FieldsListView.vue';

import { createRouter, createWebHistory } from 'vue-router';

// 라우터 설정

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
  },
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/fields',
      name: 'fields',
      component: FieldsListView,
    },
    {
      path: '/',
      name: 'matches',
      component: MatchListView,
    },
    {
      path: '/matches/:id',
      name: '/match-detail',
      component: MatchDetailView,
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
    },
    {
      path: '/mypage',
      name: 'mypage',
      component: MyPageView,
    },
  ],
});

export default router;
