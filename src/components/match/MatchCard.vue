<script setup>
defineProps({
  match: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex items-center p-4 mb-3 bg-white border border-gray-100 rounded-xl shadow-sm cursor-pointer hover:shadow-md transition-shadow">
    <div
      class="flex flex-col items-center justify-center mr-4 min-w-[65px] border-r border-gray-100 pr-3">
      <span class="text-xl font-extrabold text-gray-800 leading-none mb-1">
        {{ match.startTime }}
      </span>
      <span class="text-[10px] text-gray-400 font-medium">
        {{ match.endTime }} 종료
      </span>
    </div>

    <div class="flex-1 overflow-hidden pr-2 ml-1">
      <h3 class="font-bold text-gray-800 text-[15px] mb-1 truncate">
        {{ match.fieldName }}
      </h3>

      <p class="text-[11px] text-gray-500 truncate mb-1">
        📍 {{ match.location }} · ⚽ {{ match.level }}
      </p>

      <p class="text-[10px] text-gray-400 truncate">
        👤
        <span class="font-medium text-gray-500">{{ match.hostName }}</span>
        주최
      </p>
    </div>

    <div class="flex flex-col items-end min-w-[65px]">
      <div
        class="flex items-center justify-center px-2.5 py-1 rounded-full mb-1.5"
        :class="{
          'bg-[#E8F9F0] text-primary': match.statusCode === 'RECRUITING', // 모집중: 연한 초록 바탕에 쨍한 초록 글씨
          'bg-gray-800 text-white': match.statusCode === 'CONFIRMED', // 모집완료: 어두운 회색
          'bg-red-50 text-red-500': match.statusCode === 'CANCELED', // 취소됨: 연한 빨강 바탕에 빨강 글씨
          'bg-gray-100 text-gray-400': match.statusCode === 'COMPLETED', // 경기완료: 연한 회색 바탕에 짙은 회색 글씨
        }">
        <span class="text-[10px] font-extrabold">{{ match.matchStatus }}</span>
      </div>

      <span class="text-[11px] font-medium text-gray-400 mr-1">
        <span
          :class="{
            'text-primary font-bold': match.statusCode === 'RECRUITING',
          }">
          {{ match.currentCapacity }}
        </span>
        / {{ match.maxCapacity }}
      </span>
    </div>
  </div>
</template>
