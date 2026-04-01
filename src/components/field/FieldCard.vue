<script setup>
// 부모 컴포넌트(리스트 화면)로부터 'field'이라는 이름의 데이터를 받아옵니다.
defineProps({
  field: {
    type: Object,
    required: true,
  },
});
</script>

<template>
  <div
    class="flex items-center p-4 mb-3 bg-white border border-gray-100 rounded-xl shadow-sm">
    <div
      class="w-20 h-20 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 text-xs shrink-0 mr-4">
      IMG
    </div>

    <div class="flex-1">
      <h3 class="font-bold text-gray-800 text-base mb-1">{{ field.name }}</h3>
      <p class="text-sm text-gray-500">📍 {{ field.location }}</p>
    </div>

    <button
      class="px-3 py-1.5 bg-[#E8F9F0] text-primary font-bold text-xs rounded-md">
      예약하기
    </button>
  </div>
</template>
