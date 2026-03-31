<script setup>
import { fetchMatchDetail } from '@/api/match';
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const matchId = route.params.id;

const match = ref(null);

onMounted(async () => {
  try {
    match.value = await fetchMatchDetail(matchId);
  } catch (error) {
    alert('데이터 로딩 오류');
    router.push('/matches');
  }
});

const goBack = () => {
  router.back();
};
</script>
<template>
  <div
    v-if="!match"
    class="flex justify-center items-center h-full text-gray-500">
    데이터를 불러오는 중...
  </div>

  <div v-else class="bg-gray-50 min-h-screen relative pb-24">
    <header
      class="h-14 bg-white flex items-center px-4 border-b border-gray-200 sticky top-0 z-10">
      <button @click="goBack" class="text-xl mr-3">⬅️</button>
      <h1 class="text-lg font-bold text-gray-800">매치 상세</h1>
    </header>

    <div class="bg-white p-6 mb-2">
      <div class="flex justify-between items-start mb-4">
        <div>
          <span
            class="inline-block px-2.5 py-1 bg-[#E8F9F0] text-primary text-[10px] font-extrabold rounded-full mb-2">
            {{ match.matchStatus }}
          </span>
          <h2 class="text-xl font-bold text-gray-800">{{ match.title }}</h2>
        </div>
      </div>

      <div class="space-y-3 mt-6">
        <div class="flex items-center text-sm">
          <span class="w-8 text-xl text-center mr-2">⏰</span>
          <div>
            <p class="text-gray-800 font-medium">
              {{ match.startTime }} ~ {{ match.endTime }}
            </p>
          </div>
        </div>

        <div class="flex items-center text-sm">
          <span class="w-8 text-xl text-center mr-2">🏟️</span>
          <div>
            <p class="text-gray-800 font-medium">{{ match.fieldName }}</p>
            <p class="text-xs text-gray-500">{{ match.location }}</p>
          </div>
        </div>

        <div class="flex items-center text-sm">
          <span class="w-8 text-xl text-center mr-2">👥</span>
          <div>
            <p class="text-gray-800 font-medium">
              인원 {{ match.currentCapacity }} / {{ match.maxCapacity }}명
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-white p-6">
      <h3 class="font-bold text-gray-800 mb-4">매치 주최자</h3>
      <div class="flex items-center">
        <div
          class="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center mr-3">
          👤
        </div>
        <p class="font-medium text-gray-800">{{ match.hostName }}</p>
      </div>
    </div>

    <div
      class="fixed bottom-0 w-full max-w-[600px] p-4 bg-white border-t border-gray-200">
      <button
        class="w-full py-3.5 rounded-xl font-bold text-white transition-colors"
        :class="
          match.statusCode === 'RECRUITING'
            ? 'bg-primary hover:bg-green-600'
            : 'bg-gray-300 cursor-not-allowed'
        "
        :disabled="match.statusCode !== 'RECRUITING'">
        {{
          match.statusCode === 'RECRUITING'
            ? '참여 신청하기'
            : '모집이 마감되었습니다'
        }}
      </button>
    </div>
  </div>
</template>
