import dayjs from 'dayjs';

export const mapToMatchModel = (dto) => {
  return {
    id: dto.id,
    startTime: dayjs(dto.startTime).format('HH:mm'),
    endTime: dayjs(dto.endTime).format('HH:mm'),
    maxCapacity: dto.maxCapacity,
    currentCapacity: dto.currentCapacity,
    matchStatus: STATUS_MAP[dto.status] || dto.status,
    statusCode: dto.status,

    fieldId: dto.fieldId,
    fieldName: dto.fieldName,
    location: dto.location,
    hostName: dto.hostName,

    level: '모든레벨',
  };
};

// 백엔드 Enum -> 프론트엔드 노출용 한글 텍스트 변환
const STATUS_MAP = {
  RECRUITING: '모집중',
  CONFIRMED: '모집완료',
  CANCELED: '취소됨',
  COMPLETED: '경기완료',
};
