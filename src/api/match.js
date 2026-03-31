import api from './axios';
import { mapToMatchModel } from './mapper/matchMapper';

export const fetchMatches = async () => {
  try {
    const response = await api.get('/api/matches');
    const data = response.data.content;
    console.log(data);
    return data.map(mapToMatchModel);
  } catch (error) {
    console.error('매치 정보 로드 실패', error);
    throw error;
  }
};
