import api from './axios';

export const fetchFields = async () => {
  try {
    const response = await api.get('/api/fields');
    return response.data;
  } catch (error) {
    console.error('풋살장 데이터 로드 실패:', error);
    throw error;
  }
};
