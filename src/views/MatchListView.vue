<script setup>
import { onMounted, ref } from 'vue';
import MatchCard from '../components/match/MatchCard.vue';
import { fetchMatches } from '@/api/match';

const matches = ref([]);

onMounted(async () => {
  try {
    const data = await fetchMatches();
    matches.value = data;
  } catch (error) {
    console.error('매치 목록 로딩 실패');
  }
});
</script>

<template>
  <div class="p-4 relative min-h-full">
    <h2 class="text-lg font-bold text-gray-800 mb-4">참여 가능한 매치 ⚽</h2>

    <div v-if="matches.length === 0" class="text-center text-gray-500 py-10">
      현재 모집 중인 매치가 없습니다. (로딩중...)
    </div>
    <MatchCard v-else v-for="item in matches" :key="item.id" :match="item" />

    <button
      class="fixed bottom-20 right-[calc(50%-280px)] w-14 h-14 bg-primary text-white rounded-full shadow-lg flex items-center justify-center text-3xl hover:bg-green-600 transition-colors z-10 md:right-8">
      +
    </button>
  </div>
</template>
