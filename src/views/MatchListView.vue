<script setup>
import { ref } from 'vue';
import MatchCard from '../components/match/MatchCard.vue';

const matches = ref([
  {
    id: 1,
    time: '19:00',
    title: '초보 환영! 즐겜하실 분',
    stadium: '반포 종합운동장',
    level: '아마추어',
    current: 4,
    max: 6,
    status: '모집중',
  },
  {
    id: 2,
    time: '21:00',
    title: '빡겜 매치 (실력자만)',
    stadium: '잠실 풋살장 A구장',
    level: '세미프로',
    current: 5,
    max: 6,
    status: '마감임박',
  },
  {
    id: 3,
    time: '20:00',
    title: '불금 풋살 한판',
    stadium: '고양 풋살장',
    level: '모든레벨',
    current: 2,
    max: 6,
    status: '모집중',
  },
]);
</script>

<template>
  <div class="p-4 relative min-h-full">
    <h2 class="text-lg font-bold text-gray-800 mb-4">참여 가능한 매치 ⚽</h2>

    <MatchCard v-for="item in matches" :key="item.id" :match="item" />

    <button
      class="fixed bottom-20 right-[calc(50%-280px)] w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center text-3xl hover:bg-green-600 transition-colors z-10 md:right-8">
      +
    </button>
  </div>
</template>
