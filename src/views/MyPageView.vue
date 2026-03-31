<script setup>
import { useRouter } from 'vue-router';
import { useAuthStore } from '@/stores/auth'; // Pinia 스토어 임포트

const router = useRouter();
const authStore = useAuthStore();

// 로그인 페이지로 이동하는 함수
const goToLogin = () => {
  router.push('/login');
};

// 로그아웃 처리 함수
const handleLogout = () => {
  if (confirm('정말 로그아웃 하시겠습니까?')) {
    authStore.logout(); // 스토어의 토큰 및 유저 정보 날리기
    router.push('/'); // 홈(구장 리스트)으로 쫓아내기
  }
};
</script>

<template>
  <div class="p-4 h-full relative">
    <div
      v-if="!authStore.accessToken"
      class="flex flex-col items-center justify-center h-[70vh]">
      <div class="text-6xl mb-4">🔒</div>
      <h2 class="text-lg font-bold text-gray-800 mb-2">로그인이 필요해요</h2>
      <p class="text-sm text-gray-500 mb-8">
        공찰까의 다양한 서비스를 이용해보세요!
      </p>

      <button
        @click="goToLogin"
        class="w-full max-w-[200px] py-3.5 bg-primary text-white font-bold rounded-xl hover:bg-green-600 transition-colors shadow-sm">
        로그인 / 회원가입
      </button>
    </div>

    <div v-else>
      <h2 class="text-xl font-bold text-gray-800 mb-6 mt-2">마이페이지</h2>

      <div
        class="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center mb-6">
        <div
          class="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center text-2xl mr-4 shrink-0">
          ⚽
        </div>
        <div class="flex-1">
          <h3 class="text-lg font-bold text-gray-800">
            {{ authStore.user?.nickname || '공찰까 회원' }}님
          </h3>
          <p class="text-sm text-gray-500">
            {{ authStore.user?.email || '이메일 정보 없음' }}
          </p>
        </div>
        <button
          class="text-sm text-gray-400 font-medium px-3 py-1 border border-gray-200 rounded-lg">
          수정
        </button>
      </div>

      <div
        class="bg-white rounded-2xl shadow-sm border border-gray-100 mb-6 overflow-hidden">
        <div
          class="px-5 py-4 border-b border-gray-50 flex justify-between items-center cursor-pointer hover:bg-gray-50">
          <span class="font-medium text-gray-700">신청한 매치 내역</span>
          <span class="text-gray-300">›</span>
        </div>
        <div
          class="px-5 py-4 border-b border-gray-50 flex justify-between items-center cursor-pointer hover:bg-gray-50">
          <span class="font-medium text-gray-700">찜한 구장</span>
          <span class="text-gray-300">›</span>
        </div>
        <div
          class="px-5 py-4 flex justify-between items-center cursor-pointer hover:bg-gray-50">
          <span class="font-medium text-gray-700">고객센터</span>
          <span class="text-gray-300">›</span>
        </div>
      </div>

      <button
        @click="handleLogout"
        class="w-full py-3.5 bg-gray-100 text-gray-500 font-bold rounded-xl hover:bg-gray-200 transition-colors">
        로그아웃
      </button>
    </div>
  </div>
</template>
