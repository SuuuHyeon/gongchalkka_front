import LoginView from '@/views/LoginView.vue';
import MatchDetailView from '@/views/MatchDetailView.vue';
import MatchListView from '@/views/MatchListView.vue';
import MyPageView from '@/views/MyPageView.vue';
import StadiumListView from '@/views/StadiumListView.vue';

import { createRouter, createWebHistory } from 'vue-router';

// 라우터 설정

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'stadium',
      component: StadiumListView,
    },
    {
      path: '/matches',
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
