import api from './axios';

// 로그인 API (토큰 발급용)
export const loginApi = async (credential) => {
  try {
    const response = await api.post('/api/members/login', credential);
    return response.data;
  } catch (error) {
    console.error('로그인 실패:', error);
    throw error;
  }
};

// 유저 정보 조회 API
export const fetchUserInfo = async () => {
  try {
    const response = await api.get('/api/members/user-info');
    return response.data;
  } catch (error) {
    console.error('유저 정보 조회 실패:', error);
    throw error;
  }
};
