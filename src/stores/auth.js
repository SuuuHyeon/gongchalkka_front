import { fetchUserInfo, loginApi } from '@/api/auth';
import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const accessToken = ref(localStorage.getItem('accessToken') || null);
  const user = ref(null); // 유저 상태 값

  const login = async (loginData) => {
    // 로그인 api로 토큰 값 가져옴
    const data = await loginApi(loginData);

    // 토큰 값 저장
    const receivedToken = data.accessToken || data.token;
    accessToken.value = receivedToken;
    localStorage.setItem('accessToken', receivedToken);
    // 리프레쉬 토큰은??

    try {
      // 유저 정보 조회, 저장
      const userData = await fetchUserInfo();
      user.value = userData;
    } catch (error) {
      console.error('토큰은 받았지만 유저 정보 조회 실패:', error);
      logout();
      throw error;
    }
  };

  const logout = () => {
    // 초기화
    accessToken.value = null;
    user.value = null;
    localStorage.removeItem('accessToken');
  };

  return { accessToken, user, login, logout };
});
