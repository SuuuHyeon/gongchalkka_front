<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/auth'; // Pinia 스토어 가져오기

const router = useRouter();
const authStore = useAuthStore(); // 로그인 로직이 들어있는 스토어 장착!

const email = ref('');
const password = ref('');
const errorMessage = ref('');

const handleLogin = async () => {
  try {
    // 스토어의 login 함수 호출!
    await authStore.login({
      email: email.value, // 백엔드 변수명이 loginId 등이라면 그에 맞게 변경
      password: password.value,
    });

    // 로그인 성공 시 메인 화면(구장 리스트)으로 이동
    router.push('/');
  } catch (error) {
    errorMessage.value = '이메일 또는 비밀번호가 일치하지 않습니다.';
  }
};
</script>

<template>
  <div
    class="min-h-screen bg-gray-50 flex flex-col justify-center px-6 relative max-w-[600px] mx-auto shadow-lg">
    <button
      @click="router.back()"
      class="absolute top-5 left-4 text-2xl text-gray-500">
      ✕
    </button>

    <div class="text-center mb-10">
      <h1 class="text-4xl font-extrabold text-primary mb-2">공찰까</h1>
      <p class="text-gray-500 text-sm">지금 바로 풋살 매치에 참여해보세요!</p>
    </div>

    <form @submit.prevent="handleLogin" class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          이메일
        </label>
        <input
          v-model="email"
          type="email"
          required
          class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          placeholder="이메일을 입력해주세요" />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">
          비밀번호
        </label>
        <input
          v-model="password"
          type="password"
          required
          class="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          placeholder="비밀번호를 입력해주세요" />
      </div>

      <p v-if="errorMessage" class="text-red-500 text-xs font-medium">
        {{ errorMessage }}
      </p>

      <button
        type="submit"
        class="w-full py-3.5 mt-4 bg-primary text-white font-bold rounded-xl hover:bg-green-600 transition-colors">
        로그인
      </button>
    </form>

    <div class="mt-6 text-center text-sm text-gray-500">
      아직 계정이 없으신가요?
      <a href="#" class="text-primary font-bold ml-1">회원가입</a>
    </div>
  </div>
</template>
