import api from './axios';
import { mapToMatchModel } from './mapper/matchMapper';

// 매치 정보 조회
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

// 매치 단 건 조회 (상세페이지)
export const fetchMatchDetail = async (id) => {
  try {
    const response = await api.get(`/api/matches/${id}`);
    return mapToMatchModel(response.data);
  } catch (error) {
    console.error('매치 상세 데이터 조회 실패:', error);
    throw error;
  }
};

// 매치 신청 메서드
// export const applyToMatch = async (matchId) => {
//     try {
//         const response = await api.post()
//     }
// }
