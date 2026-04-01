<script setup>
import { ref } from 'vue';
import FieldCard from '../components/field/FieldCard.vue';

// [더미 데이터] 추후 백엔드 API에서 받아올 데이터의 형태입니다.
// Vue에서는 상태(변하는 값)를 만들 때 ref()로 감싸줍니다.
const fields = ref([
  { id: 1, name: '서울 월드컵경기장 보조구장', location: '서울 마포구' },
  { id: 2, name: '용산 아이파크몰 풋살장', location: '서울 용산구' },
  { id: 3, name: '탄천 종합운동장', location: '경기 성남시' },
  { id: 4, name: '안양 새물공원', location: '경기 안양시' },
]);
</script>

<template>
  <div class="p-4">
    <h2 class="text-lg font-bold text-gray-800 mb-4">내 주변 풋살장 🏟️</h2>

    <FieldCard v-for="item in fields" :key="item.id" :field="item" />
  </div>
</template>
